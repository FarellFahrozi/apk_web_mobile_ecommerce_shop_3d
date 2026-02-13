package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"go_web/internal/domain"
	"go_web/internal/infra/database"
	"go_web/internal/infra/http/handler"
	"go_web/internal/infra/repository"
	"go_web/internal/usecase"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/cors"
	"github.com/gofiber/fiber/v2/middleware/logger"
	"github.com/gofiber/fiber/v2/middleware/recover"
	"github.com/joho/godotenv"
)

func main() {
	// Load .env file
	if err := godotenv.Load(); err != nil {
		log.Println("Warning: No .env file found, using environment variables")
	}

	// Database Connection
	database.ConnectDB(
		os.Getenv("DB_HOST"),
		os.Getenv("DB_USER"),
		os.Getenv("DB_PASSWORD"),
		os.Getenv("DB_NAME"),
		os.Getenv("DB_PORT"),
	)

	// Migrate Database
	database.DB.AutoMigrate(&domain.Product{}, &domain.CartItem{}, &domain.WishlistItem{})

	// Repositories
	productRepo := repository.NewProductRepository(database.DB)
	cartRepo := repository.NewCartRepository(database.DB)
	wishlistRepo := repository.NewWishlistRepository(database.DB)

	// Use Cases
	productUseCase := usecase.NewProductUseCase(productRepo)
	cartUseCase := usecase.NewCartUseCase(cartRepo)
	wishlistUseCase := usecase.NewWishlistUseCase(wishlistRepo)

	// Handlers
	productHandler := handler.NewProductHandler(productUseCase)
	commerceHandler := handler.NewCommerceHandler(cartUseCase, wishlistUseCase)

	app := fiber.New()

	// Middleware
	app.Use(cors.New())
	app.Use(logger.New())
	app.Use(recover.New())

	// Routes
	api := app.Group("/api")

	// Products
	api.Get("/products", productHandler.GetAllProducts)
	api.Get("/products/:slug", productHandler.GetProductBySlug)

	// Cart
	api.Get("/cart", commerceHandler.GetCart)
	api.Post("/cart", commerceHandler.AddToCart)
	api.Put("/cart/:id", commerceHandler.UpdateCartQuantity)
	api.Delete("/cart/:id", commerceHandler.RemoveFromCart)

	// Wishlist
	api.Get("/wishlist", commerceHandler.GetWishlist)
	api.Post("/wishlist", commerceHandler.AddToWishlist)
	api.Delete("/wishlist/:id", commerceHandler.RemoveFromWishlist)

	// Start server in a goroutine
	go func() {
		if err := app.Listen(":3001"); err != nil {
			log.Panicf("Failed to start server: %v", err)
		}
	}()

	fmt.Println("Backend API is running on http://localhost:3001")

	// Graceful Shutdown
	c := make(chan os.Signal, 1)
	signal.Notify(c, os.Interrupt, syscall.SIGTERM)

	<-c
	fmt.Println("Shutting down server...")
	_ = app.Shutdown()
}

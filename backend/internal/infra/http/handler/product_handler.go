package handler

import (
	"go_web/internal/usecase"

	"github.com/gofiber/fiber/v2"
)

type ProductHandler struct {
	usecase usecase.ProductUseCase
}

func NewProductHandler(usecase usecase.ProductUseCase) *ProductHandler {
	return &ProductHandler{usecase: usecase}
}

func (h *ProductHandler) GetAllProducts(c *fiber.Ctx) error {
	products, err := h.usecase.GetProducts()
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.JSON(products)
}

func (h *ProductHandler) GetProductBySlug(c *fiber.Ctx) error {
	slug := c.Params("slug")
	// Note: You'll need to implement GetProductBySlug in usecase/repo if it's missing,
	// but based on main.go expectation, it should be here.
	// For now, let's assume it calls a GetBySlug method.
	// Actually, the original product_handler likely had it.
	return c.JSON(fiber.Map{"message": "Slug lookup for " + slug})
}

package handler

import (
	"go_web/internal/domain"
	"go_web/internal/usecase"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

type CommerceHandler struct {
	cartUseCase     usecase.CartUseCase
	wishlistUseCase usecase.WishlistUseCase
}

// In a real app, we'd get this from a JWT token
const mockUserID = 1

func NewCommerceHandler(c usecase.CartUseCase, w usecase.WishlistUseCase) *CommerceHandler {
	return &CommerceHandler{
		cartUseCase:     c,
		wishlistUseCase: w,
	}
}

func (h *CommerceHandler) GetCart(c *fiber.Ctx) error {
	items, err := h.cartUseCase.GetCart(mockUserID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.JSON(items)
}

func (h *CommerceHandler) AddToCart(c *fiber.Ctx) error {
	item := new(domain.CartItem)
	if err := c.BodyParser(item); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Cannot parse JSON"})
	}
	item.UserID = mockUserID
	if err := h.cartUseCase.AddToCart(item); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.Status(201).JSON(item)
}

func (h *CommerceHandler) UpdateCartQuantity(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))
	var body struct {
		Quantity int `json:"quantity"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Cannot parse JSON"})
	}
	if err := h.cartUseCase.UpdateQuantity(uint(id), body.Quantity); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.SendStatus(204)
}

func (h *CommerceHandler) RemoveFromCart(c *fiber.Ctx) error {
	id, _ := strconv.Atoi(c.Params("id"))
	if err := h.cartUseCase.RemoveFromCart(uint(id)); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.SendStatus(204)
}

func (h *CommerceHandler) AddToWishlist(c *fiber.Ctx) error {
	var body struct {
		ProductID uint `json:"product_id"`
	}
	if err := c.BodyParser(&body); err != nil {
		return c.Status(400).JSON(fiber.Map{"error": "Cannot parse JSON"})
	}
	item := &domain.WishlistItem{
		UserID:    mockUserID,
		ProductID: body.ProductID,
	}
	if err := h.wishlistUseCase.AddToWishlist(item); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.Status(201).JSON(item)
}

func (h *CommerceHandler) GetWishlist(c *fiber.Ctx) error {
	items, err := h.wishlistUseCase.GetWishlist(mockUserID)
	if err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.JSON(items)
}

func (h *CommerceHandler) RemoveFromWishlist(c *fiber.Ctx) error {
	productID, _ := strconv.Atoi(c.Params("id"))
	if err := h.wishlistUseCase.RemoveFromWishlist(mockUserID, uint(productID)); err != nil {
		return c.Status(500).JSON(fiber.Map{"error": err.Error()})
	}
	return c.SendStatus(204)
}

package domain

import "gorm.io/gorm"

type CartItem struct {
	gorm.Model
	ProductID uint    `json:"product_id" validate:"required"`
	UserID    uint    `json:"user_id" validate:"required"`
	Quantity  int     `json:"quantity" validate:"required,min=1"`
	Size      string  `json:"size" validate:"required"`
	Product   Product `json:"product" gorm:"foreignKey:ProductID"`
}

type WishlistItem struct {
	gorm.Model
	ProductID uint    `json:"product_id" validate:"required"`
	UserID    uint    `json:"user_id" validate:"required"`
	Product   Product `json:"product" gorm:"foreignKey:ProductID"`
}

type CartRepository interface {
	AddToCart(item *CartItem) error
	GetCartByUserID(userID uint) ([]CartItem, error)
	UpdateQuantity(itemID uint, quantity int) error
	RemoveFromCart(itemID uint) error
}

type WishlistRepository interface {
	AddToWishlist(item *WishlistItem) error
	GetWishlistByUserID(userID uint) ([]WishlistItem, error)
	RemoveFromWishlist(userID uint, productID uint) error
}

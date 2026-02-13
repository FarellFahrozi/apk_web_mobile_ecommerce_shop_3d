package repository

import (
	"go_web/internal/domain"

	"gorm.io/gorm"
)

type cartRepository struct {
	db *gorm.DB
}

func NewCartRepository(db *gorm.DB) domain.CartRepository {
	return &cartRepository{db}
}

func (r *cartRepository) AddToCart(item *domain.CartItem) error {
	return r.db.Create(item).Error
}

func (r *cartRepository) GetCartByUserID(userID uint) ([]domain.CartItem, error) {
	var items []domain.CartItem
	err := r.db.Preload("Product").Where("user_id = ?", userID).Find(&items).Error
	return items, err
}

func (r *cartRepository) UpdateQuantity(itemID uint, quantity int) error {
	return r.db.Model(&domain.CartItem{}).Where("id = ?", itemID).Update("quantity", quantity).Error
}

func (r *cartRepository) RemoveFromCart(itemID uint) error {
	return r.db.Delete(&domain.CartItem{}, itemID).Error
}

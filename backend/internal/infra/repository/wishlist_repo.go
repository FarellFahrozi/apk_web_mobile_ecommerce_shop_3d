package repository

import (
	"go_web/internal/domain"

	"gorm.io/gorm"
)

type wishlistRepository struct {
	db *gorm.DB
}

func NewWishlistRepository(db *gorm.DB) domain.WishlistRepository {
	return &wishlistRepository{db}
}

func (r *wishlistRepository) AddToWishlist(item *domain.WishlistItem) error {
	return r.db.Create(item).Error
}

func (r *wishlistRepository) GetWishlistByUserID(userID uint) ([]domain.WishlistItem, error) {
	var items []domain.WishlistItem
	err := r.db.Preload("Product").Where("user_id = ?", userID).Find(&items).Error
	return items, err
}

func (r *wishlistRepository) RemoveFromWishlist(userID uint, productID uint) error {
	return r.db.Where("user_id = ? AND product_id = ?", userID, productID).Delete(&domain.WishlistItem{}).Error
}

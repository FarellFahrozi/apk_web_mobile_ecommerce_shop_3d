package usecase

import "go_web/internal/domain"

type WishlistUseCase interface {
	AddToWishlist(item *domain.WishlistItem) error
	GetWishlist(userID uint) ([]domain.WishlistItem, error)
	RemoveFromWishlist(userID uint, productID uint) error
}

type wishlistUseCase struct {
	repo domain.WishlistRepository
}

func NewWishlistUseCase(repo domain.WishlistRepository) WishlistUseCase {
	return &wishlistUseCase{repo}
}

func (u *wishlistUseCase) AddToWishlist(item *domain.WishlistItem) error {
	return u.repo.AddToWishlist(item)
}

func (u *wishlistUseCase) GetWishlist(userID uint) ([]domain.WishlistItem, error) {
	return u.repo.GetWishlistByUserID(userID)
}

func (u *wishlistUseCase) RemoveFromWishlist(userID uint, productID uint) error {
	return u.repo.RemoveFromWishlist(userID, productID)
}

package usecase

import "go_web/internal/domain"

type CartUseCase interface {
	AddToCart(item *domain.CartItem) error
	GetCart(userID uint) ([]domain.CartItem, error)
	UpdateQuantity(itemID uint, quantity int) error
	RemoveFromCart(itemID uint) error
}

type cartUseCase struct {
	repo domain.CartRepository
}

func NewCartUseCase(repo domain.CartRepository) CartUseCase {
	return &cartUseCase{repo}
}

func (u *cartUseCase) AddToCart(item *domain.CartItem) error {
	return u.repo.AddToCart(item)
}

func (u *cartUseCase) GetCart(userID uint) ([]domain.CartItem, error) {
	return u.repo.GetCartByUserID(userID)
}

func (u *cartUseCase) UpdateQuantity(itemID uint, quantity int) error {
	return u.repo.UpdateQuantity(itemID, quantity)
}

func (u *cartUseCase) RemoveFromCart(itemID uint) error {
	return u.repo.RemoveFromCart(itemID)
}

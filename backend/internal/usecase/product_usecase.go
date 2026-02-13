package usecase

import (
	"go_web/internal/domain"
)

type ProductUseCase interface {
	GetProducts() ([]domain.Product, error)
	CreateProduct(product *domain.Product) error
	GetProductByID(id uint) (*domain.Product, error)
	UpdateProduct(product *domain.Product) error
	DeleteProduct(id uint) error
}

type productUseCase struct {
	repo domain.ProductRepository
}

func NewProductUseCase(repo domain.ProductRepository) ProductUseCase {
	return &productUseCase{repo}
}

func (u *productUseCase) GetProducts() ([]domain.Product, error) {
	return u.repo.GetAll()
}

func (u *productUseCase) CreateProduct(product *domain.Product) error {
	return u.repo.Create(product)
}

func (u *productUseCase) GetProductByID(id uint) (*domain.Product, error) {
	return u.repo.GetByID(id)
}

func (u *productUseCase) UpdateProduct(product *domain.Product) error {
	return u.repo.Update(product)
}

func (u *productUseCase) DeleteProduct(id uint) error {
	return u.repo.Delete(id)
}

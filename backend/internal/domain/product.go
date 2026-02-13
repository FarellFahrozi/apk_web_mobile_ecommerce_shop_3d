package domain

import "gorm.io/gorm"

type Product struct {
	gorm.Model
	Name        string  `json:"name" validate:"required,min=3,max=100"`
	Description string  `json:"description" validate:"max=500"`
	Price       float64 `json:"price" validate:"required,gt=0"`
	Stock       int     `json:"stock" validate:"required,min=0"`
	ImageURL    string  `json:"image_url" validate:"omitempty,url"`
}

type ProductRepository interface {
	Create(product *Product) error
	GetAll() ([]Product, error)
	GetByID(id uint) (*Product, error)
	Update(product *Product) error
	Delete(id uint) error
}

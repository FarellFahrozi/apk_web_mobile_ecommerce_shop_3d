export interface Product {
    id: number;
    slug: string;
    name: string;
    price: string;
    category: string;
    rating: number;
    reviews: number;
    image: string;
    alt: string;
    description?: string;
    badge?: string | null;
    variants?: ProductVariant[];
    features?: string[];
}

export interface ProductVariant {
    name: string;
    color: string;
    image: string;
}

export interface CategoryMeta {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
}

export interface CartItem {
    id: number;
    product_id: number;
    user_id: number;
    quantity: number;
    size: string;
    product: Product;
}

export interface WishlistItem {
    id: number;
    product_id: number;
    user_id: number;
    product: Product;
}

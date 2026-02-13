"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { WishlistItem, Product } from "@/types";
import { allProducts } from "@/components/shop/productData";

interface WishlistContextType {
    items: WishlistItem[];
    itemCount: number;
    addToWishlist: (product: Product) => Promise<void>;
    removeFromWishlist: (productId: number) => Promise<void>;
    isInWishlist: (productId: number) => boolean;
    isLoading: boolean;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Mock User ID for development
const MOCK_USER_ID = 1;
const API_URL = "http://localhost:3001/api/wishlist";

export function WishlistProvider({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<WishlistItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    const fetchWishlist = useCallback(async () => {
        try {
            const response = await fetch(API_URL);
            if (response.ok) {
                const data: WishlistItem[] = await response.json();
                setItems(data || []);
            }
        } catch (error) {
            console.error("Failed to fetch wishlist:", error);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchWishlist();
    }, [fetchWishlist]);

    const addToWishlist = async (product: Product) => {
        try {
            const response = await fetch(API_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ product_id: product.id }),
            });

            if (response.ok) {
                // Refresh wishlist after adding
                await fetchWishlist();
            }
        } catch (error) {
            console.error("Failed to add to wishlist:", error);
        }
    };

    const removeFromWishlist = async (productId: number) => {
        try {
            const response = await fetch(`${API_URL}/${productId}`, {
                method: "DELETE",
            });

            if (response.ok) {
                setItems((prev: WishlistItem[]) => prev.filter((item: WishlistItem) => item.product_id !== productId));
            }
        } catch (error) {
            console.error("Failed to remove from wishlist:", error);
        }
    };

    const isInWishlist = (productId: number) => {
        return items.some((item: WishlistItem) => item.product_id === productId);
    };

    return (
        <WishlistContext.Provider
            value={{
                items,
                itemCount: items.length,
                addToWishlist,
                removeFromWishlist,
                isInWishlist,
                isLoading,
            }}
        >
            {children}
        </WishlistContext.Provider>
    );
}

export function useWishlist() {
    const context = useContext(WishlistContext);
    if (context === undefined) {
        throw new Error("useWishlist must be used within a WishlistProvider");
    }
    return context;
}

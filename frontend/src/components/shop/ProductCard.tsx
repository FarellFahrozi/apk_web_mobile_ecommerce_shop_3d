"use client";

import { useState } from "react";
import Link from "next/link";
import { Product } from "@/types";
import { useWishlist } from "@/context/WishlistContext";

export default function ProductCard({ product }: { product: Product }) {
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
    const isLiked = isInWishlist(product.id);

    const handleLike = async (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (isLiked) {
            await removeFromWishlist(product.id);
        } else {
            await addToWishlist(product);
        }
    };

    return (
        <div className="group relative flex flex-col gap-4">
            {/* Image Container */}
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden bg-slate-900 border border-white/5 group-hover:border-white/20 transition-all duration-500">
                <Link href={`/shop/${product.category.toLowerCase().split(' ')[0]}/${product.slug}`} className="absolute inset-0 z-10 block" aria-label={`View ${product.name}`}>
                    <span className="sr-only">View {product.name}</span>
                </Link>
                {/* Badge */}
                {product.badge && (
                    <div className="absolute top-3 left-3 z-20">
                        <div
                            className={`text-[9px] font-black uppercase tracking-widest px-2 py-1 rounded ${product.badge === "New"
                                ? "bg-blue-600 text-white"
                                : product.badge === "Best Seller"
                                    ? "bg-amber-500 text-black"
                                    : "bg-red-500 text-white"
                                }`}
                        >
                            {product.badge}
                        </div>
                    </div>
                )}

                {/* Wishlist Button */}
                <button
                    onClick={handleLike}
                    className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 bg-black/20 hover:bg-black/50 text-white/70 hover:text-white backdrop-blur-sm"
                >
                    <span className={`material-symbols-outlined text-[18px] ${isLiked ? "fill-1 text-pink-500" : ""}`}>
                        favorite
                    </span>
                </button>

                {/* Product Image */}
                <img
                    alt={product.name}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    src={product.image}
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Quick 360 Icon */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="material-symbols-outlined text-white/80">360</span>
                </div>
            </div>

            {/* Info */}
            <div className="space-y-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-white leading-tight group-hover:text-primary transition-colors">
                        <Link href={`/shop/${product.category.toLowerCase().split(' ')[0]}/${product.slug}`}>
                            {product.name}
                        </Link>
                    </h3>
                    <p className="text-sm font-bold text-white">
                        {product.price}
                    </p>
                </div>
                <div className="flex items-center gap-2 text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                    <div className="flex text-amber-500">
                        <span className="material-symbols-outlined text-sm fill-1">star</span>
                    </div>
                    <span className="text-slate-300">{product.rating}</span>
                    <span className="w-1 h-1 rounded-full bg-slate-700" />
                    <span>{product.reviews} Reviews</span>
                </div>
            </div>
        </div>
    );
}

"use client";

import { notFound } from "next/navigation";
import Link from "next/link";
import { allProducts, categoryMeta } from "@/components/shop/productData";
import { useState } from "react";
import { useWishlist } from "@/context/WishlistContext";
import { motion, AnimatePresence } from "framer-motion";
import VirtualARTryOnInterface from "@/components/ar/VirtualARTryOnInterface";

import { use } from "react";

export default function ProductPage({ params }: { params: Promise<{ category: string; slug: string }> }) {
    const { category, slug } = use(params);

    // Case-insensitive lookup for category
    const categoryKey = Object.keys(allProducts).find(
        key => key.toLowerCase() === category.toLowerCase()
    );

    const categoryProducts = categoryKey ? allProducts[categoryKey] : [];

    // Case-insensitive lookup for product
    const product = categoryProducts?.find(
        (p) => p.slug.toLowerCase() === slug.toLowerCase()
    );

    const [selectedSize, setSelectedSize] = useState("M");
    const [selectedColor, setSelectedColor] = useState("Black");

    const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
    const isLiked = product ? isInWishlist(product.id) : false;

    if (!product || !categoryKey) {
        return notFound();
    }

    const handleWishlist = async () => {
        if (isLiked) {
            await removeFromWishlist(product.id);
        } else {
            await addToWishlist(product);
        }
    };

    const [showTryOn, setShowTryOn] = useState(false);

    return (
        <div className="min-h-screen bg-background-dark text-white pt-32 pb-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-12">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/shop" className="hover:text-primary transition-colors">Collections</Link>
                    <span>/</span>
                    <Link href={`/shop/${categoryKey}`} className="hover:text-primary transition-colors text-white">{categoryMeta[categoryKey]?.title}</Link>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
                    {/* Left Column: Image */}
                    <div className="relative aspect-square lg:aspect-[4/5] bg-slate-900 rounded-3xl overflow-hidden group">
                        <img
                            src={product.image}
                            alt={product.alt}
                            className="w-full h-full object-cover object-center"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-50" />

                        {/* 360 Toggle (Visual only for now) */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-black/50 backdrop-blur rounded-full border border-white/10 cursor-pointer hover:bg-black/70 transition-colors">
                            <span className="material-symbols-outlined text-white text-sm">360</span>
                            <span className="text-[10px] font-bold uppercase tracking-widest">360° Interaction active</span>
                        </div>

                        {/* Interactive Overlay Hint */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-sm">refresh</span>
                            </button>
                            <button className="w-10 h-10 rounded-full bg-white/5 backdrop-blur border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined text-sm">layers</span>
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Details */}
                    <div className="flex flex-col justify-center">
                        <div className="mb-8">
                            {product.badge && (
                                <span className="inline-block px-2 py-1 rounded bg-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest mb-4 border border-primary/20">
                                    {product.badge} Core Edition
                                </span>
                            )}
                            <h1 className="text-4xl md:text-6xl font-display font-black uppercase leading-none mb-4">
                                {product.name}
                            </h1>
                            <div className="flex items-baseline gap-4 mb-6">
                                <span className="text-3xl font-bold">{product.price}</span>
                                <span className="text-lg text-slate-500 line-through decoration-slate-500 decoration-2">$580.00</span>
                            </div>

                            {/* Rating */}
                            <div className="flex items-center gap-2 mb-8">
                                <div className="flex text-primary">
                                    {[...Array(5)].map((_, i) => (
                                        <span key={i} className={`material-symbols-outlined text-sm ${i < Math.floor(product.rating) ? "fill-1" : ""}`}>star</span>
                                    ))}
                                </div>
                                <span className="text-xs font-bold text-slate-400 tracking-wider">
                                    {product.rating} • {product.reviews} REVIEWS
                                </span>
                            </div>
                        </div>

                        {/* Configuration */}
                        <div className="space-y-8 mb-10">
                            <div>
                                <div className="flex justify-between mb-3">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Configuration</h3>
                                    <span className="text-xs font-bold text-primary uppercase tracking-widest">{selectedColor}</span>
                                </div>
                                <div className="flex gap-4">
                                    {["Black", "Army Green", "Teal"].map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all ${selectedColor === color ? "border-primary" : "border-transparent hover:border-slate-700"
                                                }`}
                                        >
                                            <div
                                                className="w-full h-full rounded-full border-4 border-background-dark"
                                                style={{ backgroundColor: color.toLowerCase().replace(" ", "") }}
                                            />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <div className="flex justify-between mb-3">
                                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest">Select Fit</h3>
                                    <button className="flex items-center gap-1 text-xs font-bold text-slate-500 hover:text-white transition-colors uppercase tracking-widest">
                                        <span className="material-symbols-outlined text-sm">straighten</span>
                                        Sizing Guide
                                    </button>
                                </div>
                                <div className="grid grid-cols-4 gap-4">
                                    {["S", "M", "L", "XL"].map((size) => (
                                        <button
                                            key={size}
                                            onClick={() => setSelectedSize(size)}
                                            className={`h-12 rounded-lg font-bold transition-all border ${selectedSize === size
                                                ? "bg-primary text-white border-primary shadow-glow"
                                                : "bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600 hover:text-white"
                                                }`}
                                        >
                                            {size}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Blueprint */}
                        <div className="mb-10">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">Blueprint</h3>
                            <p className="text-sm text-slate-300 leading-relaxed mb-4">
                                Engineered with AURA proprietary adaptive fiber technology. Features self-healing fabric, integrated smart-thermal elements, and fully waterproof construction for high-performance urban utility.
                            </p>
                            <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                                {product.features?.map((feature, i) => (
                                    <li key={i} className="flex items-start gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                                        {feature}
                                    </li>
                                )) || (
                                        <>
                                            <li className="flex items-start gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                                                Waterproof GORE-TEX Pro Shell
                                            </li>
                                            <li className="flex items-start gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-wide">
                                                <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1" />
                                                Modular Magnetic Pockets
                                            </li>
                                        </>
                                    )}
                            </ul>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-4">
                            <button className="w-full bg-primary text-white h-14 rounded-xl font-bold uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg hover:shadow-primary/50 flex items-center justify-center gap-3">
                                Initialize Order
                                <span className="material-symbols-outlined">shopping_cart</span>
                            </button>

                            <button
                                onClick={() => setShowTryOn(true)}
                                className="w-full bg-slate-900 border border-white/10 text-white h-14 rounded-xl font-bold uppercase tracking-widest hover:bg-white/5 transition-colors flex items-center justify-center gap-3 group"
                            >
                                <span className="material-symbols-outlined text-primary group-hover:scale-110 transition-transform">view_in_ar</span>
                                Atmosphere AR Try-On
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* AR Modal */}
            <AnimatePresence>
                {showTryOn && <VirtualARTryOnInterface onClose={() => setShowTryOn(false)} product={product} />}
            </AnimatePresence>
        </div>
    );
}

"use client";

import Footer from "@/components/landing/Footer";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/shop/ProductCard";

export default function WishlistPage() {
    const { items, isLoading, itemCount, removeFromWishlist } = useWishlist();

    return (
        <div className="bg-background-dark text-white font-[var(--font-body)] min-h-screen flex flex-col overflow-x-hidden antialiased">

            <main className="flex-grow">
                {/* Header */}
                <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 border-b border-white/5 bg-gradient-to-b from-primary/5 to-transparent">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div>
                            <div className="flex items-center gap-3 mb-4">
                                <span className="material-symbols-outlined text-primary text-3xl">favorite</span>
                                <h1 className="text-4xl sm:text-5xl font-[var(--font-display)] font-extrabold tracking-tight">
                                    Your <span className="text-primary">Wishlist</span>
                                </h1>
                            </div>
                            <p className="text-gray-400 max-w-xl">
                                Curate your future wardrobe. These items are synchronized across your devices and ready for neural fitting.
                            </p>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-1">Stored Assets</p>
                                <p className="text-xl font-bold">{itemCount} Pieces</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Content */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 min-h-[400px]">
                    <div className="max-w-7xl mx-auto">
                        {isLoading ? (
                            <div className="flex flex-col items-center justify-center py-20 gap-4">
                                <div className="w-12 h-12 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">Accessing Archives</p>
                            </div>
                        ) : items.length === 0 ? (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-center py-20"
                            >
                                <div className="w-20 h-20 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-8">
                                    <span className="material-symbols-outlined text-4xl text-gray-600">heart_broken</span>
                                </div>
                                <h2 className="text-2xl font-bold mb-4">The archives are empty</h2>
                                <p className="text-gray-500 max-w-md mx-auto mb-10">
                                    You haven't added any neural assets to your wishlist yet.
                                    Explore the Fall 2024 collection to find your next look.
                                </p>
                                <Link
                                    href="/shop"
                                    className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-white font-black text-xs uppercase tracking-[0.2em] rounded-xl hover:bg-blue-600 transition-all hover:scale-105 shadow-lg shadow-primary/20"
                                >
                                    Explore Collections
                                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </motion.div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                                <AnimatePresence mode="popLayout">
                                    {items.map((item) => (
                                        <motion.div
                                            key={item.product_id}
                                            layout
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                                            transition={{ duration: 0.4 }}
                                            className="relative"
                                        >
                                            <ProductCard product={item.product} />
                                            {/* Extra Delete Button for Wishlist Page explicitly */}
                                            <button
                                                onClick={() => removeFromWishlist(item.product_id)}
                                                className="absolute top-4 left-4 z-40 w-10 h-10 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 backdrop-blur-xl opacity-0 hover:opacity-100 group-hover:opacity-100 transition-all flex items-center justify-center hover:bg-red-500 hover:text-white"
                                                title="Remove from Wishlist"
                                            >
                                                <span className="material-symbols-outlined text-xl">delete</span>
                                            </button>
                                        </motion.div>
                                    ))}
                                </AnimatePresence>
                            </div>
                        )}
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

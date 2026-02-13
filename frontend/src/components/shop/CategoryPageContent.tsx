"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Product, categoryMeta } from "@/components/shop/productData";
import { WishlistItem } from "@/types";
import ProductCard from "@/components/shop/ProductCard";

export default function CategoryPageContent({
    categoryKey,
    products,
}: {
    categoryKey: string;
    products: Product[];
}) {
    const meta = categoryMeta[categoryKey];

    return (
        <div className="min-h-screen bg-background-dark text-white pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="flex items-center gap-2 text-[10px] font-black tracking-[0.2em] text-slate-500 uppercase mb-4" aria-label="Breadcrumb">
                    <Link href="/" className="hover:text-primary transition-colors">HOME</Link>
                    <span className="text-slate-700">/</span>
                    <Link href="/shop" className="hover:text-primary transition-colors">COLLECTIONS</Link>
                    <span className="text-slate-700">/</span>
                    <span className="text-white">{meta.title}</span>
                </nav>

                {/* Header Content */}
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                    <div>
                        <div className="flex items-start gap-4 mb-2">
                            <span className="material-symbols-outlined text-primary text-4xl mt-1">{meta.icon}</span>
                            <div>
                                <h1 className="text-6xl font-display font-black text-white leading-none mb-1">
                                    {meta.title}
                                </h1>
                                <span className="text-sm font-bold text-slate-500 uppercase tracking-widest block">
                                    {meta.subtitle}
                                </span>
                            </div>
                        </div>
                        <p className="text-slate-400 max-w-xl text-sm leading-relaxed ml-[60px]">
                            {meta.description}
                        </p>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-slate-400 uppercase tracking-widest pb-2">
                        <span>{products.length} products</span>
                        <span className="text-slate-700">|</span>
                        <span>Sort by:</span>
                        <button className="flex items-center gap-1 text-white hover:text-primary transition-colors">
                            Featured
                            <span className="material-symbols-outlined text-base">expand_more</span>
                        </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product, i) => (
                        <motion.div
                            key={product.slug}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                        >
                            <ProductCard product={product} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

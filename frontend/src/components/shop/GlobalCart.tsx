"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

import { CartItem, Product } from "@/types";

// Assuming default local backend port
const CART_API_BASE_URL = "http://localhost:3001/api/cart";

export default function GlobalCart({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
    const [items, setItems] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (isOpen) {
            fetch(CART_API_BASE_URL)
                .then(res => res.json())
                .then(data => {
                    setItems(data || []);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Failed to fetch cart:", err);
                    setLoading(false);
                });
        }
    }, [isOpen]);

    const subtotal = items.reduce((acc, item) => {
        const price = item.product?.price || 0;
        return acc + price * item.quantity;
    }, 0);

    const updateQuantity = async (id: number, newQty: number) => {
        if (newQty < 1) return;
        try {
            await fetch(`http://localhost:3001/api/cart/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity: newQty })
            });
            setItems(items.map(item => item.ID === id ? { ...item, quantity: newQty } : item));
        } catch (err) {
            console.error("Update failed:", err);
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-md z-[100]"
                    />

                    {/* Cart Panel */}
                    <motion.div
                        initial={{ x: "100%" }}
                        animate={{ x: 0 }}
                        exit={{ x: "100%" }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 h-full w-full max-w-md bg-background-dark/80 backdrop-blur-3xl border-l border-white/5 z-[101] shadow-2xl flex flex-col"
                    >
                        {/* Header */}
                        <div className="p-6 border-b border-white/5 flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">shopping_bag</span>
                                <h2 className="text-sm font-black uppercase tracking-[0.3em] text-white">Archives</h2>
                                <span className="px-2 py-0.5 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-bold text-primary">
                                    {items.length}
                                </span>
                            </div>
                            <button
                                onClick={onClose}
                                className="w-10 h-10 rounded-full hover:bg-white/5 flex items-center justify-center text-slate-400 hover:text-white transition-all"
                            >
                                <span className="material-symbols-outlined">close</span>
                            </button>
                        </div>

                        {/* Items List */}
                        <div className="flex-1 overflow-y-auto p-6 space-y-6">
                            {loading ? (
                                <div className="h-full flex items-center justify-center text-xs font-bold uppercase tracking-widest text-slate-500 animate-pulse">
                                    Scanning Archives...
                                </div>
                            ) : items.length > 0 ? (
                                items.map((item) => (
                                    <div key={item.ID} className="flex gap-4 group">
                                        <div className="w-24 h-24 bg-white/5 rounded-2xl overflow-hidden border border-white/5 p-2 flex items-center justify-center">
                                            <img src={item.product?.image_url || "/products/placeholder.png"} alt={item.product?.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                                        </div>
                                        <div className="flex-1 flex flex-col justify-between py-1">
                                            <div>
                                                <h3 className="text-xs font-black uppercase tracking-widest text-white mb-1">{item.product?.name}</h3>
                                                <p className="text-[10px] font-bold text-primary uppercase">Size: {item.size}</p>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3 bg-white/5 rounded-lg border border-white/5 px-2 py-1">
                                                    <button onClick={() => updateQuantity(item.ID, item.quantity - 1)} className="text-slate-500 hover:text-white"><span className="material-symbols-outlined text-xs">remove</span></button>
                                                    <span className="text-[10px] font-bold text-white w-4 text-center">{item.quantity}</span>
                                                    <button onClick={() => updateQuantity(item.ID, item.quantity + 1)} className="text-slate-500 hover:text-white"><span className="material-symbols-outlined text-xs">add</span></button>
                                                </div>
                                                <span className="text-xs font-bold text-white">${(item.product?.price * item.quantity).toFixed(2)}</span>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="h-full flex flex-col items-center justify-center text-center opacity-30">
                                    <span className="material-symbols-outlined text-6xl mb-4">inventory_2</span>
                                    <p className="text-xs font-bold uppercase tracking-widest">No assets in localized storage</p>
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-8 bg-black/40 border-t border-white/5 space-y-6">
                            <div className="space-y-2">
                                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    <span>Subtotal</span>
                                    <span>${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                    <span>Shipping</span>
                                    <span className="text-primary italic">Calculated at checkout</span>
                                </div>
                                <div className="h-px bg-white/5 my-4" />
                                <div className="flex justify-between text-sm font-black text-white uppercase tracking-[0.2em]">
                                    <span>Total</span>
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                                        ${subtotal.toFixed(2)}
                                    </span>
                                </div>
                            </div>

                            <Link
                                href="/checkout"
                                onClick={onClose}
                                className="w-full h-14 bg-primary text-white rounded-2xl font-black text-xs uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-blue-600 transition-all shadow-2xl shadow-primary/20"
                            >
                                Proceed to Checkout
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}

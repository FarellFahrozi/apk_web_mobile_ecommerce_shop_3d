"use client";

import Link from "next/link";
import { useState } from "react";

/* ─── Cart Data ─── */
const initialCartItems = [
    {
        id: 1,
        name: "Neural Weave Bomber",
        variant: "Matte Black / Size M",
        price: 450.0,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBtDR__4S8613NE0wc3LjZ1P0jIlE4531Fke8ic-ahJv_JRrtX8iq_e2pyB679SyXMAaDOmjvQ6UG5Y40VFP8fu5il4v2ApVAp5McvRuDfyYezKl50QeVj0a65kZV9zfmAACh-yccyiDPXQ_VNh7HUAcznheP2-z5LH_uLdun8My-_BkJps-PQb2oj5XM7KNaVo1t3yBt3YYr8jAQUn-0gjMppq49GhUE4Xf5JQqj15OloVeEiDZCqjANXqqJYLKYUeEzX1y03OmIE",
        qty: 1,
        customized: true,
    },
    {
        id: 2,
        name: "Ghost Cargo Pants",
        variant: "Slate Grey / Size 32",
        price: 320.0,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKGsHsoiLS7X4BheGOJ7ZVcnm_f2uss_mB-DIiPuzadolZeZaBZ2MRAnFSphJJi3BTGX2xUkWpht37oPdYeHeDmxDbDrTK2Yt9AILbB-uhoKKJJgxayWpe5AMb0C66Hvn5OICUzJczK3skY9jj1FPF4Pl_l8GzUtmR1q8ejjzPItLZDitd33vz-Rk5AaD9pt-xiUFL-eg2rOl3N1xAbi7KKqgOQamMbWHiDPKVlx_61JifjKDHjpvrT7NfGD3d8WsRG5CTVH2uRo",
        qty: 1,
        customized: false,
    },
    {
        id: 3,
        name: "Merino Knit Sweater",
        variant: "Black / Size L",
        price: 280.0,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-10XkNlsYgTQ72_Mon1aHCfNbWY_idharuIhsNfPkv469GTKqzN56rfQBSt8LJDs0AhqDy4Bbxms2JFHVzpAflBqlNuL9Kbej7O1JcuUGsK-iuKnCXViNhTc9EKVd-f31c-5c-ejT9eYR9thuMgXYtXRzb-ARDQEGHy93AxLbpffPrjW9OPyTx-Fi_aAen84eypsDylZXT6AVIrkwaoX0ooB6cjWco-HJ-EWDsEFLONhpCqv7F5903yRw3h8AhZgtrdkyGFqkzq0",
        qty: 2,
        customized: false,
    },
];

const steps = ["Cart", "Shipping", "Payment"];

export default function CheckoutPage() {
    const [cart, setCart] = useState(initialCartItems);
    const [step] = useState(0);
    const [promoOpen, setPromoOpen] = useState(false);

    const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const shipping = 0;
    const discount = subtotal * 0.15;
    const total = subtotal - discount + shipping;

    const updateQty = (id: number, delta: number) => {
        setCart((prev) =>
            prev
                .map((item) =>
                    item.id === id ? { ...item, qty: Math.max(0, item.qty + delta) } : item
                )
                .filter((item) => item.qty > 0)
        );
    };

    return (
        <div className="bg-background-dark text-slate-200 font-[var(--font-body)] min-h-screen flex flex-col">
            {/* Navbar */}
            <nav className="h-16 border-b border-slate-800 flex items-center justify-between px-6 lg:px-12 bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tighter uppercase text-white flex items-center gap-2 font-[var(--font-display)]"
                >
                    <span className="w-3 h-3 bg-primary rounded-full" />
                    AURA
                </Link>
                <div className="flex items-center gap-3 text-xs font-medium text-slate-400">
                    <span className="material-symbols-outlined text-base">lock</span>
                    Secure Checkout
                </div>
            </nav>

            {/* Progress Steps */}
            <div className="border-b border-slate-800 bg-background-dark/50">
                <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-center gap-8">
                    {steps.map((s, i) => (
                        <div key={s} className="flex items-center gap-3">
                            <div
                                className={`w-8 h-8 rounded-full text-sm font-bold flex items-center justify-center transition-all ${i === step
                                    ? "bg-primary text-white shadow-lg shadow-primary/30"
                                    : i < step
                                        ? "bg-primary/20 text-primary"
                                        : "bg-slate-800 text-slate-500"
                                    }`}
                            >
                                {i < step ? (
                                    <span className="material-symbols-outlined text-base">check</span>
                                ) : (
                                    i + 1
                                )}
                            </div>
                            <span
                                className={`text-sm font-medium ${i === step ? "text-white" : "text-slate-500"
                                    }`}
                            >
                                {s}
                            </span>
                            {i < steps.length - 1 && (
                                <div className="w-12 h-px bg-slate-700 mx-2 hidden sm:block" />
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Body */}
            <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left: Cart Items */}
                <section className="lg:col-span-7 space-y-6">
                    <div className="flex items-center justify-between mb-2">
                        <h2 className="text-2xl font-bold text-white">
                            Shopping Cart{" "}
                            <span className="text-slate-500 text-base font-normal">
                                ({cart.reduce((s, i) => s + i.qty, 0)} items)
                            </span>
                        </h2>
                        <Link href="/shop"
                            className="text-sm text-primary hover:underline flex items-center gap-1">
                            <span className="material-symbols-outlined text-base">arrow_back</span>
                            Continue Shopping
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="bg-card-dark rounded-xl p-4 sm:p-5 flex gap-4 sm:gap-6 group border border-transparent hover:border-slate-700 transition-all"
                            >
                                <div className="w-24 h-28 sm:w-28 sm:h-32 rounded-lg overflow-hidden bg-slate-900 flex-shrink-0 relative">
                                    <img
                                        alt={item.name}
                                        className="w-full h-full object-cover"
                                        src={item.image}
                                    />
                                    {item.customized && (
                                        <div className="absolute bottom-1 left-1 bg-primary/80 text-[10px] text-white font-bold px-1.5 py-0.5 rounded flex items-center gap-1 backdrop-blur-sm">
                                            <span className="material-symbols-outlined text-[10px]">auto_awesome</span>
                                            Customized
                                        </div>
                                    )}
                                </div>
                                <div className="flex-1 flex flex-col justify-between min-w-0">
                                    <div>
                                        <h3 className="text-base font-semibold text-white truncate">
                                            {item.name}
                                        </h3>
                                        <p className="text-xs text-slate-400 mt-1">{item.variant}</p>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-1 bg-slate-800/50 border border-slate-700 rounded-lg">
                                            <button
                                                onClick={() => updateQty(item.id, -1)}
                                                className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                                                aria-label="Decrease quantity"
                                            >
                                                <span className="material-symbols-outlined text-sm">remove</span>
                                            </button>
                                            <span className="w-8 text-center text-sm font-medium text-white">
                                                {item.qty}
                                            </span>
                                            <button
                                                onClick={() => updateQty(item.id, 1)}
                                                className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
                                                aria-label="Increase quantity"
                                            >
                                                <span className="material-symbols-outlined text-sm">add</span>
                                            </button>
                                        </div>
                                        <p className="text-lg font-bold text-white">
                                            ${(item.price * item.qty).toFixed(2)}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => updateQty(item.id, -item.qty)}
                                    className="self-start text-slate-500 hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
                                    aria-label={`Remove ${item.name}`}
                                >
                                    <span className="material-symbols-outlined text-lg">close</span>
                                </button>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Right: Order Summary */}
                <aside className="lg:col-span-5">
                    <div className="sticky top-24 bg-card-dark rounded-xl border border-slate-800 overflow-hidden">
                        <div className="p-6 space-y-6">
                            <h3 className="text-lg font-bold text-white">Order Summary</h3>

                            <div className="space-y-3 text-sm">
                                <div className="flex justify-between text-slate-400">
                                    <span>Subtotal</span>
                                    <span className="text-white">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span>Shipping</span>
                                    <span className="text-green-400 font-semibold">Free</span>
                                </div>
                                <div className="flex justify-between text-slate-400">
                                    <span className="flex items-center gap-1">
                                        Discount{" "}
                                        <span className="px-1.5 py-0.5 text-[10px] font-bold rounded bg-primary/20 text-primary">
                                            AURA15
                                        </span>
                                    </span>
                                    <span className="text-green-400">-${discount.toFixed(2)}</span>
                                </div>
                            </div>

                            <hr className="border-slate-700" />

                            <div className="flex justify-between items-end">
                                <span className="text-sm text-slate-400">Total</span>
                                <div className="text-right">
                                    <p className="text-3xl font-extrabold text-white">${total.toFixed(2)}</p>
                                    <p className="text-xs text-slate-500 mt-1">Including tax</p>
                                </div>
                            </div>

                            {/* Promo Code */}
                            <div>
                                <button
                                    onClick={() => setPromoOpen(!promoOpen)}
                                    className="w-full flex items-center justify-between text-sm text-primary hover:underline"
                                >
                                    <span className="flex items-center gap-1">
                                        <span className="material-symbols-outlined text-base">local_offer</span>
                                        Apply Promo Code
                                    </span>
                                    <span className="material-symbols-outlined text-base transition-transform" style={{ transform: promoOpen ? "rotate(180deg)" : "rotate(0)" }}>
                                        expand_more
                                    </span>
                                </button>
                                {promoOpen && (
                                    <div className="mt-3 flex gap-2">
                                        <input
                                            type="text"
                                            placeholder="Enter code"
                                            className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary"
                                        />
                                        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                                            Apply
                                        </button>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <button className="w-full h-14 bg-primary text-white rounded-xl font-bold text-lg hover:bg-blue-600 active:scale-[0.98] transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3">
                                <span className="material-symbols-outlined text-xl">lock</span>
                                Proceed to Shipping
                            </button>
                            <p className="text-xs text-center text-slate-500">
                                By continuing you agree to our{" "}
                                <span className="text-primary cursor-pointer hover:underline">Terms</span> and{" "}
                                <span className="text-primary cursor-pointer hover:underline">Privacy Policy</span>
                            </p>
                        </div>

                        {/* Trust badges */}
                        <div className="border-t border-slate-800 p-4 bg-slate-900/30 space-y-3">
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                                <span className="material-symbols-outlined text-base text-green-400">verified_user</span>
                                <span>256-bit SSL Encryption</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                                <span className="material-symbols-outlined text-base text-green-400">local_shipping</span>
                                <span>Free Express Delivery (2–4 days)</span>
                            </div>
                            <div className="flex items-center gap-3 text-xs text-slate-400">
                                <span className="material-symbols-outlined text-base text-green-400">sync</span>
                                <span>30-Day Free Returns</span>
                            </div>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
}

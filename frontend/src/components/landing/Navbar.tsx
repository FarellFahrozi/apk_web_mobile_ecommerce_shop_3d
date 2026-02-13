"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useWishlist } from "@/context/WishlistContext";

interface NavbarProps {
    onOpenCart?: () => void;
}

export default function Navbar({ onOpenCart }: NavbarProps) {
    const { itemCount } = useWishlist();
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Collections", href: "/shop" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled
                ? "bg-background-dark/80 backdrop-blur-xl border-b border-white/5 py-4"
                : "bg-transparent py-6"
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="group flex items-center gap-2">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-primary rounded-lg flex items-center justify-center transform group-hover:rotate-[15deg] transition-transform duration-500 shadow-glow">
                            <span className="text-white font-black text-lg sm:text-xl">A</span>
                        </div>
                        <span className="text-xl sm:text-2xl font-[var(--font-display)] font-extrabold tracking-tighter text-white">
                            AURA
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-10">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-primary transition-all relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Trigger & Icons */}
                    <div className="flex items-center gap-2 sm:gap-6">
                        <div className="hidden sm:flex items-center gap-6">
                            <button className="text-white hover:text-primary transition-colors cursor-pointer" aria-label="Search">
                                <span className="material-symbols-outlined text-[20px]">search</span>
                            </button>
                            <Link href="/wishlist" className="relative text-white hover:text-primary transition-colors cursor-pointer" aria-label="Wishlist">
                                <span className="material-symbols-outlined text-[20px]">favorite</span>
                                {itemCount > 0 && (
                                    <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-primary text-[8px] font-black flex items-center justify-center text-white border border-background-dark">
                                        {itemCount}
                                    </span>
                                )}
                            </Link>
                            <button
                                onClick={onOpenCart}
                                className="relative text-white hover:text-primary transition-colors cursor-pointer"
                                aria-label="Cart"
                            >
                                <span className="material-symbols-outlined text-[20px]">shopping_bag</span>
                                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 rounded-full bg-primary text-[8px] font-black flex items-center justify-center text-white border border-background-dark">
                                    3
                                </span>
                            </button>
                            <button className="text-white hover:text-primary transition-colors cursor-pointer" aria-label="Account">
                                <span className="material-symbols-outlined text-[20px]">person</span>
                            </button>
                        </div>

                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white md:hidden"
                        >
                            <span className="material-symbols-outlined">
                                {isMobileMenuOpen ? "close" : "menu"}
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-background-dark border-b border-white/5 md:hidden"
                    >
                        <div className="p-6 flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className="text-lg font-bold text-white hover:text-primary transition-colors"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="h-px bg-white/5" />
                            <div className="flex justify-between items-center">
                                <div className="flex gap-6">
                                    <Link href="/wishlist" onClick={() => setIsMobileMenuOpen(false)} className="relative text-white">
                                        <span className="material-symbols-outlined">favorite</span>
                                        {itemCount > 0 && (
                                            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary text-[8px] font-black flex items-center justify-center text-white">
                                                {itemCount}
                                            </span>
                                        )}
                                    </Link>
                                    <span className="material-symbols-outlined text-white">shopping_bag</span>
                                    <span className="material-symbols-outlined text-white">person</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}

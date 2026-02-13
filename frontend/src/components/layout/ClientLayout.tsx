"use client";

import { useState } from "react";
import { WishlistProvider } from "@/context/WishlistContext";
import Navbar from "@/components/landing/Navbar";
import GlobalCart from "@/components/shop/GlobalCart";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
    const [isCartOpen, setIsCartOpen] = useState(false);

    return (
        <WishlistProvider>
            <Navbar onOpenCart={() => setIsCartOpen(true)} />
            {children}
            <GlobalCart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        </WishlistProvider>
    );
}

"use client";

import { allProducts, categoryMeta } from "@/components/shop/productData";
import CategoryPageContent from "@/components/shop/CategoryPageContent";

import { use } from "react";

export default function ShopCategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const { category } = use(params);

    const categoryMap: Record<string, string> = {
        "tops": "tops",
        "pants": "pants",
        "shoes": "shoes",
        "accessories": "accessories"
    };

    const categoryKey = category && categoryMap[category];
    const products = categoryKey ? allProducts[categoryKey] : [];
    const meta = categoryKey ? categoryMeta[categoryKey] : null;

    return <CategoryPageContent products={products} categoryKey={categoryKey} />;
}

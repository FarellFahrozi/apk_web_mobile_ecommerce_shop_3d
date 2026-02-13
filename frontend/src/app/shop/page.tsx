"use client";

import Link from "next/link";
import { categoryMeta } from "@/components/shop/productData";

// Manual mapping of category images for the design
const categoryImages: Record<string, string> = {
    tops: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtDR__4S8613NE0wc3LjZ1P0jIlE4531Fke8ic-ahJv_JRrtX8iq_e2pyB679SyXMAaDOmjvQ6UG5Y40VFP8fu5il4v2ApVAp5McvRuDfyYezKl50QeVj0a65kZV9zfmAACh-yccyiDPXQ_VNh7HUAcznheP2-z5LH_uLdun8My-_BkJps-PQb2oj5XM7KNaVo1t3yBt3YYr8jAQUn-0gjMppq49GhUE4Xf5JQqj15OloVeEiDZCqjANXqqJYLKYUeEzX1y03OmIE", // Bomber
    pants: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKGsHsoiLS7X4BheGOJ7ZVcnm_f2uss_mB-DIiPuzadolZeZaBZ2MRAnFSphJJi3BTGX2xUkWpht37oPdYeHeDmxDbDrTK2Yt9AILbB-uhoKKJJgxayWpe5AMb0C66Hvn5OICUzJczK3skY9jj1FPF4Pl_l8GzUtmR1q8ejjzPItLZDitd33vz-Rk5AaD9pt-xiUFL-eg2rOl3N1xAbi7KKqgOQamMbWHiDPKVlx_61JifjKDHjpvrT7NfGD3d8WsRG5CTVH2uRo", // Cargo
    shoes: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYp8rlPrJDwz4xQw87mubz0klD0p0np8ZWabbCBWNxXRmh_zdwHiiAKftkYtrO6Ytmlp4eAYhGi0IbHJ6BoegoioXO1CIqYeGUo4aCk20ul5m8FchZ5JGPsLrenm6JE1PfOl1RFt0hA3COVrsNrEUpXtvM5a2VcU7H9neTJERzWFopXYItm8uuuwwz-zHhb1KOsd9XyK6qZo4u2_Eooamt2vGvE7lXUfZ1rUQOF8E_ygKlR8fNHiNS8EseO4WKi6VhbDoDs1bOzXI", // Sneakers
    accessories: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnRzXfgYiAntNpbB6rXIK-8-TQDC2tprG-FRV19KAB-IQu7jkm09IauD_VCX5s9j_hzVkgmW5Z6JpHMQC8I9PTmAYlzfOsxdV7DEfawphxvPh42sSrfMQK3Ww3LWKAOww2I49Qqxc98ljZKeg2S36mGTM_6eIxYDeuJADQVgyxwkuo17V2tNogZAFJSq9y7EeiF0B2EAet0iGKD3biWEiUUZuDRrjmQai_D9J6ML1EREQuwZIKeG1W-Kjof-SYTFxJmDzYHpUwe9U" // Accessories
};

const categoryCounts: Record<string, number> = {
    tops: 24,
    pants: 18,
    shoes: 12,
    accessories: 15
};

export default function ShopOverviewPage() {
    return (
        <div className="bg-background-dark text-white min-h-screen pt-32 px-4 pb-24">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16 relative">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md mb-6">
                        <span className="material-symbols-outlined text-primary text-sm">deployed_code</span>
                        <span className="text-xs font-bold text-primary tracking-widest uppercase">3D Interactive</span>
                    </div>
                    <h1 className="text-5xl md:text-7xl font-display font-black mb-6">
                        <span className="text-white">Our </span>
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Collections</span>
                    </h1>
                    <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                        Explore four curated categories. Hover to interact in 3D, click to dive into each collection.
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {Object.entries(categoryMeta).map(([id, data]) => (
                        <Link
                            key={id}
                            href={`/shop/${id}`}
                            className="group relative h-[500px] overflow-hidden rounded-3xl bg-slate-900 border border-white/5 hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20"
                        >
                            {/* Badger */}
                            <div className="absolute top-4 left-4 z-20">
                                <span className="px-3 py-1 bg-primary text-white text-[10px] font-bold rounded-full uppercase tracking-wider">
                                    {categoryCounts[id] || 0} items
                                </span>
                            </div>

                            <div className="absolute top-4 right-4 z-20">
                                <div className="w-8 h-8 rounded-full bg-black/50 backdrop-blur flex items-center justify-center border border-white/10 group-hover:bg-primary group-hover:border-primary transition-colors">
                                    <span className="material-symbols-outlined text-white text-xs">view_in_ar</span>
                                </div>
                            </div>

                            {/* Image Background */}
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black">
                                <img
                                    src={categoryImages[id] || ""}
                                    alt={data.title}
                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-transform duration-700"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />
                            </div>

                            {/* Content */}
                            <div className="absolute bottom-0 left-0 w-full p-8 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center gap-2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
                                    <span className="material-symbols-outlined text-primary text-xl">
                                        {data.icon}
                                    </span>
                                    <span className="text-primary font-bold text-sm tracking-widest uppercase">
                                        {data.title}
                                    </span>
                                </div>

                                <h2 className="text-3xl font-display font-black text-white mb-2 leading-none">
                                    {data.title}
                                </h2>
                                <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 block mb-4">
                                    {data.subtitle}
                                </span>

                                <p className="text-xs text-slate-400 font-medium leading-relaxed line-clamp-2 mb-6 opacity-60 group-hover:opacity-100 transition-opacity">
                                    {data.description}
                                </p>

                                <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-primary transition-colors">
                                    Explore Collection
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                                        arrow_forward
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

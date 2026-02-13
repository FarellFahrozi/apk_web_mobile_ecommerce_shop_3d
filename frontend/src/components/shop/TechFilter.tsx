"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FilterSection {
    title: string;
    icon: string;
    options: string[];
}

export default function TechFilter() {
    const [activeFilters, setActiveFilters] = useState<string[]>([]);

    const sections: FilterSection[] = [
        {
            title: "Weather Shield",
            icon: "wb_cloudy",
            options: ["Waterproof", "Windproof", "All-Weather"],
        },
        {
            title: "Thermal Grade",
            icon: "thermostat",
            options: ["Ultralight", "Mid-Weight", "Polar-Insulated"],
        },
        {
            title: "Functionality",
            icon: "settings_input_antenna",
            options: ["Modular", "Stealth-Pack", "High-Visibility"],
        },
    ];

    const toggleFilter = (option: string) => {
        setActiveFilters((prev) =>
            prev.includes(option)
                ? prev.filter((o) => o !== option)
                : [...prev, option]
        );
    };

    return (
        <div className="space-y-8 p-6 bg-white/5 backdrop-blur-xl rounded-3xl border border-white/5">
            <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">filter_list</span>
                    <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-white">Neural Filter</h3>
                </div>
                {activeFilters.length > 0 && (
                    <button
                        onClick={() => setActiveFilters([])}
                        className="text-[10px] font-bold text-slate-500 hover:text-white uppercase transition-colors"
                    >
                        Clear All
                    </button>
                )}
            </div>

            <div className="space-y-6">
                {sections.map((section) => (
                    <div key={section.title} className="space-y-3">
                        <div className="flex items-center gap-2 text-slate-400">
                            <span className="material-symbols-outlined text-xs">{section.icon}</span>
                            <span className="text-[9px] font-black uppercase tracking-widest">{section.title}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {section.options.map((option) => {
                                const isActive = activeFilters.includes(option);
                                return (
                                    <button
                                        key={option}
                                        onClick={() => toggleFilter(option)}
                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider transition-all duration-300 border ${isActive
                                                ? "bg-primary border-primary text-white shadow-lg shadow-primary/20"
                                                : "bg-white/5 border-white/5 text-slate-400 hover:border-white/10 hover:text-white"
                                            }`}
                                    >
                                        {option}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            {/* Iridescent Accent Footer */}
            <div className="pt-4 mt-6 border-t border-white/5">
                <div className="relative group overflow-hidden rounded-2xl p-4 bg-gradient-to-br from-white/5 to-transparent">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-teal-500/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <p className="relative z-10 text-[9px] leading-relaxed text-slate-500 italic">
                        "Neural filtering uses holographic metadata to match technical requirements with high precision."
                    </p>
                </div>
            </div>
        </div>
    );
}

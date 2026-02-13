import Footer from "@/components/landing/Footer";
import Link from "next/link";

const values = [
    {
        icon: "view_in_ar",
        title: "3D Innovation",
        desc: "Experience fashion in immersive 360° before you buy. Our proprietary technology bridges digital and physical.",
    },
    {
        icon: "eco",
        title: "Sustainability",
        desc: "Every piece is crafted with responsibly sourced materials and carbon-neutral shipping worldwide.",
    },
    {
        icon: "diamond",
        title: "Premium Craft",
        desc: "Meticulous attention to detail, from stitching to fabric selection. Quality that speaks for itself.",
    },
    {
        icon: "groups",
        title: "Community",
        desc: "Join a global network of forward-thinkers redefining what fashion means in the digital age.",
    },
];

const stats = [
    { value: "50K+", label: "Happy Customers" },
    { value: "120+", label: "Countries Shipped" },
    { value: "98%", label: "5-Star Reviews" },
    { value: "2021", label: "Founded" },
];

export default function AboutPage() {
    return (
        <div className="bg-background-dark text-white font-[var(--font-body)] min-h-screen flex flex-col overflow-x-hidden antialiased">

            <main className="flex-grow pt-20">
                {/* Hero */}
                <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                    <div className="absolute inset-0 canvas-grid opacity-20 pointer-events-none" aria-hidden="true" />
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" aria-hidden="true" />

                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur mb-6">
                            <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                            <span className="text-xs font-bold uppercase tracking-widest text-primary">Our Story</span>
                        </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-display)] font-extrabold tracking-tight mb-6">
                            Redefining Fashion{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                                For Tomorrow
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            AURA was born from a simple idea: what if you could experience fashion before it reaches your hands?
                            We fuse cutting-edge 3D technology with luxury streetwear to create an entirely new way to shop.
                        </p>
                    </div>
                </section>

                {/* Stats */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
                        {stats.map((stat) => (
                            <div
                                key={stat.label}
                                className="text-center p-6 rounded-xl bg-card-dark border border-white/5"
                            >
                                <div className="text-3xl sm:text-4xl font-[var(--font-display)] font-extrabold text-primary mb-1">
                                    {stat.value}
                                </div>
                                <div className="text-sm text-gray-400">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Mission Image + Text */}
                <section className="px-4 sm:px-6 lg:px-8 pb-20">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                            <img
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMXlOvG6WQU0PLzNjPVIFZV0nr17QLk70zRK89uBTYEYfLZtJi0vMaEoXVUHya7T0CKO9Xgcx_jFOyWxkdM9a0uqaanOqem-LjVVZglazkICilJuHV6pcwSSPfm6hjKGO0jl3lNVx6SEK78Xz91sIw6oNVo34oO_1ubjTKi-SpIMpd0Z0dSxVmrTOUAx96TWKF-EnyWvaeW_DV0uf5xqs-33zoiwnNSvYq0poCpNFc95lRsWw32N1UbbXNt9nUaFwnMwKJwbPAyuI"
                                alt="AURA fashion model in neon-lit urban setting"
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background-dark/60 to-transparent" />
                        </div>
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-[var(--font-display)] font-bold mb-6">
                                Our Mission
                            </h2>
                            <p className="text-gray-400 leading-relaxed mb-4">
                                At AURA, we believe fashion should be an experience, not just a purchase.
                                Our platform merges the tactile world of luxury streetwear with immersive
                                3D technology, allowing you to explore every stitch, texture, and detail
                                before making it yours.
                            </p>
                            <p className="text-gray-400 leading-relaxed mb-8">
                                Founded in 2021, we&apos;ve quickly grown from a small studio to a global
                                brand shipped to over 120 countries. Every piece in our collection is
                                designed with intention — blending futuristic aesthetics with timeless
                                quality.
                            </p>
                            <Link
                                href="/shop"
                                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded hover:bg-primary-hover transition-colors cursor-pointer focus-ring"
                            >
                                Explore Collections
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Values */}
                <section className="px-4 sm:px-6 lg:px-8 pb-24 bg-[#15202b] py-20 border-t border-b border-white/5">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-3xl font-[var(--font-display)] font-bold text-center mb-12">
                            What We Stand For
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {values.map((v) => (
                                <div
                                    key={v.title}
                                    className="p-6 rounded-xl bg-card-dark border border-white/5 hover:border-primary/30 transition-colors group"
                                >
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                                        <span className="material-symbols-outlined text-primary text-2xl">{v.icon}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-white mb-2">{v.title}</h3>
                                    <p className="text-sm text-gray-400 leading-relaxed">{v.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

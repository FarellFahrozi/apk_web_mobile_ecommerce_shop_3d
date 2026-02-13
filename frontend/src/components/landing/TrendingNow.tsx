const products = [
    {
        name: "Vertex Jacket",
        category: "Outerwear",
        price: "$1,250.00",
        badge: "NEW",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBd9ZfZoCz5enwC0_myBbuPmPuFTGJl2S5pvnrW-6x05FuErZvKz_pWbgDUDLP3tYtXdIIG1Zq2ayQWyYM__JjF7shNvsRKi-qkVHUuJzCXDPs2p73mV14mKWqVF9JmLRg1nqkHXxzLwsoAhZFNe9BicFzSIPA3CaMA1LbBgaWbefepOc0nJI3z1gGG7c19HgbfkNMVzv5oTlMOkWPoCOfXMZ4fvW8cPyP0bP9jsSnrypwI6Wy0UmH2cXFizYtvEo8qzyoNFOjgjZQ",
        alt: "Minimalist streetwear jacket on a grey background",
    },
    {
        name: "Flux Hoodie",
        category: "Tops",
        price: "$450.00",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBiPoYD4zoK9RvT5pTrgrQ7nJMEe3jWMwcseHwWfdVKVo9Qmu_z5q-of3QRSDCMRW0dJUBT-IOpMw8ACn_pUmPey2DReBF1JXD8gOHrNGlKyybiY5vPt8WvU1jSPgT6gjPP2BVLcGUz4o8tZq3p_AO7DtzGyoqQ2G_IfnlzaCj6gDIjMWhlLmi74B9-0Y6NI-RGOpbMq6-2E_2gCw8lMD1lhA6VLKY6Ij6fpIhansJziEOqkUxTq52bU6vW9-mxmdRqbtxmnUqtixI",
        alt: "Abstract patterned hoodie folded neatly",
    },
    {
        name: "Void Shades",
        category: "Accessories",
        price: "$320.00",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB_jfEfLMq999apsWqce5dBLnQEd5w1tciv5kCNx5Vdege1w_J2k86XCklc_5XRTY4w2MoIicZgMGItP_XKknFX6rfNP0sQAuepoXOlAyJRCBVzOvA1qAvYeWjiGdvklSYqLxhlygoAEQHfpCfk2s_4QqI1vb08KfbA5Ew5-MNdlOhjv6TBmctT4kWx5cro2TJu9vFZZnfhFZh0oNwrpYiaBouL3MsI9F9aaK8I95K5JVkWckU4yQfJgOVeyb-Hx5WLvoSjJCkzMvQ",
        alt: "Model wearing futuristic sunglasses and dark clothing",
    },
    {
        name: "Core Tee",
        category: "Basics",
        price: "$120.00",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCD4IfN4XvJ_7PkAOzbrfSmhJhygJAu2emrhB3h4lZ8ogErjOsH7YotPIMCo9lUoedJfgzWMbDQSMLgZbuSZLYjCp3oZGiK_b5l7VegH8aBaQ54O9JYK1a06AgBcWdoZn8RD7MFTtrZ6axR6yFs6J2hnl0p-64WRokW2KwrOtTzbJlF-nhdF1-lGhLbM3GBK4D7D9jHB8kwr_CiCL7vXfGvvINqPriqR4YAt6tekfzCP1iZpBk4_ofGpd6Vlf2X1vK2ipsoWUVnCyk",
        alt: "Black tactical fashion t-shirt with minimal branding",
    },
];

export default function TrendingNow() {
    return (
        <section
            className="py-20 bg-background-light dark:bg-[#15202b] border-t border-white/5"
            aria-labelledby="trending-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                    <h2
                        id="trending-heading"
                        className="text-2xl font-[var(--font-display)] font-bold text-gray-900 dark:text-white"
                    >
                        Trending Now
                    </h2>
                    <div className="flex gap-2">
                        <button
                            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer focus-ring"
                            aria-label="Previous products"
                        >
                            <span
                                className="material-symbols-outlined text-gray-600 dark:text-gray-400"
                                aria-hidden="true"
                            >
                                arrow_back
                            </span>
                        </button>
                        <button
                            className="p-2 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200 cursor-pointer focus-ring"
                            aria-label="Next products"
                        >
                            <span
                                className="material-symbols-outlined text-gray-600 dark:text-gray-400"
                                aria-hidden="true"
                            >
                                arrow_forward
                            </span>
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {products.map((product) => (
                        <div key={product.name} className="group cursor-pointer">
                            <div className="relative aspect-[3/4] bg-gray-200 dark:bg-gray-800 rounded-lg overflow-hidden mb-4">
                                <img
                                    alt={product.alt}
                                    loading="lazy"
                                    className="absolute inset-0 w-full h-full object-cover"
                                    src={product.image}
                                />
                                <button
                                    className="absolute bottom-4 right-4 bg-white dark:bg-gray-900 p-2 rounded-full shadow-lg translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-primary hover:bg-primary hover:text-white cursor-pointer focus-ring"
                                    aria-label={`Add ${product.name} to cart`}
                                >
                                    <span
                                        className="material-symbols-outlined text-sm"
                                        aria-hidden="true"
                                    >
                                        add_shopping_cart
                                    </span>
                                </button>
                                {product.badge && (
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-primary text-white text-xs font-bold px-2 py-1 rounded">
                                            {product.badge}
                                        </span>
                                    </div>
                                )}
                            </div>
                            <h3 className="text-base md:text-lg font-bold text-gray-900 dark:text-white">
                                {product.name}
                            </h3>
                            <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">
                                {product.category}
                            </p>
                            <span className="text-primary font-medium">{product.price}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

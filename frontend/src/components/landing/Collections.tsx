import Link from "next/link";

const collections = [
    {
        title: "Digital Denim",
        subtitle: "Engineered for comfort in the physical world, designed for style in the metaverse.",
        tag: "Featured",
        span: "md:col-span-8 row-span-1 md:row-span-2",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCMXlOvG6WQU0PLzNjPVIFZV0nr17QLk70zRK89uBTYEYfLZtJi0vMaEoXVUHya7T0CKO9Xgcx_jFOyWxkdM9a0uqaanOqem-LjVVZglazkICilJuHV6pcwSSPfm6hjKGO0jl3lNVx6SEK78Xz91sIw6oNVo34oO_1ubjTKi-SpIMpd0Z0dSxVmrTOUAx96TWKF-EnyWvaeW_DV0uf5xqs-33zoiwnNSvYq0poCpNFc95lRsWw32N1UbbXNt9nUaFwnMwKJwbPAyuI",
        alt: "Dark moody fashion photography of a model in a neon lit urban environment",
        large: true,
    },
    {
        title: "Cyber Sneakers",
        subtitle: "Starting at $240",
        tag: "3D PREVIEW",
        span: "md:col-span-4",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDYp8rlPrJDwz4xQw87mubz0klD0p0np8ZWabbCBWNxXRmh_zdwHiiAKftkYtrO6Ytmlp4eAYhGi0IbHJ6BoegoioXO1CIqYeGUo4aCk20ul5m8FchZ5JGPsLrenm6JE1PfOl1RFt0hA3COVrsNrEUpXtvM5a2VcU7H9neTJERzWFopXYItm8uuuwwz-zHhb1KOsd9XyK6qZo4u2_Eooamt2vGvE7lXUfZ1rUQOF8E_ygKlR8fNHiNS8EseO4WKi6VhbDoDs1bOzXI",
        alt: "Single floating high-top sneaker with futuristic design",
        sneaker: true,
    },
    {
        title: "Accessories",
        subtitle: "",
        span: "md:col-span-4",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDnRzXfgYiAntNpbB6rXIK-8-TQDC2tprG-FRV19KAB-IQu7jkm09IauD_VCX5s9j_hzVkgmW5Z6JpHMQC8I9PTmAYlzfOsxdV7DEfawphxvPh42sSrfMQK3Ww3LWKAOww2I49Qqxc98ljZKeg2S36mGTM_6eIxYDeuJADQVgyxwkuo17V2tNogZAFJSq9y7EeiF0B2EAet0iGKD3biWEiUUZuDRrjmQai_D9J6ML1EREQuwZIKeG1W-Kjof-SYTFxJmDzYHpUwe9U",
        alt: "Close up of luxury fabric texture and minimalist accessories",
        showShopNow: true,
    },
];

export default function Collections() {
    return (
        <section
            className="py-24 px-4 sm:px-6 lg:px-8 bg-background-light dark:bg-background-dark relative"
            aria-labelledby="collections-heading"
        >
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                    <div>
                        <h2
                            id="collections-heading"
                            className="text-3xl md:text-4xl font-[var(--font-display)] font-bold text-gray-900 dark:text-white mb-2"
                        >
                            Curated Collections
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Explore the intersection of physical and digital fashion.
                        </p>
                    </div>
                    <Link
                        className="hidden md:flex items-center gap-2 text-primary hover:text-blue-400 transition-colors duration-200 font-medium mt-4 md:mt-0 cursor-pointer focus-ring rounded"
                        href="/shop"
                    >
                        View All Collections
                        <span className="material-symbols-outlined text-sm" aria-hidden="true">
                            arrow_forward
                        </span>
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[280px] sm:auto-rows-[350px] md:auto-rows-[400px]">
                    {collections.map((item) => (
                        <Link
                            key={item.title}
                            href="/shop"
                            className={`${item.span} group relative overflow-hidden rounded-xl bg-gray-900 cursor-pointer focus-ring block`}
                        >
                            {item.tag && (
                                <div
                                    className={`absolute ${item.large ? "hidden" : "top-4 right-4"
                                        } z-10 px-2 py-1 bg-black/50 backdrop-blur rounded text-xs font-bold text-white border border-white/10`}
                                >
                                    {item.tag}
                                </div>
                            )}

                            <img
                                alt={item.alt}
                                loading="lazy"
                                className={`absolute inset-0 w-full h-full ${item.sneaker
                                    ? "w-3/4 h-3/4 object-contain drop-shadow-2xl transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 m-auto"
                                    : "object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                                    }`}
                                src={item.image}
                            />

                            {!item.sneaker && (
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-90"
                                    aria-hidden="true"
                                />
                            )}

                            <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
                                {item.large ? (
                                    <div className="flex justify-between items-end">
                                        <div>
                                            <span className="text-primary text-sm font-bold uppercase tracking-wider mb-2 block">
                                                {item.tag}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-[var(--font-display)] font-bold text-white mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-gray-300 max-w-sm text-sm">{item.subtitle}</p>
                                        </div>
                                        <div
                                            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur hover:bg-primary text-white flex items-center justify-center transition-colors duration-200 flex-shrink-0 ml-4"
                                            aria-hidden="true"
                                        >
                                            <span className="material-symbols-outlined">arrow_outward</span>
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        <h3 className="text-xl font-[var(--font-display)] font-bold text-white">
                                            {item.title}
                                        </h3>
                                        {item.subtitle && (
                                            <p className="text-gray-400 text-sm">{item.subtitle}</p>
                                        )}
                                        {item.showShopNow && (
                                            <span className="text-sm text-gray-300 group-hover:text-primary transition-colors inline-flex items-center gap-1 mt-1">
                                                Shop Now{" "}
                                                <span className="material-symbols-outlined text-xs" aria-hidden="true">
                                                    arrow_forward
                                                </span>
                                            </span>
                                        )}
                                    </>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

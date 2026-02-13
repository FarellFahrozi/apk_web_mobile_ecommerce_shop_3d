const brands = ["VOGUE", "HYPEBEAST", "GQ", "WIRED", "DAZED"];

export default function SocialProof() {
    return (
        <section
            className="py-16 bg-background-light dark:bg-background-dark border-t border-b border-white/5"
            aria-labelledby="trusted-heading"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <p
                    id="trusted-heading"
                    className="text-center text-gray-500 dark:text-gray-500 uppercase tracking-widest text-xs font-bold mb-10"
                >
                    Trusted by fashion-forward brands worldwide
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60">
                    {brands.map((brand) => (
                        <span
                            key={brand}
                            className="text-xl md:text-2xl font-[var(--font-display)] font-bold text-gray-400 hover:text-white transition-colors duration-300 cursor-default select-none"
                        >
                            {brand}
                        </span>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="mt-12 max-w-2xl mx-auto text-center">
                    <blockquote className="text-lg md:text-xl text-gray-300 italic leading-relaxed mb-4">
                        &ldquo;AURA is redefining how we experience fashion online. The 3D
                        previews are absolutely game-changing.&rdquo;
                    </blockquote>
                    <cite className="text-sm text-gray-500 not-italic">
                        — Sarah Chen, Editor at Hypebeast
                    </cite>
                </div>
            </div>
        </section>
    );
}

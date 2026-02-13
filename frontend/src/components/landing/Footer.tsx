import Link from "next/link";

const trustSignals = [
    { icon: "lock", label: "Secure Checkout" },
    { icon: "local_shipping", label: "Free Shipping $100+" },
    { icon: "replay", label: "30-Day Returns" },
    { icon: "verified", label: "Authentic Guarantee" },
];

const shopLinks = [
    { label: "Collections", href: "/shop" },
    { label: "Tops", href: "/shop/tops" },
    { label: "Pants", href: "/shop/pants" },
    { label: "Shoes", href: "/shop/shoes" },
    { label: "Accessories", href: "/shop/accessories" },
];

const aboutLinks = [
    { label: "Our Story", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Sustainability", href: "/about" },
    { label: "Technology", href: "/about" },
];

const socialLinks = [
    { icon: "public", label: "Follow us on Facebook", href: "#" },
    { icon: "photo_camera", label: "Follow us on Instagram", href: "#" },
    { icon: "alternate_email", label: "Follow us on X (Twitter)", href: "#" },
];

export default function Footer() {
    return (
        <footer
            className="bg-background-dark text-white border-t border-white/10 pt-16 pb-8"
            role="contentinfo"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-16">
                    {/* Brand Column */}
                    <div className="col-span-1">
                        <Link
                            className="text-2xl font-[var(--font-display)] font-bold tracking-tighter flex items-center gap-2 mb-6 cursor-pointer focus-ring rounded w-fit"
                            href="/"
                        >
                            <span className="w-8 h-8 rounded bg-primary flex items-center justify-center text-white">
                                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                                    view_in_ar
                                </span>
                            </span>
                            AURA<span className="text-primary">.</span>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6">
                            Redefining luxury fashion through digital innovation. Experience
                            the future of style today.
                        </p>
                        <div className="flex gap-3">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.icon}
                                    className="text-gray-400 hover:text-primary transition-colors duration-200 p-2 rounded-lg hover:bg-white/5 cursor-pointer focus-ring"
                                    href={social.href}
                                    aria-label={social.label}
                                >
                                    <span className="material-symbols-outlined text-xl" aria-hidden="true">
                                        {social.icon}
                                    </span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop */}
                    <div>
                        <h4 className="font-[var(--font-display)] font-bold mb-6 text-lg">Shop</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {shopLinks.map((link) => (
                                <li key={link.label}>
                                    <Link
                                        className="hover:text-white transition-colors duration-200 cursor-pointer focus-ring rounded"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About */}
                    <div>
                        <h4 className="font-[var(--font-display)] font-bold mb-6 text-lg">About</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            {aboutLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        className="hover:text-white transition-colors duration-200 cursor-pointer focus-ring rounded"
                                        href={link.href}
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-[var(--font-display)] font-bold mb-6 text-lg">
                            Newsletter
                        </h4>
                        <p className="text-gray-400 text-sm mb-2">
                            Subscribe &amp; get{" "}
                            <span className="text-primary font-semibold">10% off</span> your
                            first order.
                        </p>
                        <p className="text-gray-500 text-xs mb-4">
                            Plus exclusive access to drops and early previews.
                        </p>
                        <form className="flex flex-col gap-2" aria-label="Newsletter signup">
                            <label htmlFor="newsletter-email" className="sr-only">
                                Email address
                            </label>
                            <input
                                id="newsletter-email"
                                className="bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                                placeholder="Enter your email"
                                type="email"
                                autoComplete="email"
                                required
                            />
                            <button
                                className="bg-primary hover:bg-primary-hover text-white font-bold py-3 px-4 rounded transition-colors duration-200 w-full cursor-pointer focus-ring"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Trust Signals */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-8 py-6 border-t border-b border-white/5 mb-8">
                    {trustSignals.map((signal) => (
                        <div
                            key={signal.icon}
                            className="flex items-center gap-2 text-gray-500 text-xs"
                        >
                            <span className="material-symbols-outlined text-sm" aria-hidden="true">
                                {signal.icon}
                            </span>
                            {signal.label}
                        </div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2024 Aura Fashion. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-500">
                        <a
                            className="hover:text-white transition-colors duration-200 cursor-pointer focus-ring rounded"
                            href="#"
                        >
                            Privacy Policy
                        </a>
                        <a
                            className="hover:text-white transition-colors duration-200 cursor-pointer focus-ring rounded"
                            href="#"
                        >
                            Terms of Service
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

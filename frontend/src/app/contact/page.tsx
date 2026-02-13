"use client";

import Footer from "@/components/landing/Footer";
import { useState } from "react";

const contactInfo = [
    { icon: "location_on", title: "Visit Us", detail: "123 Innovation District, Jakarta 12345" },
    { icon: "phone", title: "Call Us", detail: "+62 21 555 0123" },
    { icon: "mail", title: "Email Us", detail: "hello@aura.fashion" },
    { icon: "schedule", title: "Hours", detail: "Mon – Sat, 10:00 – 21:00" },
];

export default function ContactPage() {
    const [submitted, setSubmitted] = useState(false);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <div className="bg-background-dark text-white font-[var(--font-body)] min-h-screen flex flex-col overflow-x-hidden antialiased">

            <main className="flex-grow pt-20">
                {/* Hero */}
                <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
                    <div className="absolute inset-0 canvas-grid opacity-20 pointer-events-none" aria-hidden="true" />
                    <div className="max-w-4xl mx-auto text-center relative z-10">
                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[var(--font-display)] font-extrabold tracking-tight mb-4">
                            Get In{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-cyan-400">
                                Touch
                            </span>
                        </h1>
                        <p className="text-lg text-gray-400 max-w-xl mx-auto">
                            Have a question or want to collaborate? We&apos;d love to hear from you.
                        </p>
                    </div>
                </section>

                {/* Content */}
                <section className="px-4 sm:px-6 lg:px-8 pb-24">
                    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-2 space-y-6">
                            {contactInfo.map((item) => (
                                <div
                                    key={item.icon}
                                    className="flex items-start gap-4 p-5 rounded-xl bg-card-dark border border-white/5"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <span className="material-symbols-outlined text-primary">{item.icon}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-white text-sm mb-1">{item.title}</h3>
                                        <p className="text-gray-400 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}

                            {/* Social */}
                            <div className="pt-4">
                                <h3 className="font-bold text-white text-sm mb-3">Follow Us</h3>
                                <div className="flex gap-3">
                                    {["public", "photo_camera", "alternate_email"].map((icon) => (
                                        <a
                                            key={icon}
                                            href="#"
                                            className="w-10 h-10 rounded-lg bg-white/5 hover:bg-primary/20 border border-white/10 flex items-center justify-center text-gray-400 hover:text-primary transition-all"
                                        >
                                            <span className="material-symbols-outlined text-lg">{icon}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="lg:col-span-3">
                            <div className="p-6 sm:p-8 rounded-2xl bg-card-dark border border-white/5">
                                {submitted ? (
                                    <div className="text-center py-12">
                                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                                            <span className="material-symbols-outlined text-green-400 text-3xl">check_circle</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-white mb-2">Message Sent!</h3>
                                        <p className="text-gray-400">We&apos;ll get back to you within 24 hours.</p>
                                        <button
                                            onClick={() => setSubmitted(false)}
                                            className="mt-6 text-primary hover:underline text-sm font-medium cursor-pointer"
                                        >
                                            Send another message
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-5">
                                        <h2 className="text-xl font-bold text-white mb-2">Send us a message</h2>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="contact-name" className="block text-sm font-medium text-gray-300 mb-1.5">
                                                    Name
                                                </label>
                                                <input
                                                    id="contact-name"
                                                    type="text"
                                                    required
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                                                    placeholder="Your name"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="contact-email" className="block text-sm font-medium text-gray-300 mb-1.5">
                                                    Email
                                                </label>
                                                <input
                                                    id="contact-email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                                                    placeholder="you@email.com"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                                                Subject
                                            </label>
                                            <input
                                                id="contact-subject"
                                                type="text"
                                                required
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="contact-message" className="block text-sm font-medium text-gray-300 mb-1.5">
                                                Message
                                            </label>
                                            <textarea
                                                id="contact-message"
                                                required
                                                rows={5}
                                                className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition-colors resize-none"
                                                placeholder="Tell us more..."
                                            />
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full sm:w-auto px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary-hover transition-colors cursor-pointer focus-ring flex items-center justify-center gap-2"
                                        >
                                            Send Message
                                            <span className="material-symbols-outlined text-sm">send</span>
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}

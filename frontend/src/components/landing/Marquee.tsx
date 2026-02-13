export default function Marquee() {
    const items = [
        "New Drop Available",
        "Limited Edition",
        "Worldwide Shipping",
        "Sustainable Materials",
    ];

    const renderItems = () =>
        items.map((text, i) => (
            <span key={i} className="flex items-center gap-12">
                <span className="text-xl md:text-2xl font-[var(--font-display)] font-bold uppercase tracking-widest text-white">
                    {text}
                </span>
                <span
                    className="text-xl md:text-2xl font-bold uppercase tracking-widest text-white/50"
                    aria-hidden="true"
                >
                    ✦
                </span>
            </span>
        ));

    return (
        <div
            className="bg-primary py-4 overflow-hidden relative z-30"
            role="marquee"
            aria-label={`Announcements: ${items.join(", ")}`}
        >
            <div className="whitespace-nowrap flex animate-marquee">
                <div className="flex items-center gap-12 mx-6">{renderItems()}</div>
                <div className="flex items-center gap-12 mx-6" aria-hidden="true">
                    {renderItems()}
                </div>
            </div>
        </div>
    );
}

import Image from "next/image";

export default function HeroSection() {
    return (
        <section
            id="main-content"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Background / Simulation of 3D Canvas */}
            <div className="absolute inset-0 canvas-simulation z-0 cursor-rotate group">
                {/* Simulated 3D Model Placeholder */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 transition-transform duration-700 ease-out group-hover:scale-105">
                    <img
                        alt="3D model of a fashion mannequin wearing futuristic streetwear in high contrast lighting"
                        className="h-[70%] sm:h-[80%] md:h-[85%] object-contain drop-shadow-2xl filter brightness-90 contrast-125 select-none pointer-events-none mix-blend-normal"
                        fetchPriority="high"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC--knnu0Tfqvi5G-83mEg7VR3DC9TMvX22RRghDYmUw-JFdtwFwDzWa241ZgIyafhq7SRlhL7TeIJvdCwDBwOcIy9jdCvvc9RhavULZt4TfX3cYOQFEbnJrvw3x8t5wQ48x851qYi4U0LRh09LsKZ8SnBndFu_kr0Wkd4KEDoZMe1L9yk39ySpu5CveE1xs1FJ3uK5J4FZfzJqP5LJdhnBOIQJpv076SWeNskwGfxV_V7wnw12z7kuvQQ9dw7bLA9OIVXKM8BYHyU"
                    />
                </div>
                {/* Lighting effects */}
                <div
                    className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none"
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent pointer-events-none z-10"
                    aria-hidden="true"
                />
                {/* Grid lines for 3D context */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage:
                            "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
                        backgroundSize: "100px 100px",
                        perspective: "1000px",
                        transform: "rotateX(60deg) scale(2)",
                    }}
                    aria-hidden="true"
                />
            </div>

            {/* Floating UI / Content */}
            <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-end pb-28 md:justify-center md:pb-0 pointer-events-none">
                <div className="max-w-xl pointer-events-auto">
                    {/* Live badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
                        <span
                            className="w-2 h-2 rounded-full bg-green-500 animate-pulse"
                            aria-hidden="true"
                        />
                        <span className="text-xs uppercase tracking-widest font-bold text-gray-300">
                            Live 3D Preview
                        </span>
                    </div>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-[var(--font-display)] font-extrabold tracking-tight text-white mb-6 leading-[0.9]">
                        FUTURE <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">
                            OF FASHION
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-300 mb-8 max-w-md font-light leading-relaxed">
                        Experience the Fall 2024 Collection in 360° Realism. Interact with
                        the fabrics, see the stitching, own the look before you buy.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <button className="group relative px-8 py-4 bg-primary text-white font-bold rounded hover:bg-primary-hover transition-all duration-200 shadow-lg glow-primary flex items-center gap-3 overflow-hidden cursor-pointer focus-ring">
                            <span className="relative z-10">Shop The Look</span>
                            <span
                                className="material-symbols-outlined relative z-10 group-hover:translate-x-1 transition-transform duration-200"
                                aria-hidden="true"
                            >
                                arrow_forward
                            </span>
                            <div
                                className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                aria-hidden="true"
                            />
                        </button>
                        <button className="px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 text-white font-medium rounded hover:bg-white/10 transition-all duration-200 flex items-center gap-3 cursor-pointer focus-ring">
                            <span className="material-symbols-outlined" aria-hidden="true">
                                play_circle
                            </span>
                            Watch Film
                        </button>
                    </div>
                </div>

                {/* Right Side: Interactive Controls Hint */}
                <div className="absolute right-4 bottom-28 md:right-8 md:bottom-1/2 md:translate-y-1/2 flex flex-col items-center gap-4 pointer-events-auto opacity-60 hover:opacity-100 transition-opacity duration-300">
                    <button
                        className="w-12 h-12 rounded-full border border-white/20 bg-black/40 backdrop-blur flex items-center justify-center text-white cursor-pointer focus-ring hover:border-primary/50 transition-colors duration-200"
                        aria-label="Rotate 3D model 360 degrees"
                    >
                        <span className="material-symbols-outlined" aria-hidden="true">
                            360
                        </span>
                    </button>
                    <div
                        className="h-24 w-1 bg-gradient-to-b from-white/20 to-transparent rounded-full"
                        aria-hidden="true"
                    />
                    <span
                        className="text-xs uppercase tracking-widest text-gray-400 font-bold rotate-180 select-none writing-vertical-rl"
                        aria-hidden="true"
                    >
                        Drag to Rotate
                    </span>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20 animate-gentle-float"
                aria-hidden="true"
            >
                <span className="text-xs uppercase tracking-widest text-gray-400">
                    Scroll
                </span>
                <span className="material-symbols-outlined text-gray-400">
                    keyboard_arrow_down
                </span>
            </div>
        </section>
    );
}

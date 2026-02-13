"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function VirtualARTryOnInterface({ onClose, product }: { onClose: () => void; product?: any }) {
    const videoRef = useRef<HTMLVideoElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isCapturing, setIsCapturing] = useState(false);
    const [selectedColor, setSelectedColor] = useState("Original");
    const [capturedImage, setCapturedImage] = useState<string | null>(null);
    const [matchScale, setMatchScale] = useState(100);

    // Initialize Camera
    useEffect(() => {
        async function setupCamera() {
            try {
                const mediaStream = await navigator.mediaDevices.getUserMedia({
                    video: { facingMode: "user", width: { ideal: 1920 }, height: { ideal: 1080 } },
                    audio: false,
                });
                setStream(mediaStream);
                if (videoRef.current) {
                    videoRef.current.srcObject = mediaStream;
                }
            } catch (err) {
                console.error("Error accessing camera:", err);
                setError("Could not access camera. Please allow camera permissions.");
            }
        }

        setupCamera();

        return () => {
            if (stream) {
                stream.getTracks().forEach((track) => track.stop());
            }
        };
    }, []);

    const handleCapture = () => {
        if (videoRef.current && canvasRef.current) {
            setIsCapturing(true);
            const context = canvasRef.current.getContext("2d");
            if (context) {
                canvasRef.current.width = videoRef.current.videoWidth;
                canvasRef.current.height = videoRef.current.videoHeight;

                // Flip horizontally for mirror effect correction
                context.translate(canvasRef.current.width, 0);
                context.scale(-1, 1);

                context.drawImage(videoRef.current, 0, 0);

                // Apply simple color filter if selected
                if (selectedColor !== "Original") {
                    context.globalCompositeOperation = "overlay";
                    context.fillStyle = selectedColor === "Neon Blue" ? "rgba(0, 255, 255, 0.2)" : "rgba(255, 0, 255, 0.2)";
                    context.fillRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                }

                const dataUrl = canvasRef.current.toDataURL("image/png");
                setCapturedImage(dataUrl);
                setTimeout(() => setIsCapturing(false), 500); // UI feedback delay
            }
        }
    };

    const downloadImage = () => {
        if (capturedImage) {
            const link = document.createElement("a");
            link.href = capturedImage;
            link.download = `aura-ar-${Date.now()}.png`;
            link.click();
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 md:p-8"
        >
            <div className="relative w-full max-w-7xl h-full md:h-[85vh] bg-[#101922] rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-50 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-colors text-white"
                >
                    <span className="material-symbols-outlined">close</span>
                </button>

                {/* Left: Camera Feed */}
                <div className="relative w-full md:w-2/3 h-full bg-black overflow-hidden relative group">
                    {/* Live Indicator */}
                    <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 border border-white/10 backdrop-blur">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                        <span className="text-[10px] font-bold text-red-500 uppercase tracking-widest">Live Neural Feed</span>
                    </div>

                    {/* Camera View */}
                    <div className="w-full h-full relative">
                        {error ? (
                            <div className="absolute inset-0 flex items-center justify-center text-white">
                                <div className="text-center space-y-4">
                                    <span className="material-symbols-outlined text-4xl text-red-500">videocam_off</span>
                                    <p className="text-red-400 font-bold font-[var(--font-display)] uppercase tracking-wide">{error}</p>
                                </div>
                            </div>
                        ) : (
                            <>
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    playsInline
                                    muted
                                    className="w-full h-full object-cover transform -scale-x-100 opacity-90"
                                />
                                <canvas ref={canvasRef} className="hidden" />

                                {/* Overlay Elements */}
                                <div className="absolute inset-0 pointer-events-none">
                                    <div className="ar-scan-line animate-scan opacity-30" />
                                    {/* Face/Body Tracking Reticle */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[24rem] h-[32rem] border border-[var(--color-primary)]/30 rounded-[3rem] shadow-[0_0_30px_rgba(13,127,242,0.1)]">
                                        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[var(--color-primary)] rounded-tl-xl" />
                                        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[var(--color-primary)] rounded-tr-xl" />
                                        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[var(--color-primary)] rounded-bl-xl" />
                                        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[var(--color-primary)] rounded-br-xl" />
                                    </div>
                                </div>

                                {/* Captured Image Overlay */}
                                <AnimatePresence>
                                    {capturedImage && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0 }}
                                            className="absolute inset-0 z-30 bg-black/80 flex items-center justify-center p-8"
                                        >
                                            <img src={capturedImage} alt="Captured" className="max-h-full rounded-2xl border border-white/20 shadow-glow" />
                                            <button
                                                onClick={() => setCapturedImage(null)}
                                                className="absolute top-4 right-4 px-4 py-2 rounded-lg bg-white/10 text-white text-xs font-bold uppercase hover:bg-white/20"
                                            >
                                                Discard
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </>
                        )}
                    </div>

                    {/* Controls Overlay (Bottom Left) */}
                    <div className="absolute bottom-6 left-6 z-20">
                        <div className="flex items-center gap-2 text-[10px] text-white/50 font-mono uppercase">
                            <span className="material-symbols-outlined text-sm">grid_on</span>
                            X-Ray Mode Active
                        </div>
                        <div className="text-[10px] text-white/30 font-mono mt-1">Showing internal construction</div>
                    </div>
                </div>

                {/* Right: Controls Panel */}
                <div className="w-full md:w-1/3 bg-[#101922] border-l border-white/10 flex flex-col h-full relative z-40">
                    <div className="p-6 border-b border-white/5 flex items-center gap-3">
                        <span className="material-symbols-outlined text-[var(--color-primary)] animate-pulse">view_in_ar</span>
                        <h2 className="text-white font-bold font-[var(--font-display)] uppercase tracking-wider text-sm">Virtual Try-On</h2>
                        {isCapturing && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse ml-auto" />}
                    </div>

                    <div className="flex-1 overflow-y-auto p-6 space-y-8">
                        {/* Scale Control */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                                <span>Match Scale</span>
                                <span>{matchScale}%</span>
                            </div>
                            <input
                                type="range"
                                min="80"
                                max="120"
                                value={matchScale}
                                onChange={(e) => setMatchScale(Number(e.target.value))}
                                className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-[var(--color-primary)]"
                            />
                            <div className="flex justify-between text-[10px] uppercase text-slate-600 font-bold">
                                <span>80%</span>
                                <span>Auto-Fit</span>
                                <span>120%</span>
                            </div>
                        </div>

                        {/* Product Info */}
                        {product && (
                            <div className="space-y-2">
                                <span className="text-[10px] font-bold text-[var(--color-primary)] uppercase tracking-widest">New Collection • Series V2</span>
                                <h3 className="text-2xl font-black font-[var(--font-display)] text-white uppercase leading-tight">{product.name}</h3>
                                <div className="flex items-baseline gap-3">
                                    <span className="text-xl font-bold text-white">{product.price}</span>
                                    <span className="text-sm text-slate-500 line-through">$580.00</span>
                                </div>
                                <div className="flex items-center gap-1 text-[var(--color-primary)]">
                                    {[...Array(5)].map((_, i) => <span key={i} className="material-symbols-outlined text-xs fill-1">star</span>)}
                                    <span className="text-[10px] text-slate-400 font-bold ml-2">4.8 (124 Reviews)</span>
                                </div>
                            </div>
                        )}

                        {/* Config: Color */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                                <span>Material Configuration</span>
                                <span className="text-[var(--color-primary)]">Matte Black</span>
                            </div>
                            <div className="flex gap-3">
                                {["Original", "Neon Blue", "Cyber Pink"].map((color) => (
                                    <button
                                        key={color}
                                        onClick={() => setSelectedColor(color)}
                                        className={`w-12 h-12 rounded-full border-2 transition-all flex items-center justify-center ${selectedColor === color ? "border-[var(--color-primary)] ring-2 ring-[var(--color-primary)]/20" : "border-transparent hover:border-white/20"}`}
                                    >
                                        <div
                                            className="w-10 h-10 rounded-full border border-white/10"
                                            style={{
                                                backgroundColor: color === "Original" ? "#1a1a1a" : color === "Neon Blue" ? "#00ffff" : "#ff00ff",
                                            }}
                                        />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Config: Size */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400">
                                <span>Size</span>
                                <div className="flex items-center gap-1 text-[var(--color-primary)] cursor-pointer hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-xs">straighten</span>
                                    <span>Recommended: M</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-4 gap-2">
                                {["S", "M", "L", "XL"].map((size) => (
                                    <button key={size} className={`h-10 rounded-lg border border-white/10 text-xs font-bold hover:bg-white/5 transition-colors ${size === "M" ? "bg-[var(--color-primary)] border-[var(--color-primary)] text-white" : "text-slate-400"}`}>
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Product DNA */}
                        <div className="space-y-3 pt-4 border-t border-white/5">
                            <h4 className="text-xs font-bold text-white uppercase tracking-widest">Product DNA</h4>
                            <p className="text-xs text-slate-400 leading-relaxed">
                                Engineered with our proprietary adaptive fiber technology. This bomber jacket features self-healing fabric and integrated smart-heating elements.
                            </p>
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-xs text-[var(--color-primary)]">check</span>
                                    Waterproof GORE-TEX Pro shell
                                </li>
                                <li className="flex items-center gap-2 text-[10px] text-slate-400 uppercase tracking-wide">
                                    <span className="material-symbols-outlined text-xs text-[var(--color-primary)]">check</span>
                                    Modular magnetic pockets
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="p-6 border-t border-white/5 bg-[#0b1219] space-y-3">
                        {capturedImage ? (
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={() => setCapturedImage(null)}
                                    className="h-12 rounded-xl border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-xs flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-base">replay</span>
                                    Retake
                                </button>
                                <button
                                    onClick={downloadImage}
                                    className="h-12 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-all text-xs flex items-center justify-center gap-2"
                                >
                                    <span className="material-symbols-outlined text-base">download</span>
                                    Save
                                </button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-2 gap-3">
                                <button
                                    onClick={handleCapture}
                                    className="h-12 rounded-xl border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-xs flex items-center justify-center gap-2 group"
                                >
                                    <span className="material-symbols-outlined text-base group-hover:scale-110 transition-transform">camera</span>
                                    Snapshot
                                </button>
                                <button className="h-12 rounded-xl border border-white/10 text-white font-bold uppercase tracking-widest hover:bg-white/5 transition-all text-xs flex items-center justify-center gap-2 group">
                                    <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                                    Record
                                </button>
                            </div>
                        )}

                        <button className="w-full h-12 rounded-xl bg-[var(--color-primary)] text-white font-bold uppercase tracking-widest hover:bg-blue-600 transition-all shadow-[0_0_20px_rgba(13,127,242,0.4)] text-xs flex items-center justify-center gap-2">
                            Add to Cart - Size M
                            <span className="material-symbols-outlined text-base">shopping_cart</span>
                        </button>

                        <button
                            onClick={onClose}
                            className="w-full h-12 rounded-xl bg-white text-black font-bold uppercase tracking-widest hover:bg-slate-200 transition-all text-xs flex items-center justify-center gap-2"
                        >
                            <span className="material-symbols-outlined text-base">view_in_ar</span>
                            Exit Virtual Try-On
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

"use client";

import Link from "next/link";

/* ─── Wardrobe Data ─── */
const outerwear = [
    {
        name: "Noir Bomber Jacket",
        material: "Leather • Slim Fit",
        price: "$450",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB1mZujeYOvZxYiCMvd0szRfu9F7zTF-pbdLpXGEBY5NbQc_SJR6eoR92LBxb8t1PJVSnBkbO74_9huodpbEn25JGHhniAfnkX_jt12C_vnahro0W-HYIFMNCFwtHqm_2XhN7uoXFZLlgBlz39jnVKRi-Pc2h4uXYLZxPTExrIZ8ikMPQnlRKo-EGc0nqxqYtaqqTUNoW-HLVms2fu_twM4TVQJ2CD8vdaDTsPpZVbuN9aoaGuOIevnvrd6GI6smBKzSQDdHhhWJh0",
    },
    {
        name: "Heritage Trench",
        material: "Cotton • Classic",
        price: "$890",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuAUuynkP2w6fPCUJyHkSgkwqeAY6E2LyHj-Uh0ict7egNXfg8e656JvmOH93C2jqz-AlAZd-vKiXgEd4i3U0iwWg5hK5gotp47YYXPQ-r7skM0ITWljeTjMNaFy3ArKrJRddcm3kn_j43pAwQm6-gDwYDU02qYuq3BVmd1NbKcHh54L1ltDg4FPw3NX83iYn4hS1pF9ReQt3slsPFSzKkUPY5OJnfxyuZoftgd8TBnXqKKlOsVfZrCH4w5VC8RQGgNLXyGVy1-WQ08",
    },
];

const tops = [
    {
        name: "Essential Tee",
        material: "Organic Cotton",
        price: "$120",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKGsHsoiLS7X4BheGOJ7ZVcnm_f2uss_mB-DIiPuzadolZeZaBZ2MRAnFSphJJi3BTGX2xUkWpht37oPdYeHeDmxDbDrTK2Yt9AILbB-uhoKKJJgxayWpe5AMb0C66Hvn5OICUzJczK3skY9jj1FPF4Pl_l8GzUtmR1q8ejjzPItLZDitd33vz-Rk5AaD9pt-xiUFL-eg2rOl3N1xAbi7KKqgOQamMbWHiDPKVlx_61JifjKDHjpvrT7NfGD3d8WsRG5CTVH2uRo",
    },
    {
        name: "Merino Knit",
        material: "Wool • Relaxed",
        price: "$280",
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuB-10XkNlsYgTQ72_Mon1aHCfNbWY_idharuIhsNfPkv469GTKqzN56rfQBSt8LJDs0AhqDy4Bbxms2JFHVzpAflBqlNuL9Kbej7O1JcuUGsK-iuKnCXViNhTc9EKVd-f31c-5c-ejT9eYR9thuMgXYtXRzb-ARDQEGHy93AxLbpffPrjW9OPyTx-Fi_aAen84eypsDylZXT6AVIrkwaoX0ooB6cjWco-HJ-EWDsEFLONhpCqv7F5903yRw3h8AhZgtrdkyGFqkzq0",
    },
];

const materialTextures = [
    {
        name: "Leather",
        selected: true,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuDHi265ckUWAVFtckNjH8x--x_oHQcuFd9AEy6uQ1Rde7Apb57zA3sH79Q3vLVfsJvZA-wGogneaH342UpZ4GWjVq7TESfPzMNf1AAZ0x2VftLTQ85MKXMdZtqmCMnGk1zxBscMbkYBBCtevd-RRBLwSjxPRonfA1hVrXdHVMbhAGrEgi6q7ztxyMn2amwPw1n0dq9kID9MExuiYgFhyfsp4MFMiIeVPOwI9X859UoYVz7-OFzrZh77o5S9Ek6j-cBr7ZybtmLePdk",
    },
    {
        name: "Wool",
        selected: false,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuD6qPUHHMwyG0uWh830LPKS0230cYhcKEc_Ad4U14xd7tnLBhsEml5Z7dd1O14trOVHWZkkjlo3e3k7ToTmxg20hAmAsKwSYeFv7qZ3vXiFrCOEENO8kXw3VbntkDwpONMkibmGJ9su0ERZ_vMlzA5Z3t2g1ROsgeLLiVpvHsAcZkiGe2LDlxqEqBuvuvT_az6l30vrpXB-u5JxxOFh1SSPTCCeU01kO4oGZvfCMRDDM07bBpSzEssJYB_a1fprAFV_d7LBRnulbsI",
    },
    {
        name: "Denim",
        selected: false,
        image:
            "https://lh3.googleusercontent.com/aida-public/AB6AXuBV7axrBhon5lqVc8ASt6O2cHiF7PR8nqhWKczHwsquXM-ILSfbESHxngDUiDGk6xVX66HZV1OgohPdtrCXzfWy_-fEf9aL1VTHfJeo20EymoCTOzK2xCR7h8G0PLtWa4VASDXMP_DYovNLow1kwPlXlnUGm1KO3M1PkjF5OFiiNtaLe-A7bgz7u95DhzCQhVcKvr1CwR7gK91JIBZT50ptaPlLh6HhGl-QX1kM8NOYhN-nKfYQ7rk1VS3CymAtY2IQPPA66mLbaw8",
    },
];

const colorways = [
    { name: "Black", bg: "bg-slate-900", selected: true },
    { name: "Brown", bg: "bg-stone-800", selected: false },
    { name: "Navy", bg: "bg-blue-900", selected: false },
    { name: "Burgundy", bg: "bg-red-900", selected: false },
];

export default function CustomizerPage() {
    return (
        <div className="bg-background-dark text-white font-[var(--font-body)] overflow-hidden h-screen flex flex-col">
            {/* Header */}
            <header className="absolute top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
                <div className="flex items-center gap-4 pointer-events-auto">
                    <Link
                        href="/"
                        className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-primary/20"
                    >
                        A
                    </Link>
                    <nav className="hidden md:flex items-center text-sm font-medium text-slate-400 gap-2">
                        <Link href="/" className="hover:text-white transition-colors">Home</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <Link href="/shop"
                            className="hover:text-white transition-colors">Collections</Link>
                        <span className="material-symbols-outlined text-xs">chevron_right</span>
                        <span className="text-white">Atelier Customizer</span>
                    </nav>
                </div>
                <div className="flex items-center gap-4 pointer-events-auto">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800/50 border border-white/10 hover:bg-slate-800 hover:border-white/20 transition-all text-sm font-medium backdrop-blur-sm">
                        <span className="material-symbols-outlined text-base">favorite_border</span>
                        <span>Save Look</span>
                    </button>
                    <Link
                        href="/checkout"
                        className="w-10 h-10 rounded-full bg-slate-800 border border-white/10 flex items-center justify-center hover:bg-slate-700 transition-all relative"
                    >
                        <span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-background-dark" />
                        <span className="material-symbols-outlined">shopping_bag</span>
                    </Link>
                </div>
            </header>

            {/* Main */}
            <main className="flex-1 relative flex overflow-hidden">
                {/* Left: Wardrobe Sidebar */}
                <aside className="absolute left-6 top-24 bottom-24 w-80 z-40 flex flex-col gap-4 pointer-events-none">
                    {/* Search */}
                    <div className="pointer-events-auto glass-panel rounded-xl p-1 shadow-xl">
                        <div className="relative group">
                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-slate-400 group-focus-within:text-primary transition-colors">
                                search
                            </span>
                            <input
                                type="text"
                                placeholder="Search items..."
                                className="w-full bg-transparent border-none text-sm text-white pl-10 pr-4 py-2 focus:ring-0 placeholder-slate-500"
                            />
                        </div>
                    </div>

                    {/* Tabs + Items */}
                    <div className="flex-1 glass-panel rounded-xl overflow-hidden flex flex-col shadow-xl pointer-events-auto">
                        <div className="flex items-center border-b border-white/5 px-2 pt-2">
                            <button className="flex-1 pb-2 text-sm font-medium text-white border-b-2 border-primary">
                                Apparel
                            </button>
                            <button className="flex-1 pb-2 text-sm font-medium text-slate-400 hover:text-white transition-colors border-b-2 border-transparent">
                                Access.
                            </button>
                            <button className="flex-1 pb-2 text-sm font-medium text-slate-400 hover:text-white transition-colors border-b-2 border-transparent">
                                Shoes
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto p-4 space-y-6">
                            {/* Outerwear */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Outerwear</h3>
                                    <span className="text-xs text-primary cursor-pointer hover:underline">View All</span>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {outerwear.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative bg-white/5 hover:bg-white/10 rounded-lg p-2 cursor-grab active:cursor-grabbing border border-transparent hover:border-primary/50 transition-all"
                                        >
                                            <div className="aspect-[4/5] rounded-md overflow-hidden mb-2 bg-background-dark/50 relative">
                                                <span className="absolute top-1 right-1 bg-black/40 text-[10px] px-1.5 py-0.5 rounded text-white backdrop-blur-sm">
                                                    {item.price}
                                                </span>
                                                <img
                                                    alt={item.name}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    src={item.image}
                                                />
                                            </div>
                                            <p className="text-xs font-semibold text-white truncate">{item.name}</p>
                                            <p className="text-[10px] text-slate-400">{item.material}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tops */}
                            <div>
                                <div className="flex items-center justify-between mb-3">
                                    <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Tops</h3>
                                </div>
                                <div className="grid grid-cols-2 gap-3">
                                    {tops.map((item) => (
                                        <div
                                            key={item.name}
                                            className="group relative bg-white/5 hover:bg-white/10 rounded-lg p-2 cursor-grab active:cursor-grabbing border border-transparent hover:border-primary/50 transition-all"
                                        >
                                            <div className="aspect-[4/5] rounded-md overflow-hidden mb-2 bg-background-dark/50 relative">
                                                <span className="absolute top-1 right-1 bg-black/40 text-[10px] px-1.5 py-0.5 rounded text-white backdrop-blur-sm">
                                                    {item.price}
                                                </span>
                                                <img
                                                    alt={item.name}
                                                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                                                    src={item.image}
                                                />
                                            </div>
                                            <p className="text-xs font-semibold text-white truncate">{item.name}</p>
                                            <p className="text-[10px] text-slate-400">{item.material}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Center: 3D Canvas */}
                <div className="absolute inset-0 z-0 scene-bg flex items-center justify-center">
                    <div className="relative w-full h-full">
                        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-background-dark via-background-dark/50 to-transparent pointer-events-none" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[700px] flex items-center justify-center pointer-events-none">
                            <img
                                alt="3D avatar model"
                                className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB88fyRhANnjHgHMjgWFzi6KLEH4AQmS9yoJGbRNeoFvFytwk-byjeRhBU6axiKRSHOK6I24e9KPjSrrYYKJwTtXMMYFiDihAcI4gPHo_afh1NQ6K70hZWICIgy9xvcowRvO2v322KJBajFjMDFLLlenOhBJzZQeI6C4nID6n7rmjLQb97VdavFH2U6znIZ3Q9C93wQtjbWrEQVXtmFoYO2ULRtdOXddxRHCCPf2ei0Bsynxr1suQ_E3R-fHJegWHjNXSzpEZ2pDaU"
                            />
                            {/* Scene Controls */}
                            <div className="absolute bottom-10 right-0 pointer-events-auto transform translate-x-24 translate-y-12">
                                <div className="glass-panel rounded-full p-2 flex flex-col gap-2">
                                    {["rotate_left", "add", "remove"].map((icon) => (
                                        <button
                                            key={icon}
                                            className="w-8 h-8 rounded-full bg-white/10 hover:bg-primary text-white flex items-center justify-center transition-colors"
                                        >
                                            <span className="material-symbols-outlined text-sm">{icon}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Customization Panel */}
                <aside className="absolute right-6 top-24 bottom-24 w-80 z-40 pointer-events-none flex flex-col justify-center">
                    <div className="glass-panel rounded-xl p-5 shadow-xl pointer-events-auto h-auto max-h-full overflow-y-auto">
                        <div className="flex items-center justify-between mb-6">
                            <div>
                                <h2 className="text-lg font-bold text-white">Noir Bomber Jacket</h2>
                                <p className="text-xs text-slate-400">Currently Editing</p>
                            </div>
                            <button className="text-slate-400 hover:text-white transition-colors" aria-label="Reset">
                                <span className="material-symbols-outlined">restart_alt</span>
                            </button>
                        </div>

                        {/* Material */}
                        <div className="mb-6">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                Material
                            </label>
                            <div className="grid grid-cols-4 gap-2">
                                {materialTextures.map((tex) => (
                                    <button
                                        key={tex.name}
                                        className={`relative aspect-square rounded-lg overflow-hidden ${tex.selected
                                            ? "ring-2 ring-primary ring-offset-2 ring-offset-background-dark"
                                            : "opacity-60 hover:opacity-100 transition-opacity"
                                            }`}
                                    >
                                        <img alt={tex.name} className="w-full h-full object-cover" src={tex.image} />
                                        {tex.selected && <div className="absolute inset-0 bg-black/20" />}
                                    </button>
                                ))}
                                <button className="relative aspect-square rounded-lg overflow-hidden bg-slate-800 border border-white/10 flex items-center justify-center opacity-60 hover:opacity-100 transition-opacity">
                                    <span className="material-symbols-outlined text-slate-400">add</span>
                                </button>
                            </div>
                        </div>

                        {/* Colorway */}
                        <div className="mb-6">
                            <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                                Colorway
                            </label>
                            <div className="flex gap-3">
                                {colorways.map((c) => (
                                    <button
                                        key={c.name}
                                        className={`w-8 h-8 rounded-full ${c.bg} border ${c.selected
                                            ? "border-white/20 ring-2 ring-primary ring-offset-2 ring-offset-background-dark"
                                            : "border-white/10 hover:scale-110 transition-transform"
                                            }`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Sliders */}
                        <div className="space-y-4 mb-6">
                            <div>
                                <div className="flex justify-between mb-1">
                                    <label className="text-xs font-medium text-slate-300">Fit Tightness</label>
                                    <span className="text-xs text-slate-500">Slim</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue={75}
                                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                            <div>
                                <div className="flex justify-between mb-1">
                                    <label className="text-xs font-medium text-slate-300">Sleeve Length</label>
                                    <span className="text-xs text-slate-500">Regular</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="100"
                                    defaultValue={50}
                                    className="w-full h-1 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
                                />
                            </div>
                        </div>

                        <div className="pt-4 border-t border-white/10">
                            <button className="w-full py-2 bg-white/5 hover:bg-white/10 text-white rounded-lg text-sm font-medium transition-colors border border-white/5">
                                Reset Adjustments
                            </button>
                        </div>
                    </div>
                </aside>

                {/* Bottom Action Bar */}
                <div className="absolute bottom-0 left-0 w-full p-6 z-50 pointer-events-none">
                    <div className="max-w-4xl mx-auto glass-panel rounded-xl p-4 flex items-center justify-between pointer-events-auto shadow-2xl shadow-black/50">
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[outerwear[0].image, tops[0].image].map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-10 h-10 rounded-full border-2 border-slate-800 overflow-hidden bg-slate-800"
                                    >
                                        <img alt="" className="w-full h-full object-cover" src={src} />
                                    </div>
                                ))}
                                <div className="w-10 h-10 rounded-full border-2 border-slate-800 overflow-hidden bg-slate-800 flex items-center justify-center text-xs text-white font-medium">
                                    +2
                                </div>
                            </div>
                            <div className="hidden sm:block">
                                <p className="text-sm text-slate-300">4 Items selected</p>
                                <p className="text-xs text-slate-500">Ready for checkout</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="text-right">
                                <p className="text-xs text-slate-400 uppercase tracking-wide">Total Price</p>
                                <p className="text-2xl font-bold text-white">$1,450.00</p>
                            </div>
                            <Link
                                href="/checkout"
                                className="bg-primary hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2"
                            >
                                <span>Buy Full Outfit</span>
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

"use client";

const categories = [
    { name: "Jackets & Coats", count: 12, checked: true },
    { name: "Hoodies", count: 8, checked: false },
    { name: "Cargo Pants", count: 15, checked: false },
    { name: "Accessories", count: 6, checked: false },
];

const colors = [
    { name: "Black", bg: "bg-slate-900" },
    { name: "White", bg: "bg-white" },
    { name: "Navy", bg: "bg-blue-900" },
    { name: "Olive", bg: "bg-green-900" },
    { name: "Grey", bg: "bg-stone-500" },
];

const materials = [
    { name: "Gore-Tex", active: false },
    { name: "Cotton", active: false },
    { name: "Tech Fleece", active: true },
    { name: "Nylon", active: false },
];

export default function FilterSidebar() {
    return (
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-8 hidden lg:block">
            {/* Categories */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                    Categories
                </h3>
                <ul className="space-y-3">
                    {categories.map((cat) => (
                        <li key={cat.name}>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    type="checkbox"
                                    defaultChecked={cat.checked}
                                    className="w-4 h-4 rounded border-slate-300 dark:border-slate-600 bg-transparent text-primary focus:ring-primary focus:ring-offset-background-dark"
                                />
                                <span className="text-slate-600 dark:text-slate-300 group-hover:text-primary transition-colors">
                                    {cat.name}
                                </span>
                                <span className="ml-auto text-xs text-slate-500 dark:text-slate-500">
                                    {cat.count}
                                </span>
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                    Price Range
                </h3>
                <div className="px-1">
                    <div className="h-1 w-full bg-slate-200 dark:bg-slate-700 rounded-full relative mb-6">
                        <div className="absolute left-0 top-0 h-full w-2/3 bg-primary rounded-full" />
                        <div className="absolute left-2/3 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-primary cursor-pointer shadow-md hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                        <span>$0</span>
                        <span>$1,200</span>
                    </div>
                </div>
            </div>

            {/* Colors */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                    Color
                </h3>
                <div className="flex flex-wrap gap-3">
                    {colors.map((color) => (
                        <button
                            key={color.name}
                            title={color.name}
                            className={`w-8 h-8 rounded-full ${color.bg} border border-slate-700 hover:ring-2 ring-primary ring-offset-2 ring-offset-background-dark transition-all`}
                        />
                    ))}
                </div>
            </div>

            {/* Material */}
            <div>
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-4">
                    Material
                </h3>
                <div className="flex flex-wrap gap-2">
                    {materials.map((mat) => (
                        <span
                            key={mat.name}
                            className={`px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-colors ${mat.active
                                    ? "bg-primary/20 border border-primary text-primary"
                                    : "bg-slate-200 dark:bg-card-dark border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-400 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {mat.name}
                        </span>
                    ))}
                </div>
            </div>
        </aside>
    );
}

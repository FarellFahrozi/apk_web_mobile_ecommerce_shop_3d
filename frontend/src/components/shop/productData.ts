export interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    alt: string;
    rating: number;
    reviews: number;
    badge: string | null;
    category: string;
    slug: string;
    variants?: {
        name: string;
        color: string;
        image: string;
    }[];
    features?: string[];
}

export interface CategoryMeta {
    title: string;
    subtitle: string;
    description: string;
    icon: string;
}

export const categoryMeta: Record<string, CategoryMeta> = {
    tops: {
        title: "Tops",
        subtitle: "Baju",
        description: "Jackets, hoodies, tees and outerwear engineered for the future of fashion.",
        icon: "checkroom",
    },
    pants: {
        title: "Pants",
        subtitle: "Celana",
        description: "Technical trousers and adaptive joggers designed for fluid movement.",
        icon: "styler",
    },
    shoes: {
        title: "Shoes",
        subtitle: "Sepatu",
        description: "High-performance footwear with neural-cushioning technology.",
        icon: "directions_run",
    },
    accessories: {
        title: "Accessories",
        subtitle: "Aksesoris",
        description: "Essential tech-carry and augmented wearable assets.",
        icon: "watch",
    },
};

export const allProducts: Record<string, Product[]> = {
    tops: [
        {
            id: 1,
            slug: "neural-weave-bomber",
            name: "Neural Weave Bomber",
            price: "$450.00",
            category: "tops",
            rating: 4.8,
            reviews: 124,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtDR__4S8613NE0wc3LjZ1P0jIlE4531Fke8ic-ahJv_JRrtX8iq_e2pyB679SyXMAaDOmjvQ6UG5Y40VFP8fu5il4v2ApVAp5McvRuDfyYezKl50QeVj0a65kZV9zfmAACh-yccyiDPXQ_VNh7HUAcznheP2-z5LH_uLdun8My-_BkJps-PQb2oj5XM7KNaVo1t3yBt3YYr8jAQUn-0gjMppq49GhUE4Xf5JQqj15OloVeEiDZCqjANXqqJYLKYUeEzX1y03OmIE",
            alt: "Neural Weave Bomber jacket in matte finish",
            badge: "New",
            variants: [
                { name: "Matte Black", color: "#000000", image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBtDR__4S8613NE0wc3LjZ1P0jIlE4531Fke8ic-ahJv_JRrtX8iq_e2pyB679SyXMAaDOmjvQ6UG5Y40VFP8fu5il4v2ApVAp5McvRuDfyYezKl50QeVj0a65kZV9zfmAACh-yccyiDPXQ_VNh7HUAcznheP2-z5LH_uLdun8My-_BkJps-PQb2oj5XM7KNaVo1t3yBt3YYr8jAQUn-0gjMppq49GhUE4Xf5JQqj15OloVeEiDZCqjANXqqJYLKYUeEzX1y03OmIE" }
            ],
            features: [
                "Waterproof GORE-TEX Pro Shell",
                "Modular Magnetic Pockets",
                "Reflective Fiber Weaving",
                "Smart-Thermal Lining"
            ]
        },
        {
            id: 2,
            slug: "flux-hoodie",
            name: "Flux Hoodie",
            price: "$450.00",
            category: "tops",
            rating: 4.9,
            reviews: 201,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBiPoYD4zoK9RvT5pTrgrQ7nJMEe3jWMwcseHwWfdVKVo9Qmu_z5q-of3QRSDCMRW0dJUBT-IOpMw8ACn_pUmPey2DReBF1JXD8gOHrNGlKyybiY5vPt8WvU1jSPgT6gjPP2BVLcGUz4o8tZq3p_AO7DtzGyoqQ2G_IfnlzaCj6gDIjMWhlLmi74B9-0Y6NI-RGOpbMq6-2E_2gCw8lMD1lhA6VLKY6Ij6fpIhansJziEOqkUxTq52bU6vW9-mxmdRqbtxmnUqtixI",
            alt: "Flux Hoodie with abstract patterns",
            badge: "Best Seller"
        },
        {
            id: 6,
            slug: "vertex-jacket",
            name: "Vertex Jacket",
            category: "tops",
            price: "$1,250.00",
            rating: 5.0,
            reviews: 45,
            badge: "New",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBd9ZfZoCz5enwC0_myBbuPmPuFTGJl2S5pvnrW-6x05FuErZvKz_pWbgDUDLP3tYtXdIIG1Zq2ayQWyYM__JjF7shNvsRKi-qkVHUuJzCXDPs2p73mV14mKWqVF9JmLRg1nqkHXxzLwsoAhZFNe9BicFzSIPA3CaMA1LbBgaWbefepOc0nJI3z1gGG7c19HgbfkNMVzv5oTlMOkWPoCOfXMZ4fvW8cPyP0bP9jsSnrypwI6Wy0UmH2cXFizYtvEo8qzyoNFOjgjZQ",
            alt: "Minimalist streetwear jacket on a grey background",
        }
    ],
    pants: [
        {
            id: 3,
            slug: "ghost-cargo-pants",
            name: "Ghost Cargo Pants",
            price: "$320.00",
            category: "pants",
            rating: 4.7,
            reviews: 89,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCmKGsHsoiLS7X4BheGOJ7ZVcnm_f2uss_mB-DIiPuzadolZeZaBZ2MRAnFSphJJi3BTGX2xUkWpht37oPdYeHeDmxDbDrTK2Yt9AILbB-uhoKKJJgxayWpe5AMb0C66Hvn5OICUzJczK3skY9jj1FPF4Pl_l8GzUtmR1q8ejjzPItLZDitd33vz-Rk5AaD9pt-xiUFL-eg2rOl3N1xAbi7KKqgOQamMbWHiDPKVlx_61JifjKDHjpvrT7NfGD3d8WsRG5CTVH2uRo",
            alt: "Ghost Cargo Pants in urban style",
            badge: "New"
        }
    ],
    shoes: [
        {
            id: 4,
            slug: "cyber-sneakers",
            name: "Cyber Sneakers",
            price: "$240.00",
            category: "shoes",
            rating: 4.9,
            reviews: 312,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDYp8rlPrJDwz4xQw87mubz0klD0p0np8ZWabbCBWNxXRmh_zdwHiiAKftkYtrO6Ytmlp4eAYhGi0IbHJ6BoegoioXO1CIqYeGUo4aCk20ul5m8FchZ5JGPsLrenm6JE1PfOl1RFt0hA3COVrsNrEUpXtvM5a2VcU7H9neTJERzWFopXYItm8uuuwwz-zHhb1KOsd9XyK6qZo4u2_Eooamt2vGvE7lXUfZ1rUQOF8E_ygKlR8fNHiNS8EseO4WKi6VhbDoDs1bOzXI",
            alt: "Cyber Sneakers floating design",
            badge: "3D PREVIEW"
        }
    ],
    accessories: [
        {
            id: 5,
            slug: "void-shades",
            name: "Void Shades",
            price: "$320.00",
            category: "accessories",
            rating: 4.6,
            reviews: 67,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB_jfEfLMq999apsWqce5dBLnQEd5w1tciv5kCNx5Vdege1w_J2k86XCklc_5XRTY4w2MoIicZgMGItP_XKknFX6rfNP0sQAuepoXOlAyJRCBVzOvA1qAvYeWjiGdvklSYqLxhlygoAEQHfpCfk2s_4QqI1vb08KfbA5Ew5-MNdlOhjv6TBmctT4kWx5cro2TJu9vFZZnfhFZh0oNwrpYiaBouL3MsI9F9aaK8I95K5JVkWckU4yQfJgOVeyb-Hx5WLvoSjJCkzMvQ",
            alt: "Metamorphic accessories on dark background",
            badge: "Utility"
        },
        {
            id: 7,
            slug: "metamorphic-accessories",
            name: "Accessories",
            price: "$0.00",
            category: "accessories",
            rating: 0,
            reviews: 0,
            badge: null,
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnRzXfgYiAntNpbB6rXIK-8-TQDC2tprG-FRV19KAB-IQu7jkm09IauD_VCX5s9j_hzVkgmW5Z6JpHMQC8I9PTmAYlzfOsxdV7DEfawphxvPh42sSrfMQK3Ww3LWKAOww2I49Qqxc98ljZKeg2S36mGTM_6eIxYDeuJADQVgyxwkuo17V2tNogZAFJSq9y7EeiF0B2EAet0iGKD3biWEiUUZuDRrjmQai_D9J6ML1EREQuwZIKeG1W-Kjof-SYTFxJmDzYHpUwe9U",
            alt: "Luxury accessories on dark background",
        }
    ]
};

import type { Metadata } from "next";
import { Manrope, Syne } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/ClientLayout";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-body",
});

const syne = Syne({
    subsets: ["latin"],
    variable: "--font-display",
});

export const metadata: Metadata = {
    title: "AURA — Future of Fashion | 3D Experience",
    description:
        "Experience the Fall 2024 Collection in 360° Realism. Interact with fabrics, see the stitching, own the look before you buy.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head>
                <link
                    href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
                    rel="stylesheet"
                />
            </head>
            <body
                className={`${manrope.variable} ${syne.variable} antialiased`}
            >
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}

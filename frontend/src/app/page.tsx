import HeroSection from "@/components/landing/HeroSection";
import Marquee from "@/components/landing/Marquee";
import Collections from "@/components/landing/Collections";
import SocialProof from "@/components/landing/SocialProof";
import TrendingNow from "@/components/landing/TrendingNow";
import Footer from "@/components/landing/Footer";

export default function Home() {
    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-800 dark:text-white font-[var(--font-body)] overflow-x-hidden antialiased">
            {/* Skip to Content (Accessibility) */}
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded focus-ring"
            >
                Skip to main content
            </a>

            <HeroSection />
            <Marquee />
            <Collections />
            <SocialProof />
            <TrendingNow />
            <Footer />
        </div>
    );
}

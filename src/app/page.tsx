import { HomeHeroSection } from "@/components/pages/home/homeHeroSection";
import { OverviewSection } from "@/components/pages/home/overview";
import { PrivateSaleCounter } from "@/components/pages/home/privateSaleCounter";
import { SolutionsSection } from "@/components/pages/home/solutionsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-24 py-28 space-y-24">
      <HomeHeroSection />
      <PrivateSaleCounter />
      <OverviewSection />
      <SolutionsSection />
    </main>
  );
}

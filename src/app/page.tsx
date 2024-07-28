import { EasyToUseSolutionSection } from "@/components/pages/home/easyToUseSolution";
import { FeaturedInSection } from "@/components/pages/home/featuredInSection";
import { HomeHeroSection } from "@/components/pages/home/homeHeroSection";
import { OurAdvisorSection } from "@/components/pages/home/ourAdvisorSection";
import { OurTeamSection } from "@/components/pages/home/ourTeamSection";
import { OverviewSection } from "@/components/pages/home/overviewSection";
import { PrivateSaleCounter } from "@/components/pages/home/privateSaleCounter";
import { RoadMapSection } from "@/components/pages/home/roadMapSection";
import { SolutionsSection } from "@/components/pages/home/solutionsSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-24 py-28 space-y-24">
      <HomeHeroSection />
      <PrivateSaleCounter />
      <OverviewSection />
      <SolutionsSection />
      <EasyToUseSolutionSection />
      <RoadMapSection />
      <OurTeamSection />
      <OurAdvisorSection />
      <FeaturedInSection />
    </main>
  );
}

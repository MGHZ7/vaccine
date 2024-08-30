'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { EasyToUseSolutionSection } from "@/components/pages/home/easyToUseSolution";
import { FeaturedInSection } from "@/components/pages/home/featuredInSection";
import { HomeHeroSection } from "@/components/pages/home/homeHeroSection";
import { OurAdvisorSection } from "@/components/pages/home/ourAdvisorSection";
import { OurTeamSection } from "@/components/pages/home/ourTeamSection";
import { OverviewSection } from "@/components/pages/home/overviewSection";
import { PrivateSaleCounter } from "@/components/pages/home/privateSaleCounter";
import { RoadMapSection } from "@/components/pages/home/roadMapSection";
import { SolutionsSection } from "@/components/pages/home/solutionsSection";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    document.body.classList.add('bg-body');

    return () => {
      document.body.classList.remove('bg-body');
    }
  });

  return (
    <main className=" min-h-screen  py-28 bg-home-img">
      <ElementVisibilityChecker ComponentToShow={HomeHeroSection} props={{}} />

      <div className="px-8 md:px-24 flex flex-col items-center justify-between space-y-24 mt-24">
        <ElementVisibilityChecker ComponentToShow={PrivateSaleCounter} props={{}} />
        <ElementVisibilityChecker ComponentToShow={OverviewSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={SolutionsSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={EasyToUseSolutionSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={RoadMapSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={OurTeamSection} props={{}} />
        <ElementVisibilityChecker ComponentToShow={OurAdvisorSection} props={{}} />
      </div>

      <div className="mt-16">
        <FeaturedInSection />
      </div>
    </main>
  );
}

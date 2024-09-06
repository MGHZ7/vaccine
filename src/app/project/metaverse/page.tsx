'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { MetaverseDescriptionSection } from "@/components/pages/project/metaverse/metaverseDescription";
import { MetaverseGallery } from "@/components/pages/project/metaverse/metaverseGallary";
import { MetaverseHealth } from "@/components/pages/project/metaverse/metaverseHealth";
import { MetaverseLandingSection } from "@/components/pages/project/metaverse/metaverseHeroSection";
import { MetaverseNFTSection } from "@/components/pages/project/metaverse/nft/metaverseNFT";
import { MetaverseVac } from "@/components/pages/project/metaverse/metaverseVac";
import { useEffect } from "react";


export default function ProjectMetaversePage() {

  useEffect(() => {
    document.body.classList.add('bg-metaverse');

    return () => {
      document.body.classList.remove('bg-metaverse');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28 space-y-16">
      <ElementVisibilityChecker ComponentToShow={MetaverseLandingSection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={MetaverseDescriptionSection} props={{}} />

      <section className="container mx-auto space-y-16 px-4 lg:px-8">
        <ElementVisibilityChecker ComponentToShow={MetaverseHealth} props={{}} />
        <ElementVisibilityChecker ComponentToShow={MetaverseVac} props={{}} />
        <ElementVisibilityChecker ComponentToShow={MetaverseGallery} props={{}} />
        <MetaverseNFTSection />
      </section>
    </main>
  );
}

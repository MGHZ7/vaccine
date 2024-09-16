'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { MetaverseNFTSection } from "@/components/pages/project/metaverse/nft/metaverseNFT";
import { useEffect } from "react";
import { AILandingSection } from "@/components/pages/artificial-intelligence/AILanding";
import { AIVicky } from "@/components/pages/artificial-intelligence/aiVicky";
import { AIViruses } from "@/components/pages/artificial-intelligence/aiViruses";
import { PredictiveVaccine } from "@/components/pages/artificial-intelligence/predictiveVaccine";


export default function ProjectMetaversePage() {

  useEffect(() => {
    document.body.classList.add('bg-metaverse');

    return () => {
      document.body.classList.remove('bg-metaverse');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-28 space-y-16">
      <ElementVisibilityChecker ComponentToShow={AILandingSection} props={{}} />

      <section className="container mx-auto space-y-16 px-4 lg:px-8">
        <ElementVisibilityChecker ComponentToShow={AIVicky} props={{}} />
        <ElementVisibilityChecker ComponentToShow={AIViruses} props={{}} />
        <ElementVisibilityChecker ComponentToShow={PredictiveVaccine} props={{}} />
      </section>
    </main>
  );
}

'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { MetaverseDescriptionSection } from "@/components/pages/project/metaverse/metaverseDescription";
import { MetaverseLandingSection } from "@/components/pages/project/metaverse/metaverseHeroSection";
import { useEffect } from "react";


export default function ProjectMetaversePage() {

  useEffect(() => {
    document.body.classList.add('bg-metaverse');

    return () => {
      document.body.classList.remove('bg-metaverse');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between space-y-16">
      <ElementVisibilityChecker ComponentToShow={MetaverseLandingSection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={MetaverseDescriptionSection} props={{}} />
    </main>
  );
}

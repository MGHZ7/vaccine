'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { BlockchainTechnologySection } from "@/components/pages/project/blockchainTechnologySection";
import { useEffect } from "react";


export default function ProjectMetaversePage() {

  useEffect(() => {
    document.body.classList.add('bg-project');

    return () => {
      document.body.classList.remove('bg-project');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-24 py-28 space-y-24">
      <ElementVisibilityChecker ComponentToShow={BlockchainTechnologySection} props={{}} />
    </main>
  );
}

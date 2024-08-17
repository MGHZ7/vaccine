'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { MobileAppSection } from "@/components/pages/project/applications/mobileAppSection";
import { SupplyChainSection } from "@/components/pages/project/applications/supplyChainSection";
import { WebPlatformSection } from "@/components/pages/project/applications/webPlatformSection";
import { useEffect } from "react";


export default function ProjectPage() {

  useEffect(() => {
    document.body.classList.add('bg-project');

    return () => {
      document.body.classList.remove('bg-project');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-24 py-28 space-y-24">
      <ElementVisibilityChecker ComponentToShow={WebPlatformSection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={MobileAppSection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={SupplyChainSection} props={{}} />
    </main>
  );
}

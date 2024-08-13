'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { BlockchainSpecificationsSection } from "@/components/pages/project/blockchainSpecificationsSection";
import { BlockchainTechnologySection } from "@/components/pages/project/blockchainTechnologySection";
import { BlockChainTrustBetweenPartiesSection } from "@/components/pages/project/blockChainTrustBetweenPartiesSection";
import { PrivacyAndSecuritySection } from "@/components/pages/project/privacyAndSecuritySection";
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
      <ElementVisibilityChecker ComponentToShow={BlockchainTechnologySection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={PrivacyAndSecuritySection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={BlockChainTrustBetweenPartiesSection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={BlockchainSpecificationsSection} props={{}} className="w-full" />
    </main>
  );
}

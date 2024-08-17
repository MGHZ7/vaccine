'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { InsuranceCardsSection } from "@/components/pages/project/pricing/insuranceCards/insuranceCards";
import { PricingPlansSection } from "@/components/pages/project/pricing/pricingPlansSection";
import { VacTokenUtility } from "@/components/pages/project/pricing/vacTokenSection";
import { useEffect } from "react";


export default function ProjectPricingPage() {

  useEffect(() => {
    document.body.classList.add('bg-tokenomics');

    return () => {
      document.body.classList.remove('bg-tokenomics');
    }
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-24 py-28 space-y-24">
      <ElementVisibilityChecker ComponentToShow={VacTokenUtility} props={{}} />
      <ElementVisibilityChecker ComponentToShow={PricingPlansSection} props={{}} />
      <ElementVisibilityChecker ComponentToShow={InsuranceCardsSection} props={{}} />
    </main>
  );
}

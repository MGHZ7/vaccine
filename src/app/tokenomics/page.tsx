'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { JoinComunity } from "@/components/common/socialMedia/joinCommunity";
import { TokenDistributionSection } from "@/components/pages/tokenomics/tokenDistributionSection";
import { TokenomicsSection } from "@/components/pages/tokenomics/tokenomicsSection";
import { TokenomicsStatisticsSections } from "@/components/pages/tokenomics/tokenomicsStatisticsSections";
import { TokenomicsVideo } from "@/components/pages/tokenomics/tokenomicsVideo";
import { useEffect } from "react";

export default function TokenomicsPage() {

    useEffect(() => {
        document.body.classList.add('bg-project');

        return () => {
            document.body.classList.remove('bg-project');
        }
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-4 md:px-24 py-28 space-y-24">
            <ElementVisibilityChecker ComponentToShow={TokenomicsSection} props={{}} />
            <ElementVisibilityChecker ComponentToShow={TokenomicsVideo} props={{}} />
            <ElementVisibilityChecker ComponentToShow={TokenDistributionSection} props={{}} className="w-full overflow-hidden" />
            <ElementVisibilityChecker ComponentToShow={TokenomicsStatisticsSections} props={{}} className="w-full" />
            <ElementVisibilityChecker ComponentToShow={JoinComunity} props={{}} className="w-full" />
        </main>
    );
}
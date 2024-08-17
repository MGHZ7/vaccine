import { PlatinumCardSection } from "./platinumCard";
import { SilverCardSection } from "./silverCardSection";

import platinum from "../assets/cards/platinum-card.png";
import gold from "../assets/cards/golden-card.png";
import silver from "../assets/cards/silver-card.png";
import bronze from "../assets/cards/bronze-card.png";
import Image from "next/image";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

export function InsuranceCardsSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <PlatinumCardSection />
        <SilverCardSection />

        <section className="grid sm:grid-cols-2 lg:grid-cols-4">
            <Image alt="Vac Platinum Card" {...platinum} />
            <Image alt="Vac Gold Card" {...gold} />
            <Image alt="Vac Silver Card" {...silver} />
            <Image alt="Vac Bronze Card" {...bronze} />
        </section>

        <article className="max-w-md space-y-4">
            <Paragraph>This plan may suit your needs...... <span className="text-primary">Coming Soon</span></Paragraph>
            <Paragraph>Here’s a rundown of ve reasons why it’s important to seek on purchasing our VAC medical insurance plan, VAC insurance card will provide you with:
            </Paragraph>

            <ul className="text-xs text-primary">
                <li>- Worldwide coverage</li>
                <li> - Lowest medical insurance cost</li>
                <li> - Highest medical coverage</li>
                <li> - Discount from our partners</li>
                <li> - Support 24/7 </li>
                <li> and much more......</li>
            </ul>
        </article>
    </section>
}
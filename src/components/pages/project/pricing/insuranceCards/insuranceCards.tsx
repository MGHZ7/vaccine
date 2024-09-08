'use client';

import { PlatinumCardSection } from "./platinumCard";
import { SelectedCardSection } from "./silverCardSection";

import platinum from "../../assets/cards/platinum-card.png";
import gold from "../../assets/cards/golden-card.png";
import silver from "../../assets/cards/silver-card.png";
import bronze from "../../assets/cards/bronze-card.png";
import Image from "next/image";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { useState } from "react";

export function InsuranceCardsSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    const [selectedCard, setSelectedCard] = useState(cards[0]);



    return <section className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <PlatinumCardSection />
        <SelectedCardSection {...selectedCard} />

        <section className="grid sm:grid-cols-2 lg:grid-cols-4">
            {cards.map((card, i) =>
                <Image key={i} onMouseEnter={() => setSelectedCard(cards[i])} alt={card.title} {...card.image} />)}
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

const cards = [{
    title: 'Platinum Card',
    description: 'Unfortunate incidences don’t come planned, and costs can quickly rise up due to various tests involved, leading to Financial stress. Having a medical card will provide one less thing to worry about, ensuring that one is able to focus on recovery.Having insurance plan associated with your medical health will provide you with the ultimate benets that provides the convenience of seamlessly checking into healthcare facilities when seeking for medical and hospitalisation treatments.',
    image: platinum
},
{
    title: 'Gold Card',
    description: 'Unfortunate incidences don’t come planned, and costs can quickly rise up due to various tests involved, leading to Financial stress. Having a medical card will provide one less thing to worry about, ensuring that one is able to focus on recovery.Having insurance plan associated with your medical health will provide you with the ultimate benets that provides the convenience of seamlessly checking into healthcare facilities when seeking for medical and hospitalisation treatments.',
    image: gold
},
{
    title: 'Silver Card',
    description: 'Unfortunate incidences don’t come planned, and costs can quickly rise up due to various tests involved, leading to Financial stress. Having a medical card will provide one less thing to worry about, ensuring that one is able to focus on recovery.Having insurance plan associated with your medical health will provide you with the ultimate benets that provides the convenience of seamlessly checking into healthcare facilities when seeking for medical and hospitalisation treatments.',
    image: silver
},
{
    title: 'Bronze Card',
    description: 'Unfortunate incidences don’t come planned, and costs can quickly rise up due to various tests involved, leading to Financial stress. Having a medical card will provide one less thing to worry about, ensuring that one is able to focus on recovery.Having insurance plan associated with your medical health will provide you with the ultimate benets that provides the convenience of seamlessly checking into healthcare facilities when seeking for medical and hospitalisation treatments.',
    image: bronze
}]
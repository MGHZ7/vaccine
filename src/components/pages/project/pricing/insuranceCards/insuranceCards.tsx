import { PlatinumCardSection } from "./platinumCard";
import { SilverCardSection } from "./silverCardSection";

import platinum from "../assets/cards/platinum-card.png";
import gold from "../assets/cards/golden-card.png";
import silver from "../assets/cards/silver-card.png";
import bronze from "../assets/cards/bronze-card.png";
import Image from "next/image";

export function InsuranceCardsSection() {

    return <section className="space-y-8">
        <PlatinumCardSection />
        <SilverCardSection />

        <section className="grid sm:grid-cols-2 lg:grid-cols-4">
            <Image alt="Vac Platinum Card" {...platinum} />
            <Image alt="Vac Gold Card" {...gold} />
            <Image alt="Vac Silver Card" {...silver} />
            <Image alt="Vac Bronze Card" {...bronze} />
        </section>
    </section>
}
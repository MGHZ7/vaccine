import { Paragraph } from "@/components/layout/typography/paragraph";

import cardImage from "../assets/cards/silver-card.png";
import Image from "next/image";

export function SilverCardSection() {
    return <section className="grid lg:grid-cols-2 items-center gap-4 overflow-clip">
        <div className="overflow-visible">
            <Image alt="Vac Silver Card" {...cardImage} />
        </div>

        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Insurance card</h2>
            <Paragraph>
                Unfortunate incidences don’t come planned, and costs can quickly rise up due to various tests involved, leading to Financial stress. Having a medical card will provide one less thing to worry about, ensuring that one is able to focus on recovery.Having insurance plan associated with your medical health will provide you with the ultimate benets that provides the convenience of seamlessly checking into healthcare facilities when seeking for medical and hospitalisation treatments.
            </Paragraph>
        </div>
    </section>
}
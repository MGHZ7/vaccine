import { Paragraph } from "@/components/layout/typography/paragraph";

import cardImage from "../../assets/cards/platinum-card.png";
import background from "../assets/background.svg";
import Image from "next/image";

export function MedicalCardBenifits() {
    return <section className="relative grid lg:grid-cols-2 items-center gap-4  z-10 py-10 px-12">
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10 hidden lg:block">
            <Image alt="background" {...background} />
        </div>
        <div className="space-y-4">
            <h2 className="text-3xl font-bold">Medical card Benefits</h2>
            <Paragraph className="text-gray-400">
                With so many uncertainties looming, the need for certain assurances is on the rise. Considering health card provides much needed peace of mind, knowing that should any unforeseen health incidences occur, VAC Medical card will be your health identity, Here we’ve put together several good reasons of why having a medical card is important.
            </Paragraph>

            <ul className="text-xs text-primary">
                <li> - Historical records available</li>
                <li> - Tracking of your health situation</li>
                <li> - Data is accessible 24 a day, 7 days a week</li>
                <li>- Encrypted Information</li>
            </ul>
        </div>
        <div className="overflow-visible">
            <Image className="lg:scale-150 lg:translate-x-1/3" alt="Vac Platinum Card" {...cardImage} />
        </div>
    </section>
}
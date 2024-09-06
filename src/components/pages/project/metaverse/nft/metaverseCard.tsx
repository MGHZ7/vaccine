import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

import card from "../../assets/cards/platinum-card.png";
import Image from "next/image";

export function MetaverseCardSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className={`p-8`}>
            <h2 className="text-3xl text-on-primary font-bold">VAC NFT</h2>
            <p className="text-xs text-primary">Unlocking Health&apos;s Future: Your Medical Journey, Now NFT-Enabled</p>
            <Paragraph className="mt-8 lg:max-h-56 overflow-auto scroll-indicator-hide">
                Introducing VAC NFTs: A groundbreaking convergence of healthcare and cutting-edge blockchain technology.
                Each Medical NFT represents a unique digital asset, securely storing essential medical records, treatment plans, and diagnostic images on the blockchain.
                With unparalleled security and accessibility, Medical NFTs empower patients to take control of their health data, seamlessly sharing it with healthcare providers anywhere in the world. From ensuring continuity of care during travel to enabling swift and accurate medical interventions in emergencies, Medical NFTs revolutionize the way we manage and exchange health information. Join the future of healthcare with Medical NFTs — where innovation meets wellness, securely stored on the blockchain.
            </Paragraph>
        </article>
        <article>
            <div className={`max-w-lg mx-auto mix-blend-multiply`}>
                <Image className="lg:scale-110" alt="Vaccine overview" {...card} />
            </div>
        </article>
    </div>
}
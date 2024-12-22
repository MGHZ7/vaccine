import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

import virus from "./assets/virus.png";
import Image from "next/image";

export function MetaverseVirusSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="order-2 lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Virus" {...virus} />
            </div>
        </article>
        <article className="order-1 lg:order-none">
            <p className="text-xs text-primary">Preserving Health@apos;s Journey: A Digital Gallery of Medical Milestones</p>
            <Paragraph className="mt-8 max-h-56 overflow-auto scroll-indicator-hide">
                Introducing VAC Medical Viruses NFTs: A digital collection immortalizing the intricate beauty and scientific significance of viruses. Each NFT captures the essence of a specific virus, from the common cold to the most notorious pathogens, in stunning detail. With meticulous accuracy and artistic flair, these NFTs serve as educational tools, allowing enthusiasts and researchers alike to explore the molecular structure, transmission pathways, and impact on human health of each virus. Dive into the captivating world of Medical Viruses NFTs and uncover the secrets of these microscopic marvels, transforming scientific understanding into captivating digital art.
            </Paragraph>
        </article>
    </div>
}
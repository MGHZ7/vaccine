import Image from "next/image";

import image from "./assets/blockchain-trust-between-parties.svg";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Heading } from "@/components/layout/header/heading";

export function BlockChainTrustBetweenPartiesSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-items-center items-center md:px-28
        ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <Image className="w-56 animate-moving-around" alt="Blockchain trust between parties" {...image} />

        <article className="text-center lg:text-start">
            <Heading headingType="h3">Blockchain establishes trust between parties</Heading>
        </article>
    </section>
}
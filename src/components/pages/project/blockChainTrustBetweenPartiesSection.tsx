import Image from "next/image";

import image from "./assets/blockchain-trust-between-parties.svg";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

export function BlockChainTrustBetweenPartiesSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-items-center items-center px-28
        ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <Image className="w-56 animate-moving-around" alt="Blockchain trust between parties" {...image} />

        <article className="text-center lg:text-start">
            <h3 className="text-2xl font-bold">Blockchain establishes trust between parties </h3>
        </article>
    </section>
}
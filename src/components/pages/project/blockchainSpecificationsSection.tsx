import Image from "next/image";

import decentralizedStructure from "./assets/decentralized-structure.svg";
import transactionSpeed from "./assets/transaction-speed.svg";
import reliability from "./assets/reliability.svg";
import costSaving from "./assets/cost-saving.svg";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Heading } from "@/components/layout/header/heading";

export function BlockchainSpecificationsSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid md:grid-cols-2 gap-16 lg:justify-between items-stretch w-full  
        ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="flex flex-col justify-between items-center
            cursor-pointer transition hover:!scale-110 hover:!skew-x-1">
            <Image className="w-56 animate-moving-around" alt="Decentralized structure" {...decentralizedStructure} />

            <div className="mt-4">
                <Heading headingType="h3">Decentralized structure</Heading>
            </div>
        </article>

        <article className="flex flex-col justify-between items-center
            cursor-pointer transition hover:!scale-110 hover:!skew-x-1">
            <Image className="w-56 animate-moving-around" alt="Transaction speed" {...transactionSpeed} />

            <div className="mt-4">
                <Heading headingType="h3">Transaction speed</Heading>
            </div>
        </article>

        <article className="flex flex-col justify-between items-center
            cursor-pointer transition hover:!scale-110 hover:!skew-x-1">
            <Image className="w-56 animate-moving-around" alt="Reliability" {...reliability} />

            <div className="mt-4">
                <Heading headingType="h3">Reliability</Heading>
            </div>
        </article>

        <article className="flex flex-col justify-between items-center 
            cursor-pointer transition hover:!scale-110 hover:!skew-x-1">
            <Image className="w-56 animate-moving-around" alt="Cost savings " {...costSaving} />

            <div className="mt-4">
                <Heading headingType="h3">Cost savings</Heading>
            </div>
        </article>
    </section>
}
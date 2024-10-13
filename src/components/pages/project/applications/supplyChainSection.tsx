'use client';

import Image from "next/image";
import image from "../assets/supply-chain.png";

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function SupplyChainSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid gap-8 justify-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="">
                <Image alt="Vaccine Supply Chain" {...image} />
            </div>
        </article>
        <article className="md:p-8 max-w-xl space-y-2">
            <h2 className="text-3xl text-on-primary font-bold">VAC Supply Chain </h2>
            <p className="text-xs text-primary">Streamlining Supply Chains, Powering Progress</p>
            <Divider type="ltr" />
            <Paragraph className="!mt-8">
                In the dynamic landscape of modern healthcare, the integration of blockchain technology into supply chains heralds a new era of efficiency, transparency, and security. By leveraging blockchain&apos;s immutable ledger system, medical supply chains are revolutionized, ensuring seamless tracking and authentication of pharmaceuticals, medical devices, and critical supplies. Every transaction, from production to distribution, is recorded in real-time, providing stakeholders with unprecedented visibility into the movement of goods. With enhanced traceability and accountability, healthcare providers can mitigate the risk of counterfeit products, reduce supply chain disruptions, and ultimately ensure the timely delivery of lifesaving treatments to patients worldwide. Embracing blockchain technology in medical supply chains isn&apos;t just a step forward it&apos;s a leap towards a safer, more resilient healthcare ecosystem for all.
            </Paragraph>
        </article>
    </section>
}
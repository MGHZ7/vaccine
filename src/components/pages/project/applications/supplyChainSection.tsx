'use client';

import Image from "next/image";

import image from "../assets/supply-chain.png";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function SupplyChainSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid justify-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="">
                <Image alt="Vaccine Supply Chain" {...image} />
            </div>
        </article>
        <article className="p-8 max-w-md space-y-2">
            <h2 className="text-3xl text-on-primary font-bold">VAC Supply Chain </h2>
            <p className="text-xs text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <Divider type="ltr" />
            <Paragraph className="!mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ocia deserunt mollit anim id est laborum.
            </Paragraph>
        </article>
    </section>
}
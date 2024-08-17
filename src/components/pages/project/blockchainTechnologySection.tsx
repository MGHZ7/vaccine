'use client';

import Image from "next/image";

import image from "../../../app/project/assets/public-cube.png";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function BlockchainTechnologySection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
        <article className="p-8">
            <p className="text-xs text-primary">VAC Blockchain</p>
            <h2 className="text-3xl text-on-primary font-bold">VAC Blockchain Technology</h2>
            <Paragraph className="mt-8">
                The VAC blockchain is a network with a hybrid Architecture that incorporates the benefits of both private and public blockchains. It alternates between a private and a public state.
            </Paragraph>
            <Paragraph className="mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
        </article>
    </section>
}
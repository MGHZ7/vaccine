'use client';

import Image from "next/image";
import globeImage from "../../../app/assets/pages/home/globe.png";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function HomeHeroSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section id="home-hero-section" className={`relative opacity-0 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="grid lg:grid-cols-2">
            <div className="max-w-lg lg:leading-10">
                <p className={"text-primary text-sm font-light md:wide-letter-spacing"}>Always Caring . Always Here</p>
                <h1 className="md:text-6xl font-bold text-balance text-on-primary main-header md:mb-4 md:mt-2">Vaccine is a
                    Decentralized Medical Ecosystem</h1>
                <Paragraph className="max-w-72">
                    VAC is the revolution in the medical industry and will lead the digital transformation
                </Paragraph>

                <div className="mt-10">
                    <VaccineButtonLink size="md" buttonType="light" href={'/vaccine cmnts web.pdf'} target="_blank">
                        Whitepaper
                    </VaccineButtonLink>
                </div>
            </div>
        </article>

        <div className="absolute hidden lg:block lg:-top-[30%] lg:-right-[10%] w-[70%] aspect-square">
            <Image className="mix-blend-lighten" alt={'Vaccine globe'} src={globeImage.src} fill />
        </div>
    </section>
}
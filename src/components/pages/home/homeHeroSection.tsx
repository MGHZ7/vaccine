'use client';

import { VaccineButtonLink } from "@/components/common/link/vaccineButtonLink";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { VideoPlayer } from "@/components/common/videoPlayer/videoPlayer";

import Image from "next/image";
import logo from "../../../app/logo.png";

export function HomeHeroSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section id="home-hero-section" className={`relative opacity-0 aspect-video 
    grid md:grid-cols-2 lg:grid-cols-1 justify-center
    ${isVisible ? 'animate-fade-in' : 'animate-fade-out'} mt-12 lg:mt-0`}>
        <div className="hidden lg:block mb-16 lg:mb-0 lg:absolute top-0 right-0 bottom-0 left-0 -z-10">
            <VideoPlayer url={'/home/earth_entro.webm'} playing muted width={'100%'} height={'100%'} />
        </div>

        <article className="order-1 md:order-0 px-8 md:px-0 lg:px-24 grid lg:grid-cols-2 place-content-center items-center">
            <div className="max-w-sm xl:max-w-md lg:leading-10">
                <p className={"text-primary text-sm font-light md:wide-letter-spacing"}>Always Caring . Always Here</p>
                <h1 className="md:text-5xl font-bold text-balance text-on-primary main-header md:mb-4 md:mt-2">Vaccine is a
                    Decentralized Medical Ecosystem</h1>
                <Paragraph className="max-w-72">
                    VAC is the revolution in the medical industry and will lead the digital transformation
                </Paragraph>

                <div className="mt-10">
                    <VaccineButtonLink size="md" styleType="light" href={'/vaccine cmnts web.pdf'} target="_blank">
                        Whitepaper
                    </VaccineButtonLink>
                </div>
            </div>
        </article>

        <div className="order-0 md:order-1 lg:hidden animate-glow pointer-events-none">
            <Image alt="VAC Logo" {...logo} />
        </div>
    </section>
}
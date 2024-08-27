'use client';

import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { VideoPlayer } from "@/components/common/videoPlayer/videoPlayer";

export function HomeHeroSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section id="home-hero-section" className={`relative opacity-0 aspect-video 
    flex flex-col justify-center
    ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <div className="absolute top-0 right-0 bottom-0 left-0 -z-10">
            <VideoPlayer url={'/home/earth_entro.webm'} playing muted width={'100%'} height={'100%'} />
        </div>

        <article className="px-8 md:px-24 grid lg:grid-cols-2 place-content-center items-center">
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
    </section>
}
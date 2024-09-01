'use client';

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { Divider } from "@/components/layout/divider/divider";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { AdvisorsSlider } from "@/components/team/advisor/slider/advisorsSlider";
import { useState } from "react";

export function OurAdvisorSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    const [advisorIndex, setAdvisorIndex] = useState(0);
    const [advisorBanner, setAdvisorBanner] = useState<number>();
    console.log("🚀 ~ OurAdvisorSection ~ advisorBanner:", advisorBanner);


    const handleAdvisorLeave = (index: number) => {
        console.log("🚀 ~ handleAdvisorLeave ~ index:", index);

        setAdvisorBanner(prev => {
            return prev === index ? undefined : prev;
        })
    }

    return <section className={`w-full space-y-16 p-4 md:p-8 pb-16 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="max-w-lg space-y-4 self-start">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl text-on-primary font-bold">Our Advisors</h2>
                <Divider className="hidden md:block flex-1 max-w-lg" />
            </div>
            <p className="text-xs text-on-primary font-extralight">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
        </article>

        <section className="relative">
            <AdvisorsSlider
                advisors={advisors}
                onActiveCardChange={setAdvisorIndex}
                onAdvisorHover={setAdvisorBanner}
                onAdvisorLeave={handleAdvisorLeave} />

            <div className="text-center max-w-lg mx-auto mt-2">
                <h4 className={`text-lg text-primary font-bold`}>{advisors[advisorIndex].name}</h4>
                <p className="text-xs font-extralight text-on-primary">{advisors[advisorIndex].description}</p>
            </div>

            {(advisorBanner ?? -1) >= 0 ? <TransparentCard
                className="!absolute bottom-14 animate-fade-in w-full max-w-md left-1/2 -translate-x-1/2 p-2 bg-opacity-90 z-20">
                <Paragraph>
                    {advisors[advisorBanner!].description}
                </Paragraph>
            </TransparentCard> : null}
        </section>
    </section>
}

const advisors = [{
    name: 'Jason Andrio 1',
    description: `"An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage"`,
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio 2',
    description: `"An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage"`,
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio 3',
    description: `"An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage"`,
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio 4',
    description: `"An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage"`,
    imageSrc: '/home/advisor/advisor.png'
},
{
    name: 'Jason Andrio 5',
    description: `"An organization's ability to learn, and translate that learning into action rapidly, is the ultimate competitive advantage"`,
    imageSrc: '/home/advisor/advisor.png'
}]
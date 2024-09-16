'use client';

import Image from "next/image";

import image from "./assets/virusMutation.png";

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function VirusMutation({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        id="about-the-project"
        className={`${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="">
            <div className="max-w-xl mb-4">
                <h2 className="text-3xl text-on-primary font-bold mb-2">Predict The Next Virus Mutation</h2>
                <Divider type="ltr" />
            </div>
            <div className="mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
        <article className="">
            <Paragraph className="mt-8 overflow-auto scroll-indicator-hide">
                <span className="text-primary">VAC</span> with the help of unprecedented amounts of data containing million virus sequences to find patterns among the mutations that help a new viral strain spread throughout the world. From these data, it learned how to identify the combinations of mutations and amount of time required for variants for different viruses as in COVID such as Delta or Omicron to become predominant. This model could give public health programs advance notice about which lineages are potentially dangerous and allow officials to plan ahead.
            </Paragraph>
        </article>
    </section>
}
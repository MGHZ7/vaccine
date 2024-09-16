'use client';

import Image from "next/image";

import lab1 from "./assets/viruses/lab1.png";
import lab2 from "./assets/viruses/lab2.png";
import viruses from "./assets/viruses/viruses.png";

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function AIViruses({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        id="about-the-project"
        className={`${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="">
            <div className="max-w-xl mb-8">
                <h2 className="text-3xl text-on-primary font-bold mb-2">VAC Artificial Intelligence for Viruses</h2>
                <Divider type="ltr" />
            </div>
            <div className="grid lg:grid-cols-3 gap-8">
                <div className="mx-auto space-y-8 col-span-2">
                    <Image alt="Vaccine overview" {...lab1} />
                    <Image alt="Vaccine overview" {...lab2} />
                </div>
                <div>
                    <Image alt="Vaccine overview" {...viruses} />
                </div>
            </div>
        </article>
        <article className="">
            <Paragraph className="mt-8 overflow-auto scroll-indicator-hide">
                <span className="text-primary">VAC</span> AI is dedicated to fighting viruses using cutting-edge technologies in AI to find new solutions to new vaccines that were not fixable in the past.
                <br />
                <br />
                Firstly, proteins of the SARS-CoV-2 virus were profiled, this is the virus which triggers COVID-19. Once the protein data had been collected, it was compared with data collected to generate the antibodies to recognize common properties.
                <br />
                <br />
                Artificial intelligence (AI) is becoming an increasingly useful tool in this process. Once this data has been collected on a large scale, scientists are able to predict which viral proteins will trigger an immune response. This process would have taken far longer without the use of this technology and many of the insights gathered could not have been spotted by the human eye. This technology allowed researchers to pass accurate insights and predictions to vaccine developers dynamically and quickly, allowing pharmaceutical companies to expedite the development of their vaccines without compromising on quality and safety.
            </Paragraph>

        </article>
    </section>
}
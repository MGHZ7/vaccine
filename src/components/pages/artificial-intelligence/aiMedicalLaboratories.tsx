'use client';

import Image from "next/image";

import image from "./assets/laboratory.png"

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function AIMedicalLaboratories({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        id="about-the-project"
        className={`space-y-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <div className="max-w-lg">
            <h2 className="text-3xl text-on-primary font-bold mb-4">VAC AI Medical Laboratories</h2>
            <Divider type="ltr" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 justify-center items-center">
            <article>
                <div className="max-w-lg mx-auto">
                    <Image alt="Vaccine overview" {...image} />
                </div>
            </article>

            <article className="">
                <Paragraph className="lg:max-h-[500px] overflow-auto scroll-indicator-hide">
                    Medical laboratories have a great opportunity to benefit from VACLAB artificial intelligence techniques, emerging techniques, and significant medical and technical development. Hospitals will have the privilege to adopt fully automated medical laboratories to analyze various medical cases. One of the benefits of artificial intelligence in this field is its ability to integrate a lot of data, analyze them, and detect accurate patterns, which contributes to alerting doctors about the physiological changes in the patient’s body and dealing with them.
                </Paragraph>
            </article>
        </div>
    </section>
}
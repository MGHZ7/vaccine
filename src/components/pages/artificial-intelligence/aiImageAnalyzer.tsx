'use client';

import Image from "next/image";

import image from "./assets/imageAnalyzer.png"

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function AIImageAnalyzer({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        id="about-the-project"
        className={`${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <div className="max-w-lg mb-4">
            <h2 className="text-3xl text-on-primary font-bold mb-4">VAC AI Images Analyzer</h2>
            <Divider type="ltr" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 justify-center items-center ">
            <article className="p-8">
                <Paragraph className="lg:max-h-[500px] overflow-auto scroll-indicator-hide">
                    Today, the most common applications of machine learning in healthcare settings are clinical decision support and image analysis. VAC will build tools and algorithms to help practitioners design treatments based on outcomes. It is also used in medical imaging for the analysis of CT scans, X-rays, MRIs and other images for lesions or other human radiological findings.
                </Paragraph>
            </article>
            <article>
                <div className="max-w-lg mx-auto">
                    <Image alt="Vaccine overview" {...image} />
                </div>
            </article>
        </div>
    </section>
}
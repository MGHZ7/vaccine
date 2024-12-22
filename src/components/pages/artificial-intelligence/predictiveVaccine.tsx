'use client';

import Image from "next/image";

import image from "./assets/vaccine.png"

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function PredictiveVaccine({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        id="about-the-project"
        className={`${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <div className="max-w-lg mb-4">
            <h2 className="text-3xl text-on-primary font-bold mb-4">Predictive Vaccines</h2>
            <Divider type="ltr" />
        </div>
        <div className="grid lg:grid-cols-2 gap-8 justify-center items-center ">
            <article>
                <div className="max-w-lg mx-auto">
                    <Image alt="Vaccine overview" {...image} />
                </div>
            </article>
            <article className="">
                <Paragraph className="max-h-[500px] overflow-auto scroll-indicator-hide">
                    With VAC the Vaccine development is a data-intensive process as one needs to understand the virus itself and how the immune system will react to it. Using the advance in Machine learning and Artificial Intelligence algorithms which can analyze large datasets to identify which targets of a virus are most likely to provoke an immune response. After obtaining a list of targets, scientists design matching vaccines.
                    <br />
                    <br />
                    The design and generation of new types vaccine will open new frontiers and new era of customize vaccines for each group of population sharing in common most of he biological characteristics avoiding cross-reactions and undesirable side effects.
                    <br />
                    <br />
                    VAC Machine learning algorithms can identify antigens from protein sequences and determine the most viable vaccine target. VAC is based on AI methods to develop a vaccine for new diseases.
                </Paragraph>
            </article>
        </div>
    </section>
}
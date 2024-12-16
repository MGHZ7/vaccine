'use client';

import Image from "next/image";

import image from "../assets/mobile-apps.png";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function MobileAppSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="md:p-8">
            <h2 className="text-3xl text-on-primary font-bold">VAC Mobile Apps</h2>
            <p className="text-xs text-primary">VAC mobile app delivers seamless doctor-patient interactions and personalized medical solutions through AI, VR, and blockchain integration.</p>
            <Paragraph className="mt-8 max-h-60 overflow-auto">
                VAC mobile solution revolutionizes healthcare accessibility for both patients and doctors alike. Through our intuitive app, patients can seamlessly schedule appointments, consult with healthcare providers via virtual reality, and securely access their medical records—all at their fingertips. Our advanced AI algorithms empower doctors to generate personalized medical solutions, from vaccine development to image analysis, enabling informed decision-making and superior patient care. With our mobile solution, healthcare becomes more convenient, efficient, and tailored to individual needs, enhancing the overall patient experience and outcomes.
            </Paragraph>
        </article>
        <article className="mt-8 md:mt-0">
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine Mobile App" {...image} />
            </div>
        </article>
    </section>
}
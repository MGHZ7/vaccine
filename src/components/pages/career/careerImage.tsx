'use client';

import image from "./assets/apply-now.png"
import Image from "next/image";

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

export function CareerImageSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section
        className={`grid lg:grid-cols-8 gap-8 justify-center items-end ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <h2 className="text-3xl text-on-primary font-bold col-span-2 text-end">Career</h2>
        <Image className="col-span-5" alt="Apply now" {...image} />
    </section>
}
'use client'

import { Badge } from "@/components/layout/badg/badge";
import { Divider } from "@/components/layout/divider/divider";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

import Image from "next/image";
import roadmapImage from "./assets/roadmap/roadmap.svg";
import mobileRoadmapImage from "./assets/roadmap/roadmap-mobile.png";

export function RoadMapSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    const quarters = ['Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q3 2022', 'Q3 2022', 'Q4 2022']

    return <section
        id="road-map"
        className={`w-full space-y-16 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="max-w-lg space-y-4 self-start p-8">
            <div className="flex items-center gap-4">
                <h2 className="text-3xl text-on-primary font-bold">Roadmap</h2>
                <Divider className="flex-1 max-w-lg" />
            </div>
        </article>

        <article className="flex items-center flex-wrap justify-center gap-8 w-full">
            {quarters.map((quarter) => <Badge key={quarter} className="whitespace-nowrap">{quarter}</Badge>)}
        </article>

        <article className="">
            <Image className="hidden md:block" alt="Vaccine Roadmap" {...roadmapImage} />
            <Image className="block md:hidden max-w-xs mx-auto" alt="Vaccine Roadmap" {...mobileRoadmapImage} />
        </article>
    </ section>
}
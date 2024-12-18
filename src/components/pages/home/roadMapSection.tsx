'use client'

import { Badge } from "@/components/common/badg/badge";
import { Divider } from "@/components/layout/divider/divider";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

import Image from "next/image";
import mobileRoadmapImage from "./assets/roadmap/roadmap-mobile.png";
import { RoadMap } from "./roadmap/roadmap";
import { useRef } from "react";
import { RoadMapRef } from "./roadmap/roadmapSvg";
import { Heading } from "@/components/layout/header/heading";

export function RoadMapSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    const roadMapRef = useRef<RoadMapRef>(null);
    const quarters = ['Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q3 2022', 'Q3 2022', 'Q4 2022']

    return <section
        id="road-map"
        className={`w-full space-y-16 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="max-w-lg space-y-4 self-start p-8">
            <Heading showDivider>Roadmap</Heading>
        </article>

        <article className="flex items-center flex-wrap justify-center gap-8 w-full">
            {quarters.map((quarter) => <Badge
                key={quarter}
                className="whitespace-nowrap cursor-pointer"
                onClick={() => roadMapRef.current?.moveToPointOfName(quarter)}>{quarter}</Badge>)}
        </article>

        <article className="">
            <RoadMap ref={roadMapRef} className="hidden md:block" />
            <Image className="block md:hidden max-w-xs mx-auto" alt="Vaccine Roadmap" {...mobileRoadmapImage} />
        </article>
    </ section>
}
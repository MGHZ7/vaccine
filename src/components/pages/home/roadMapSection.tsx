import { Badge } from "@/components/layout/badg/badge";
import { Divider } from "@/components/layout/divider/divider";

import Image from "next/image";

import roadmapImage from "./assets/roadmap/roadmap.svg";

export function RoadMapSection() {

    const quarters = ['Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q3 2022', 'Q3 2022', 'Q4 2022']

    return <section className="w-full space-y-16">
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
            <Image alt="Vaccine Roadmap" {...roadmapImage} />
        </article>
    </ section>
}
'use client';

import Image from "next/image";

import image from "../../../app/assets/pages/home/overview.png"
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function OverviewSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <section className={`grid lg:grid-cols-2 gap-8 justify-center items-center ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article>
            <div className="max-w-lg mx-auto">
                <Image alt="Vaccine overview" {...image} />
            </div>
        </article>
        <article className="p-8">
            <p className="text-xs text-primary">About the project</p>
            <h2 className="text-3xl text-on-primary font-bold">Overview</h2>
            <Paragraph className="mt-8">
                In recent decades, advances in technology and medicine have increased the life expectancy and general health of people around the world. However, the aggregate health information on long-run cross-country data is still limited, as the world works to enhance the medical health care of the population. Here is the benets of blockchain technologies that could make it an integral tool and correlated. Blockchain technologies can act as a single reference point to share and distribute the large amount of data that is identified every moment.
            </Paragraph>
            <Paragraph className="mt-4">
                With blockchain, developers, doctors, researchers, health minitries, and health organizations from around the world can collaborate on the path toward an effective authenticity as a ledger of truth in global scale.
            </Paragraph>
        </article>
    </section>
}
import Image from "next/image";
import bg from "./assets/statistics-bg.svg";
import logo from "../../../app/logo.png";

import { Paragraph } from "@/components/layout/typography/paragraph";
import { ReactNode } from "react";
import { DoughnutChart } from "@/components/common/charts/doughnutChart";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

const data = [{
    label: 'Research\n and development',
    value: 25,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    color: 'rgb(0, 92, 163)',
},
{
    label: 'Marketing',
    value: 18,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    color: 'rgb(72, 179, 183)',
},
{
    label: 'Operation',
    value: 10,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    color: 'rgb(164, 216, 230)',
},
{
    label: 'Exchange\n listing',
    value: 47,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ',
    color: 'rgb(49, 180, 220)',
},]

export function TokenomicsStatisticsSections({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section id="fund-allocation" className={`relative ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <div className="absolute hidden md:block bottom-0">
            <Image alt="Background" {...bg} />
        </div>

        <div className="relative z-10 grid lg:grid-cols-2 p-2">
            <article className="pb-8">
                <div className="max-w-sm px-8">
                    <h2 className="text-3xl text-on-primary font-bold">Fund Allocation</h2>
                    <Paragraph>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Paragraph>
                </div>
                <div className="relative mt-8 lg:-me-16 flex justify-center md:h-[600px]">
                    {isVisible && <DoughnutChart className="min-w-0 sm:min-w-full" data={data} />}
                    <div className="absolute top-1/4 right-1/4 bottom-1/4 left-1/4 animate-glow">
                        <Image alt="VAC Logo" src={logo.src} fill />
                    </div>
                </div>
            </article>
            <article className="pb-10 ps-4 lg:ps-20 pe-4 space-y-4 w-full min-w-0">
                {data.sort((a, b) => b.value - a.value).map(data => <BadgedCard key={data.label} color={data.color}><div>
                    <h2 className="text-lg font-light">
                        <span className="me-2" style={{ color: data.color }}>{data.value}%</span>
                        {data.label}
                    </h2>
                    <Paragraph className="text-ellipsis whitespace-nowrap overflow-hidden">{data.description}</Paragraph>
                </div></BadgedCard>)}
            </article>
        </div>
    </section>
}

export interface BadgedCardProps {
    children?: ReactNode
    color?: string;
}

export function BadgedCard({ color = '#fff', children }: BadgedCardProps) {

    return <article className="border rounded-xl px-4 py-1 w-full" style={{ borderLeftColor: color, borderLeftWidth: 10 }}>
        {children}
    </article>
}
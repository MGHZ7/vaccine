'use client';

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Counter } from "@/components/counter/counter";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { VaccineButtonLink } from "@/components/common/link/vaccineButtonLink";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { DateTime } from "luxon";

export function PrivateSaleCounter({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <div
        id="private-sale"
        className={`relative ${isVisible ? 'animate-fade-in' : 'animate-fade-out'} mt-8`}>
        <TransparentCard className="hidden md:block !absolute -top-12 -right-5 h-28 w-20 animate-moving-around " />
        <TransparentCard className="hidden md:block !absolute -bottom-12 -left-5 h-40 w-56 -z-20 animate-moving-around" />
        <TransparentCard showLightingPoint className="transition-all relative w-full z-10 hover:scale-105 hover:bg-opacity-40 bg-opacity-30">
            <div className="p-8">
                <h2 className="text-on-primary text-xl font-bold">PRIVATE SALE WILL BE LAUNCHED AFTER:</h2>
                <div className="relative grid md:grid-cols-2 gap-12 py-4 z-10">
                    <div>
                        <p className="text-xs font-extralight">Discount for early investors</p>
                        <Counter className="mt-6" targetedDate={DateTime.fromSQL('2025-12-12')} />
                    </div>
                    <div className="ms-auto max-w-sm flex flex-col justify-between gap-4">
                        <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</Paragraph>

                        <div>
                            <VaccineButtonLink className="!w-full block text-center border border-primary"
                                size="xl" styleType="light" href={'/lightpaper'}>
                                Join Now
                            </VaccineButtonLink>
                        </div>
                    </div>
                </div>
            </div>
        </TransparentCard>
    </div>
}
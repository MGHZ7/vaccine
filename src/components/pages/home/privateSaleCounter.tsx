'use client';

import { Counter } from "@/components/counter/counter";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { DateTime } from "luxon";

export function PrivateSaleCounter() {

    return <div className="relative">
        <TransparentCard className="relative p-8 w-full z-10">
            <TransparentCard className="absolute -top-12 -right-5 h-28 w-20" />
            <h2 className="text-on-primary text-xl font-bold">PRIVATE SALE WILL BE LAUNCHED AFTER:</h2>
            <div className="relative grid grid-cols-2 gap-12 py-4 z-10">
                <div>
                    <p className="text-xs font-extralight">Discount for early investors</p>
                    <Counter className="mt-6" targetedDate={DateTime.fromSQL('2024-12-12')} />
                </div>
                <div className="ms-auto max-w-sm flex flex-col justify-between gap-4">
                    <p className="text-xs font-extralight">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor</p>

                    <div>
                        <VaccineButtonLink className="!w-full block text-center border border-primary" size="xl" buttonType="light" href={'/lightpaper'}>
                            Join Now
                        </VaccineButtonLink>
                    </div>
                </div>
            </div>
        </TransparentCard>
        <TransparentCard className="absolute -bottom-12 -left-5 h-40 w-56 -z-10" />
    </div>
}
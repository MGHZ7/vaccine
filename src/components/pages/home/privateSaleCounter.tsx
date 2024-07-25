'use client';

import { Counter } from "@/components/counter/counter";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { VaccineButtonLink } from "@/components/layout/link/vaccineButtonLink";
import { DateTime } from "luxon";

export function PrivateSaleCounter() {

    return <TransparentCard className="p-8 w-full">
        <h2 className="text-on-primary text-xl font-bold">PRIVATE SALE WILL BE LAUNCHED AFTER:</h2>
        <div className="grid grid-cols-2 gap-12 py-4">
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
}
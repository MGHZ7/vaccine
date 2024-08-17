import { Paragraph } from "@/components/layout/typography/paragraph";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

import Image from "next/image";
import image from "./assets/bills-settlement.png";

export function BillsSettlemnetSection({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`grid grid-cols-1 lg:grid-cols-5 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="space-y-4 lg:col-span-2">
            <h2 className="text-3xl font-bold">Bills Settlement</h2>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ocia deserunt mollit anim id est laborum.
            </Paragraph>
        </article>
        <article className="col-span-3 lg:-ms-36 mt-24">
            <Image alt="Bills Settlement" {...image} />
        </article>
    </section>
}
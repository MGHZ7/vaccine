import { Paragraph } from "@/components/layout/typography/paragraph";
import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";

import Image from "next/image";
import image from "./assets/token.png";

export function VacTokenUtility({ isVisible }: ElementVisibilityCheckerComponentProps) {

    return <section className={`grid lg:grid-cols-2 gap-8 justify-center items-end 
        ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="md:p-8">
            <h2 className="text-3xl text-on-primary font-bold">VAC Token Utiliy</h2>
            <p className="text-xs text-primary">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
            <Paragraph className="mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ocia deserunt mollit anim id est laborum.
            </Paragraph>
        </article>

        <article>
            <div className="max-w-xs mx-auto">
                <Image alt="Vac Coin" {...image} />
            </div>
        </article>
    </section>
}
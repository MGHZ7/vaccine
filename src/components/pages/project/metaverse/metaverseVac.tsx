import image from "./assets/metaVac.png";

import Image from "next/image";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { Divider } from "@/components/layout/divider/divider";

export function MetaverseVac() {

    return <section className="grid lg:grid-cols-2 items-center mx-auto px-12">

        <article>
            <div className="flex items-center gap-2 mb-8">
                <h2 className="text-3xl text-on-primary font-bold whitespace-nowrap">VAC Meta Health </h2>
                <Divider />
            </div>
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ocia deserunt mollit anim id est laborum.
            </Paragraph>
        </article>
        <Image alt="meta Health" {...image} />

    </section>
}
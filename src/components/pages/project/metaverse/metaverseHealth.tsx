import image from "./assets/meta-health.png"

import Image from "next/image";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function MetaverseHealth() {

    return <section className="grid lg:grid-cols-2 justify-center items-center gap-8 mx-auto px-12">
        <Image className="mx-auto" alt="meta Health" {...image} />

        <article>
            <p className="text-xs text-primary">Lorem ipsum dolor</p>
            <h2 className="text-3xl text-on-primary font-bold mb-8">VAC Meta Health </h2>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                <br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
        </article>
    </section>
}
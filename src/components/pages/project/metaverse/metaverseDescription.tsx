import Image from "next/image";

import image from "./assets/3d-woman-with-vr-glasses.jpg";
import { Paragraph } from "@/components/layout/typography/paragraph";

export function MetaverseDescriptionSection() {

    return <section className="relative">
        <Image className="hidden md:block" alt="A woman with VR glasses" {...image} />

        <div className="md:absolute top-16 px-8 md:px-24">
            <h1 className="md:text-6xl font-bold text-balance text-on-primary main-header md:mb-4 md:mt-2">
                VAC Metaverse
            </h1>

            <Paragraph className="max-w-sm mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Paragraph>
            <Paragraph className="max-w-md mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                <br />
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui ocia deserunt mollit anim id est laborum.
            </Paragraph>
        </div>
    </section>
}
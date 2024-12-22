import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

import bacteria from "./assets/bacteria.png";
import Image from "next/image";

export function MetaverseBacteriaSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="lg:-mt-2 order-2 lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Bacteria" {...bacteria} />
            </div>
        </article>
        <article className="self-start order-1 lg:order-none">
            <Paragraph className="mt-8 max-h-56 overflow-auto scroll-indicator-hide">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Paragraph>
        </article>
    </div>
}
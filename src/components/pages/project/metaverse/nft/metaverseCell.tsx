import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { Paragraph } from "@/components/layout/typography/paragraph";

import cell from "./assets/cell.png";
import Image from "next/image";

export function MetaverseCellSection({ isVisible }: ElementVisibilityCheckerComponentProps) {
    return <div className={`grid lg:grid-cols-2 gap-8 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <article className="self-start lg:order-none">
            <Paragraph className="mt-8 max-h-56 overflow-auto scroll-indicator-hide">
                Introducing VAC Medical Human Cell NFTs: A captivating exploration of the intricate wonders of the human body at the cellular level. Each NFT showcases the awe-inspiring complexity and beauty of human cells, from the elegant structure of neurons to the dynamic functionality of immune cells. With unparalleled detail and scientific accuracy, these NFTs offer a unique opportunity to delve into the inner workings of our biological machinery. Whether you&apos;re a student, researcher, or simply fascinated by the mysteries of life, Medical Human Cell NFTs provide a window into the microscopic world that drives our existence. Embark on a journey of discovery and appreciation for the remarkable complexity of the human body with Medical Human Cell NFTs.
            </Paragraph>
        </article>
        <article className="lg:order-none">
            <div className="max-w-lg mx-auto mix-blend-multiply">
                <Image className="lg:scale-110" alt="Cell" {...cell} />
            </div>
        </article>
    </div>
}
import { Paragraph } from "@/components/layout/typography/paragraph";

import cardImage from "../assets/cards/silver-card.png";
import Image, { StaticImageData } from "next/image";
import { useEffect, useLayoutEffect, useRef } from "react";

export interface SelectedCardSectionProps {
    title: string;
    description: string;
    image: StaticImageData
}

export function SelectedCardSection({ title, description, image }: SelectedCardSectionProps) {

    const containerRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        containerRef.current?.classList.remove('animate-fade-in');
        containerRef.current?.classList.add('opacity-0');
        setTimeout(() => {
            containerRef.current?.classList.remove('opacity-0');
            containerRef.current?.classList.add('animate-fade-in');
        }, 300)
    }, [title]);

    return <section
        ref={containerRef}
        className="grid lg:grid-cols-2 items-center gap-4 animate-fade-in">
        <div className="overflow-visible order-1 lg:order-0">
            <Image className="" alt="Vac Silver Card" {...image} />
        </div>

        <div className="space-y-4 order-0 lg:order-1">
            <h2 className="text-3xl font-bold">{title}</h2>
            <Paragraph className="text-gray-400">
                {description}
            </Paragraph>
        </div>
    </section>
}
import featuredSeparator from "./assets/seperator.svg";
import Image from 'next/image';

export interface FeaturedSlideProps {
    imageSrc: string;
    name: string;
}

export function FeaturedSlide({ name, imageSrc }: FeaturedSlideProps) {

    return <article className="min-w-[300px] inline-flex justify-center items-center w-full">
        <Image className="md:me-auto" alt={name} src={imageSrc} width={120} height={100} />
    </article>
}
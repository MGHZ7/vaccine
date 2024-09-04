import Image, { ImageProps } from "next/image";

export interface ExpandableImageProps {
    image: ImageProps
}

export function ExpandableImage({ image }: ExpandableImageProps) {

    return <span className="relative">
        <Image {...image} />
    </span>
}
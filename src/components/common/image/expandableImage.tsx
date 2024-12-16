import Image, { ImageProps } from "next/image";

export interface ExpandableImageProps {
    image: ImageProps
    onExpand?: (image: ImageProps) => void
}

export function ExpandableImage({ image, onExpand }: ExpandableImageProps) {

    return <>

        <span className="relative group/image">
            <button
                className="transition absolute top-2 right-2 text-primary opacity-0 group-hover/image:opacity-100 z-10"
                onClick={() => onExpand?.(image)}
            >
                <span className="material-symbols-outlined">
                    open_with
                </span>
            </button>

            <Image {...image} />
        </span>
    </>
}
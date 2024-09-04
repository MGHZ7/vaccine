import { Modal } from "@/components/layout/modal";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export interface ExpandableImageProps {
    image: ImageProps
}

export function ExpandableImage({ image }: ExpandableImageProps) {

    const [showModal, setShowModal] = useState(false);

    return <>

        <span className="relative group/image">
            <button
                className="transition absolute top-2 right-2 text-primary opacity-0 group-hover/image:opacity-100 z-10"
                onClick={() => setShowModal(true)}
            >
                <span className="material-symbols-outlined">
                    open_with
                </span>
            </button>

            <Image {...image} />
        </span>

        <Modal show={showModal} hasCloseButton onClose={() => setShowModal(false)} size="4xl" >
            <div className="relative w-full h-[50vh]">
                <Image alt={image.alt} src={image.src} fill />
            </div>
        </Modal>
    </>
}
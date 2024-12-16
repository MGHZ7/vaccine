import { ExpandableImage } from "@/components/common/image/expandableImage";

import mainImage from "./assets/gallery/main.jpg";
import image1 from "./assets/gallery/1.jpg";
import image2 from "./assets/gallery/2.jpg";
import image3 from "./assets/gallery/3.jpg";
import image4 from "./assets/gallery/4.jpg";
import { GallerySlider } from "@/components/common/gallery/gallerySlider";
import { Modal } from "@/components/common/modal";
import { useState } from "react";

export function MetaverseGallery() {

    const imageUrls = [mainImage.src, image1.src, image2.src, image3.src, image4.src];

    const [activeIndex, setActiveIndex] = useState<number | undefined>();
    console.log("🚀 ~ MetaverseGallery ~ activeIndex:", activeIndex);


    const openGallery = (imageUrl: string) => {
        setActiveIndex(imageUrls.indexOf(imageUrl));
    }

    return <div>
        <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
            <article className="col-span-2">
                <ExpandableImage image={{
                    ...mainImage,
                    alt: 'VAC building'
                }}
                    onExpand={(image) => openGallery(image.src as string)} />
            </article>
            <div className="flex flex-col md:flex-row lg:flex-col col-span-full lg:col-span-1 gap-4">
                <article>
                    <ExpandableImage image={{ ...image1, alt: "VAC building 1" }}
                        onExpand={(image) => openGallery(image.src as string)} />

                </article>
                <article>
                    <ExpandableImage image={{ ...image2, alt: "VAC building 2" }}
                        onExpand={(image) => openGallery(image.src as string)} />

                </article>
            </div>
            <article className="col-span-full grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                    <ExpandableImage image={{ ...image3, alt: "VAC building 3" }}
                        onExpand={(image) => openGallery(image.src as string)} />

                </div>
                <div>
                    <ExpandableImage image={{ ...image4, alt: "VAC building 4" }}
                        onExpand={(image) => openGallery(image.src as string)} />

                </div>
            </article>
        </section>
        <Modal show={activeIndex != undefined} onClose={() => setActiveIndex(undefined)} hasCloseButton>
            <>
                <GallerySlider
                    imageUrls={[mainImage.src, image1.src, image2.src, image3.src, image4.src]}
                    selectedImageIndex={activeIndex} />
            </>
        </Modal>
    </div>
}
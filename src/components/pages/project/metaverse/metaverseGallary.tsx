import { ExpandableImage } from "@/components/common/image/expandableImage";

import mainImage from "./assets/gallery/main.jpg";
import image1 from "./assets/gallery/1.jpg";
import image2 from "./assets/gallery/2.jpg";
import image3 from "./assets/gallery/3.jpg";
import image4 from "./assets/gallery/4.jpg";

export function MetaverseGallery() {

    return <section className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        <article className="col-span-2">
            <ExpandableImage image={{
                ...mainImage,
                alt: 'VAC building'
            }} />
        </article>
        <div className="space-y-2">
            <article>
                <ExpandableImage image={{ ...image1, alt: "VAC building 1" }} />
            </article>
            <article>
                <ExpandableImage image={{ ...image2, alt: "VAC building 2" }} />
            </article>
        </div>
        <article className="col-span-full grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div>
                <ExpandableImage image={{ ...image3, alt: "VAC building 3" }} />
            </div>
            <div>
                <ExpandableImage image={{ ...image4, alt: "VAC building 4" }} />
            </div>
        </article>
    </section>
}
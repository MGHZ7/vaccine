'use client';

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { CareerImageSection } from "./careerImage";

export function CareerSection() {
    return <section
        id="career">
        <ElementVisibilityChecker ComponentToShow={CareerImageSection} props={{}} />
    </section>
}
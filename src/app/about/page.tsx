'use client';

import { useEffect } from "react";

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { CareerAboutUsSection } from "@/components/pages/career/careerAboutUs";
import { CareerSection } from "@/components/pages/career/careerSection";


export default function CareerPage() {

    useEffect(() => {
        document.body.classList.add('bg-career');

        return () => {
            document.body.classList.remove('bg-career');
        }
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-24 py-8 md:py-28 space-y-24">
            <ElementVisibilityChecker ComponentToShow={CareerAboutUsSection} props={{}} />
            <CareerSection />
        </main>
    );
}

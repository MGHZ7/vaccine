'use client';

import { useEffect } from "react";

import ElementVisibilityChecker from "@/components/common/elementInViewPort";
import { CareerApplicationForm } from "@/components/pages/career/applyNow/careerApplicationForm";


export default function CareerPage(props: any) {

    console.log(props);

    useEffect(() => {
        document.body.classList.add('bg-career');

        return () => {
            document.body.classList.remove('bg-career');
        }
    });

    return (
        <main className="flex min-h-screen flex-col items-center justify-between px-8 md:px-24 py-28 space-y-24 overflow-x-hidden">
            <ElementVisibilityChecker ComponentToShow={CareerApplicationForm} props={{}} />
        </main>
    );
}

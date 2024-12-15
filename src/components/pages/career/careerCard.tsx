'use client';

import locationIcon from "./assets/locationIcon.svg"
import Image from "next/image";

import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { CareerDto } from "@/core/dto/career";
import { VaccineLink } from "@/components/common/link/vaccineLink";
import { VaccineButtonLink } from "@/components/common/link/vaccineButtonLink";

export interface CareerCard extends ElementVisibilityCheckerComponentProps {
    career: CareerDto;
}

export function CareerCard({ career, isVisible }: CareerCard) {
    return <TransparentCard
        className={`p-4 ${isVisible ? 'animate-fade-in' : 'animate-fade-out'}`}>
        <div className="flex gap-4 flex-col md:flex-row">
            <div className="space-y-4">
                <h2 className="text-lg text-on-primary font-bold col-span-2">{career.title}</h2>
                <div className="inline-flex gap-2 items-start">
                    <Image className="max-w-3" alt="Location" {...locationIcon} />
                    <p className="text-gray-500 text-sm">{career.location}</p>
                </div>
                <div className="text-sm inline-flex gap-6">
                    <div>
                        <h6 className="text-gray-500">Department:</h6>
                        <p className="font-bold">{career.title}</p>
                    </div>

                    <div>
                        <h6 className="text-gray-500">Position:</h6>
                        <p className="font-bold">{career.position}</p>
                    </div>
                </div>
            </div>
            <div className="min-w-36 p-2">
                <VaccineButtonLink styleType="light" size="md" className="whitespace-nowrap text-sm px-8" href={'/career/apply/x'}>
                    Apply Now
                </VaccineButtonLink>
            </div>
        </div>
    </TransparentCard>
}
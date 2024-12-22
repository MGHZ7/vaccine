'use client';

import React, { useEffect, useLayoutEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import "./styles.scss";
import { AdvisorCard, AdvisorCardProps } from "../card/advisorCard";
import { useScreenSize } from "@/hooks/screen/screenSize.hook";

export interface AdvisorsSliderProps {
    advisors: AdvisorCardProps[]
    onActiveCardChange?: (index: number) => void
    onAdvisorHover?: (index: number) => void
    onAdvisorLeave?: (index: number) => void
}

export function AdvisorsSlider({ advisors, onActiveCardChange, onAdvisorHover, onAdvisorLeave }: AdvisorsSliderProps) {
    const [mounted, setMounted] = useState(false);

    const screenSize = useScreenSize();

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        mounted ? <div className="advisor-slider">
            <Swiper
                watchSlidesProgress={true}
                spaceBetween={0}
                loop
                navigation
                modules={[Navigation, EffectCoverflow]}
                effect='coverflow'
                className="w-full max-w-64 sm:max-w-sm lg:max-w-xl"
                coverflowEffect={screenSize >= 650 ? {
                    rotate: -5,
                    stretch: 1,
                    depth: 500,
                    modifier: 2,
                    slideShadows: false,
                    scale: 1.3
                } : undefined}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },

                    650: {
                        slidesPerView: 3
                    }
                }}
                onSlideChange={e => onActiveCardChange?.(e.realIndex)}>
                {advisors.map((advisor, i) =>
                    <SwiperSlide
                        key={i}
                        onMouseEnter={() => onAdvisorHover?.(i)}
                        onMouseOut={() => onAdvisorLeave?.(i)}>
                        <AdvisorCard {...advisor} />
                    </SwiperSlide>)}
            </Swiper>
        </div> : null
    );
}

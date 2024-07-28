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

export interface AdvisorsSliderProps {
    advisors: AdvisorCardProps[]
    onActiveCardChange?: (index: number) => void
}

export function AdvisorsSlider({ advisors, onActiveCardChange }: AdvisorsSliderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        mounted ? <div className="advisor-slider">
            <Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                spaceBetween={0}
                loop
                navigation
                modules={[Navigation, EffectCoverflow]}
                effect='coverflow'
                className="w-full max-w-xl"
                coverflowEffect={{
                    rotate: -5,
                    stretch: 1,
                    depth: 500,
                    modifier: 2,
                    slideShadows: false,
                    scale: 1.3
                }}
                onSlideChange={e => onActiveCardChange?.(e.realIndex)}>
                {advisors.map((advisor, i) => <SwiperSlide key={i}><AdvisorCard {...advisor} /></SwiperSlide>)}
            </Swiper>
        </div> : null
    );
}

'use client';

import React, { useLayoutEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Navigation, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import "swiper/css";
import 'swiper/css/navigation';

import "./styles.css";
import { AdvisorCard, AdvisorCardProps } from "../card/advisorCard";

export interface AdvisorsSliderProps {
    advisors: AdvisorCardProps[]
    onActiveCardChange?: (index: number) => void
}

export function AdvisorsSlider({ advisors, onActiveCardChange }: AdvisorsSliderProps) {
    const [mounted, setMounted] = useState(false);

    useLayoutEffect(() => {
        setMounted(true);
    }, []);

    return (
        mounted ? <>
            <Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                spaceBetween={10}
                loop
                navigation
                modules={[Navigation, EffectCoverflow]}
                effect='coverflow'
                className="w-full max-w-xl"
                coverflowEffect={{
                    rotate: -5,
                    stretch: 10,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                    scale: 0.9
                }}
                onSlideChange={e => onActiveCardChange?.(e.realIndex)}>
                {advisors.map((advisor, i) => <SwiperSlide key={i}><AdvisorCard {...advisor} /></SwiperSlide>)}
            </Swiper>
        </> : null
    );
}

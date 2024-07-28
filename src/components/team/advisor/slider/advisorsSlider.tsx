'use client';

import React from "react";
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
}

export function AdvisorsSlider({ advisors }: AdvisorsSliderProps) {
    console.log("🚀 ~ AdvisorsSlider ~ advisors:", advisors);

    return (
        <>
            <Swiper
                watchSlidesProgress={true}
                slidesPerView={3}
                loop
                navigation
                modules={[Navigation, EffectCoverflow]}
                effect='coverflow'
                className="w-full max-w-xl"
                coverflowEffect={{
                    rotate: -20,
                    stretch: 25,
                    depth: 250,
                    modifier: 1,
                    slideShadows: false,
                    scale: 0.9
                }}>
                {advisors.map((advisor, i) => <SwiperSlide key={i}><AdvisorCard {...advisor} /></SwiperSlide>)}
            </Swiper>
        </>
    );
}

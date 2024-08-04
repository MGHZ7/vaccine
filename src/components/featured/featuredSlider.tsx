'use client';

import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.scss';

import { Navigation } from 'swiper/modules'

import { FeaturedSlide, FeaturedSlideProps } from './featureSlide';

export interface FeaturedSliderProps {
    featuredList: FeaturedSlideProps[]
}

export default function FeaturedSlider({ featuredList }: FeaturedSliderProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className='featured-slider'>
            {mounted && <Swiper
                slidesPerView={3}
                spaceBetween={0}
                autoplay
                loop
                navigation
                modules={[Navigation]}
                breakpoints={{
                    0: {
                        slidesPerView: 1
                    },
                    600: {
                        slidesPerView: 2
                    },
                    900: {
                        slidesPerView: 3
                    }
                }}
                className="mySwiper"
            >
                {featuredList.map((slide, i) => <>
                    <SwiperSlide key={slide.name}>
                        <FeaturedSlide imageSrc={slide.imageSrc} name={slide.name} />
                    </SwiperSlide>
                </>
                )}
            </Swiper>}
        </div>
    );
}

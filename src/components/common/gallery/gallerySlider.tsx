import { Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css'

export interface GallerySliderProps {
    imageUrls: string[];
    selectedImageIndex?: number;
}

export function GallerySlider({ imageUrls, selectedImageIndex }: GallerySliderProps) {

    return <Swiper
        className="gallery-swiper "
        initialSlide={selectedImageIndex}
        pagination
        navigation
        modules={[Pagination, Navigation]}>
        {imageUrls.map(url => <SwiperSlide key={url} className="h-full">
            <img alt="" src={url} />
        </SwiperSlide>)}
    </Swiper>
}
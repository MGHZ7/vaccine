"use client";

import { throttle } from "@/libs/performance";
import { useCallback, useEffect, useState } from "react"

export const useScreenSize = () => {
    const [width, setWidth] = useState(typeof window === 'object' ? window.innerWidth : 0);

    const handleResize = useCallback(() => {
        return setWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        const resizeCallback = throttle(handleResize)
        window.addEventListener('resize', resizeCallback);

        return () => {
            window.removeEventListener('resize', resizeCallback);
        }
    })

    return width;
}
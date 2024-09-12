'use client';

import React, { useRef, useEffect, useState, FC } from 'react';

export interface ElementVisibilityCheckerComponentProps {
    isVisible?: boolean;
}

export interface ElementVisibilityCheckerProps<T extends ElementVisibilityCheckerComponentProps> {
    ComponentToShow: FC<T>
    props: T
    className?: string
    threshold?: number
}

const ElementVisibilityChecker = <T extends ElementVisibilityCheckerComponentProps>({ ComponentToShow, threshold = 0.3, props, className = '' }: ElementVisibilityCheckerProps<T>) => {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.map((entry) => setIsVisible(entry.isIntersecting));
            },
            {
                root: window.document, // viewport
                rootMargin: '0px', // no margin
                threshold // 50% of target visible
            }
        );

        if (targetRef.current) {
            observer.observe(targetRef.current);
        }

        // Clean up the observer
        return () => {
            if (targetRef.current) {
                observer.unobserve(targetRef.current);
            }
        };
    }, []);

    return <div className={`${className}`} ref={targetRef}>
        <ComponentToShow isVisible={isVisible} {...props} />
    </div>
};

export default ElementVisibilityChecker;
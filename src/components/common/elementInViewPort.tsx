'use client';

import React, { useRef, useEffect, useState, FC } from 'react';

export interface ElementVisibilityCheckerComponentProps {
    isVisible?: boolean;
}

export interface ElementVisibilityCheckerProps<T extends ElementVisibilityCheckerComponentProps> {
    ComponentToShow: FC<T>
    props: T
}

const ElementVisibilityChecker = <T extends ElementVisibilityCheckerComponentProps>({ ComponentToShow, props }: ElementVisibilityCheckerProps<T>) => {
    const [isVisible, setIsVisible] = useState(false);
    const targetRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                console.log("🚀 ~ useEffect ~ entries:", entries);

                entries.map((entry) => setIsVisible(entry.isIntersecting));
            },
            {
                root: window.document, // viewport
                rootMargin: '0px', // no margin
                threshold: 0.3, // 50% of target visible
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

    return <div ref={targetRef}>
        <ComponentToShow isVisible={isVisible} {...props} />
    </div>
};

export default ElementVisibilityChecker;
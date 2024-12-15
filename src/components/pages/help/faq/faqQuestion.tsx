import { ElementVisibilityCheckerComponentProps } from "@/components/common/elementInViewPort";
import { AnimatedPlusMinusButton } from "@/components/common/animation/plusMinus/animatedPlusMinusButton";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { useLayoutEffect, useRef, useState } from "react";

export interface FAQQuestionsProps extends ElementVisibilityCheckerComponentProps {
    question?: string;
    answer?: string;
    onOpen?: () => void;
}

export function FAQQuestions({ question, answer, isVisible }: FAQQuestionsProps) {

    const headerRef = useRef<HTMLHeadingElement>(null)

    const [isOpen, setIsOpen] = useState(false);
    const [minHeight, setMinHeight] = useState(0);


    const toggleOpen = () => {
        setIsOpen(prev => !prev);
    }

    useLayoutEffect(() => {
        setMinHeight((headerRef.current?.getBoundingClientRect().height ?? 0) + 20)
    }, []);

    return <TransparentCard
        className={`transition duration-500 p-2 pe-10 overflow-hidden ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        style={{
            maxHeight: isOpen ? 1000 : minHeight
        }}
        onClick={toggleOpen}>
        <h3 ref={headerRef} className={`mb-6`}>{question}</h3>
        <AnimatedPlusMinusButton isOpen={isOpen} className="absolute top-1 right-1" />

        <Paragraph className={`transition duration-500 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>{answer}</Paragraph>
    </TransparentCard>
}
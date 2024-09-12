import { AnimatedPlusMinusButton } from "@/components/layout/animation/plusMinus/animatedPlusMinusButton";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { Paragraph } from "@/components/layout/typography/paragraph";
import { useLayoutEffect, useRef, useState } from "react";

export interface FAQQuestionsProps {
    question?: string;
    answer?: string;
    onOpen?: () => void;
}

export function FAQQuestions({ question, answer }: FAQQuestionsProps) {

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
        className={`transition p-2 pe-10 overflow-hidden`}
        style={{
            maxHeight: isOpen ? 1000 : minHeight
        }}
        onClick={toggleOpen}>
        <h3 ref={headerRef} className={`mb-6`}>{question}</h3>
        <AnimatedPlusMinusButton isOpen={isOpen} className="absolute top-1 right-1" />

        <Paragraph className={`transition ${isOpen ? 'opacity-100' : 'opacity-0'}`}>{answer}</Paragraph>
    </TransparentCard>
}
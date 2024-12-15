import { WritingAnimation } from "@/components/common/animation/writingAnimation/writingAnimation";
import { AnimatedPopup } from "@/components/common/popup/animatedPopup";
import { TransparentCard } from "@/components/layout/card/transparentCard";
import { Paragraph } from "@/components/layout/typography/paragraph";

export interface RoadmapPopupProps {
    show: boolean;
    text: string;
    x?: number;
    y?: number;
    classname?: string;
}

export function RoadmapPopup({ show, x, y, text, classname = '' }: RoadmapPopupProps) {

    return <AnimatedPopup show={show} x={x} y={y} className={`min-w-96 min-h-10 max-w-sm pointer-events-none ${classname}`} >
        <TransparentCard className="py-1 px-2 w-full h-full">
            <Paragraph>
                <WritingAnimation text={[text]} />
            </Paragraph>
        </TransparentCard>
    </AnimatedPopup>
}
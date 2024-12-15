import { forwardRef, useCallback, useMemo, useState } from "react";
import { RoadMapRef, RoadmapSvg } from "./roadmapSvg";
import { roadmapPoints } from "./roadmapPoints";
import { RoadmapPopup } from "./roadmapPopup";
import { throttle } from "@/libs/performance";
import './styles.css';

export interface RoadMapProps {
    className?: string;
}

export const RoadMap = forwardRef<RoadMapRef, RoadMapProps>(({ className = '' }, ref) => {

    const popupPoints = useMemo(() => new Map(Object.keys(roadmapPoints).map(key => ([key,
        'lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum'
    ]))), []);

    const [popupToShow, setPopupToShow] = useState<{ name: String, text: string, coords?: { x: number, y: number } }>();

    const showPopupOfName = (popupName: string, coords: { x: number, y: number } | undefined) => {
        if (popupToShow?.name === popupName) return;
        setPopupToShow({ name: popupName, text: popupPoints.get(popupName)!, coords })
    };

    const hidePopup = () => {
        setPopupToShow(undefined);
    }

    return <div>
        <RoadmapSvg
            ref={ref}
            showPopup={throttle(showPopupOfName, 50)}
            hidePopup={hidePopup} />
        <RoadmapPopup
            show={!!popupToShow}
            text={popupToShow?.text ?? ''}
            x={popupToShow?.coords?.x}
            y={popupToShow?.coords?.y} />
    </div>

})

RoadMap.displayName = 'RoadMap';
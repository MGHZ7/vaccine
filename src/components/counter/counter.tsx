'use client';

import { DateTime, Duration } from "luxon";
import { ReactNode, useEffect, useState } from "react";

export interface CounterProps {
    className?: string
    children?: ReactNode
    targetedDate: DateTime
}

export function Counter({ targetedDate, children, className = '' }: CounterProps) {

    const [currentCount, setCurrentCount] = useState<Duration<true>>(targetedDate.diff(DateTime.now()))

    useEffect(() => {
        const interval = setInterval(() => {
            const diff = targetedDate.diff(DateTime.now());
            console.log("🚀 ~ interval ~ diff:", diff);


            setCurrentCount(diff);
        }, 1000);

        return () => {
            clearInterval(interval);
        }
    }, [targetedDate]);

    return <article className={`flex gap-4 ${className}`}>
        <CounterBox count={Math.floor(currentCount.as('days'))} title="Days" />
        <CounterBox count={Math.floor(currentCount.as('hours')) % 24} title="Hours" />
        <CounterBox count={Math.floor(currentCount.as('minutes')) % 60} title="Minutes" />
        <CounterBox count={Math.floor(currentCount.as('seconds')) % 60} title="Seconds" />
    </article>
}

export interface CounterBoxProps {
    count?: number;
    title?: string;
}

export function CounterBox({ count, title }: CounterBoxProps) {

    return <div className="border rounded-md flex-1 px-1 py-2 text-center border-primary">
        <div className="text-2xl font-bold mb-4">
            {count}
        </div>

        <div className="text-xs font-extralight">
            {title}
        </div>
    </div>
}
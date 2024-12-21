import { ElementVisibilityCheckerComponentProps } from "./elementInViewPort";

export interface PercentageLineProps extends ElementVisibilityCheckerComponentProps {
    points: Omit<PercentageLinePointProps, 'accumulation'>[]
}

export function PercentageLine({ points, isVisible }: PercentageLineProps) {

    const pointesAccumulated = points.reduce<PercentageLinePointProps[]>((accumulated, point) => {
        const prevElement = accumulated.length ? accumulated[accumulated.length - 1] : undefined;
        const accumulation: PercentageLinePointProps = {
            ...point,
            accumulation: point.percentage + (prevElement?.accumulation ?? 0)
        }

        return [...accumulated, accumulation];
    }, []);

    return <div className={`transition-all delay-700 duration-700 p-4 ${isVisible ? 'max-w-full opacity-100' : 'max-w-0 opacity-0'}`}>
        <div className="relative h-3 mb-16 mt-8">
            {pointesAccumulated.map((point, index) => {
                return <PercentageLinePoint key={point.percentage} {...point} prevAccumulation={index > 0 ? pointesAccumulated[index - 1].accumulation : 0} />;
            })}
        </div>
    </div>
}


export interface PercentageLinePointProps {
    className?: string;
    percentage: number;
    title?: string;
    accumulation: number
    prevAccumulation?: number
}

function PercentageLinePoint({ percentage, accumulation, prevAccumulation, title, className = '' }: PercentageLinePointProps) {
    return <>

        <div className="absolute top-0 bottom-0 h-3 bg-gradient-to-r from-[#18DBD522] to-primary"
            style={{ left: `${prevAccumulation ?? 0}%`, right: `${100 - accumulation + -1}%` }}></div>

        <div className="absolute text-center group/point" style={{ left: `${accumulation}%` }}>
            <div className={`relative z-10 bottom-1 w-5 h-5 bg-primary rounded-full 
            shadow-sm shadow-primary ${className}`}></div>
            <h4 className="relative transition-all -z-10 p-2
        group-hover/point:z-20 group-hover/point:bg-opacity-30 group-hover/point:shadow
        rounded -translate-x-1/2">
                <span className="text-xl opacity-0 group-hover/point:opacity-100 lg:opacity-100">{percentage}%</span> <br />
                <span className={`opacity-0 group-hover/point:opacity-100 pt-3`}>{title}</span>
            </h4>
        </div>
    </>
}
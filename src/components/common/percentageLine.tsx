export interface PercentageLineProps {
    points: Omit<PercentageLinePointProps, 'accumulation'>[]
}

export function PercentageLine({ points }: PercentageLineProps) {

    const pointesAccumulated = points.reduce<PercentageLinePointProps[]>((accumulated, point) => {
        const prevElement = accumulated.length ? accumulated[accumulated.length - 1] : undefined;
        const accumulation: PercentageLinePointProps = {
            ...point,
            accumulation: point.percentage + (prevElement?.accumulation ?? 0)
        }

        return [...accumulated, accumulation];
    }, []);
    console.log("🚀 ~ pointesAccumulated ~ pointesAccumulated:", pointesAccumulated);


    return <div className="w-full p-4">
        <div className="relative bg-primary h-3 mb-16 mt-8 rounded-lg">
            {pointesAccumulated.map(point => {
                return <PercentageLinePoint key={point.percentage} {...point} />;
            })}
        </div>
    </div>
}


export interface PercentageLinePointProps {
    className?: string;
    percentage: number;
    title?: string;
    accumulation: number
}

function PercentageLinePoint({ percentage, accumulation, title, className = '' }: PercentageLinePointProps) {
    return <div className="absolute text-center group/point" style={{ left: `${accumulation}%` }}>
        <div className={`relative z-10 bottom-1 w-5 h-5 bg-primary rounded-full 
            shadow-contrast ${className}`}></div>
        <h4 className="relative transition-all -z-10 p-1
        group-hover/point:bg-black group-hover/point:z-20 group-hover/point:bg-opacity-50 group-hover/point:shadow
        rounded -translate-x-1/2">
            <span className="text-xl opacity-0 group-hover/point:opacity-100 lg:opacity-100">{percentage}%</span> <br />
            <span className={`opacity-0 group-hover/point:opacity-100`}>{title}</span>
        </h4>
    </div>
}
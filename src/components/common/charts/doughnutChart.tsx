import { Chart } from "chart.js/auto";
import ChartDatalables from "chartjs-plugin-datalabels";
import { useEffect, useId, useRef } from "react";

Chart.register(ChartDatalables);

export interface DoughnutChartProps {
    className?: string;
    data: { label: string, value: number, color: string }[];
}

export function DoughnutChart({ data, className = '' }: DoughnutChartProps) {

    const id = useId();

    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const chart = new Chart(ref.current!, {
            type: 'doughnut',
            data: {
                labels: data.map(d => d.label),
                datasets: [{
                    data: data.map(d => d.value),
                    backgroundColor: data.map(d => d.color),
                    hoverOffset: 4,
                    borderWidth: 0,
                }]
            },
            options: {
                cutout: '98%',
                responsive: true,
                maintainAspectRatio: true,
                clip: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        formatter: function (value, context) {
                            const label = context.chart.data.labels?.[context.dataIndex];

                            return `${value}%\n ${label}`
                        },
                        color: '#FFFFFF',
                        clip: false,

                    },
                    title: {
                        display: false,
                    },
                },
                layout: {
                    padding: {
                        top: 75,
                        right: 75,
                        bottom: 75,
                        left: 75,
                    }
                }
            },
        })

        return () => {
            chart.destroy();
        }
    }, [data]);

    return <canvas className={`overflow-visible ${className}`} ref={ref} id={id}> </canvas>;
}
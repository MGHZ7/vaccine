import { Chart } from "chart.js/auto";
import ChartDatalables from "chartjs-plugin-datalabels";
import { useEffect, useId, useRef } from "react";

Chart.register(ChartDatalables);

export interface DoughnutChartProps {
    data: any;
}

export function DoughnutChart({ data }: DoughnutChartProps) {

    const id = useId();

    const ref = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const chart = new Chart(ref.current!, {
            type: 'doughnut',
            data: data,
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
                        top: 50,
                        right: 50,
                        bottom: 50,
                        left: 75,
                    }
                }
            },
        })

        return () => {
            chart.destroy();
        }
    }, [data]);

    return <canvas className="overflow-visible" ref={ref} id={id}> </canvas>;
}
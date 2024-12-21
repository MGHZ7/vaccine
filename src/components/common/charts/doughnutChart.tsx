import { Chart } from "chart.js/auto";
import ChartDatalables from "chartjs-plugin-datalabels";
import { useEffect, useId, useRef } from "react";

Chart.register(ChartDatalables);

export interface DoughnutChartProps {
    className?: string;
    data: { label: string, value: number, color: string, hoverColor: string }[];
}

const grayCirclePlugin = {
    id: 'grayCircle',
    afterDraw: (chart: any) => {
        const { ctx, chartArea } = chart;
        const { top, left, width, height } = chartArea;
        const centerX = left + width / 2;
        const centerY = top + height / 2;

        const outerRadius = chart.getDatasetMeta(0).data[0].outerRadius; // Get outer radius of the first segment
        const circleRadius = (outerRadius + 10);
        const circleWidth = 1;

        ctx.save();
        ctx.beginPath();
        ctx.arc(centerX, centerY, circleRadius, 0, 2 * Math.PI, false);
        ctx.lineWidth = circleWidth;
        ctx.strokeStyle = '#9ca3af'; // Color of the circle
        ctx.stroke();
        ctx.restore();
    }
};


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
                    hoverBackgroundColor: data.map(d => d.hoverColor),
                    borderWidth: 0,
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        padding: 20,
                        formatter: function (value, context) {
                            const label = context.chart.data.labels?.[context.dataIndex];

                            return `${value}%\n ${label}`
                        },
                        color: '#FFFFFF',
                        clip: false,
                        listeners: {
                            enter: (context, event) => {
                                const activeElement = {
                                    datasetIndex: context.datasetIndex,
                                    index: context.dataIndex
                                };
                                chart.tooltip?.setActiveElements([activeElement], {
                                    x: event.x!,
                                    y: event.y!
                                })
                                chart.update();
                            }
                        }
                    },
                }]
            },
            options: {
                cutout: '96%',
                responsive: true,
                maintainAspectRatio: true,
                clip: false,
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false,
                    },
                    tooltip: {
                        mode: 'nearest',
                        intersect: false
                    }
                },
                layout: {
                    padding: {
                        top: 100,
                        right: 100,
                        bottom: 100,
                        left: 100,
                    }
                }
            },
            plugins: [grayCirclePlugin]
        })

        return () => {
            chart.destroy();
        }
    }, [data]);

    return <canvas className={`overflow-visible ${className}`} ref={ref} id={id}> </canvas>;
}
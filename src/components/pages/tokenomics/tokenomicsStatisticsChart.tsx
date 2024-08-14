import { DoughnutChart } from "@/components/common/charts/doughnutChart";

export function TokenomicsStatisticsChart() {

    const data = {
        labels: [
            'Research\n and development',
            'Marketing',
            'Operation',
            'Exchange\n listing',
        ],
        datasets: [{
            data: [25, 18, 10, 50],
            backgroundColor: [
                'rgb(0, 92, 163)',
                'rgb(72, 179, 183)',
                'rgb(164, 216, 230)',
                'rgb(49, 180, 220)',
            ],
            hoverOffset: 4,
            borderWidth: 0,
        }]
    };



    return <div>
        <DoughnutChart data={data} />
    </div>
}
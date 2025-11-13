import type { ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";
import { useSelector } from "react-redux";
import type { RootState } from "@/contexts/store";
import { getDataPoints } from "@/utils/analyticFunction";

export function EloOverTimeChart() {
    const redFightData = useSelector((state: RootState) => state.fights.red_fighter_history);
    const blueFightData = useSelector((state: RootState) => state.fights.blue_fighter_history);
    const { red_fighter_id, blue_fighter_id } = useSelector(
        (state: RootState) => state.fights.fightData
    );

    const eloData = getDataPoints(redFightData!, blueFightData!, red_fighter_id!, blue_fighter_id!);

    const dates = eloData.dates
    const datePoints = dates.length > 20 ? dates.filter((_, index) => index % Math.ceil(dates.length / 30) === 0) : dates
    
    const redSeries = eloData.eloPoints.map(d => d.redEloPoints);
    const blueSeries = eloData.eloPoints.map(d => d.blueEloPoints);

    const chartOptions: ApexOptions = {
        chart: {
            height: 305,
            type: "line",
            background: "transparent",
            toolbar: { show: false },
        },
        stroke: {
            curve: "smooth",
            width: 3,
            shadow: {
                enabled: true,
                blur: 10,
                color: "#ffffff",
                opacity: 0.6,
            },
        },
        dataLabels: { enabled: false },
        colors: ["#ff007f", "#00ffff"], 

        fill: {
            type: "gradient",
            gradient: {
                shade: "dark",
                type: "horizontal",
                shadeIntensity: 0.7,
                gradientToColors: ["#ffa500", "#00ffcc"], 
                inverseColors: false,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 100],
            },
        },

        legend: {
            show: true,
            horizontalAlign: "center",
            offsetY: 6,
        },
        xaxis: {
            categories: datePoints,
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        yaxis: {
            labels: {
                show: true,
                formatter: (val: number) => Math.round(val),
            },
            axisBorder: { show: false },
            axisTicks: { show: false },
        },
        tooltip: {
            enabled: true,
            shared: true,
            intersect: false,
        },
        grid: { show: true, borderColor: "rgba(150,150,150,0.2)" },
        responsive: [
            {
                breakpoint: 450,
                options: {
                    stroke: { width: 1.5 },
                    xaxis: { tickAmount: 5 },
                },
            },
        ],
    };


    const series = [
        { name: "Red Fighter", data: redSeries },
        { name: "Blue Fighter", data: blueSeries },
    ];

    return (
        <ApexCharts
            options={chartOptions}
            series={series}
            height={chartOptions.chart?.height}
            type={chartOptions.chart?.type}
        />
    );
}

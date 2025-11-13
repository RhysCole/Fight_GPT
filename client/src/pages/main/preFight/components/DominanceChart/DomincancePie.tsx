import { type ApexOptions } from "apexcharts";
import ApexCharts from "react-apexcharts";

// 1. Define an interface for the component's props
interface PatternDonutChartProps {
    series: number[];
    labels: string[];
    colors: string[];
    title: string;
    dataUnit?: string; 
    height?: number; 
}

export const DomincancePie = ({
    series,
    labels,
    colors,
    title,
    dataUnit = "Units", 
    height = 380, 
}: PatternDonutChartProps) => {

    const chartOptions: ApexOptions = {
        chart: {
            type: "donut",
            height: height, 
            toolbar: {
                show: false,
            },
            background: "transparent",
            dropShadow: {
                enabled: true,
                color: "#111",
                top: -1,
                left: 3,
                blur: 3,
                opacity: 0.2,
            },
        },
        title: {
            text: title, 
            style: { fontWeight: "500" },
            align: "right",
            offsetX: -24,
        },
        legend: {
            position: "right",
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["var(--color-base-100)"],
        },
        fill: {
            type: "pattern",
            pattern: {
                style: ["squares", "verticalLines", "slantedLines", "circles", "horizontalLines"],
                width: 4,
                height: 4,
                strokeWidth: 1,
            },
        },
        plotOptions: {
            pie: {
                startAngle: -45,
                endAngle: 315,
                donut: {
                    size: "60%",
                    labels: {
                        show: true,
                        value: {
                            color: "var(--color-base-content)",
                            formatter: (value) => `${value} ${dataUnit}`, 
                        },
                        total: {
                            show: true,
                            color: "#FF4560",
                            formatter: () =>
                                series.reduce((acc, cur) => acc + cur, 0) + ` ${dataUnit}`,
                        },
                    },
                },
            },
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (value) => `${value} ${dataUnit}`, 
            },
        },
        labels: labels, 
        colors: colors, 
        series: series, 
    };

    return (
        <ApexCharts
            options={chartOptions}
            type={chartOptions.chart?.type}
            height={chartOptions.chart?.height}
            series={chartOptions.series}
        />
    );
};
import type { RootState } from "@/contexts/store";
import { PieChart } from "../../../components/PieChart"
import { useSelector } from "react-redux";

export function StyleChart() {
    const { red_style_score, blue_style_score, style_diff } = useSelector(
        (state: RootState) => state.fights.preFightData?.features
    );

    const pieData = {
        series: [red_style_score, blue_style_score],
        labels: ["RSM", "BSM"],
        colors: ["#FF0033", "#66FFFF"],
        title: "Style Matchup (SM)",
        unit: "%",
    };

    return (
        <PieChart {...pieData} />
    )
}
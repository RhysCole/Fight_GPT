import type { RootState } from "@/contexts/store";
import { PieChart } from "../../../components/PieChart"
import { useSelector } from "react-redux";

export function DominaceChart() {
    const dominance_average = useSelector(
        (state: RootState) => state.fights.preFightData?.features.rivalry_dominance
    );

    console.log(dominance_average)

    let red : number | null | undefined = 0;
    let blue : number | null | undefined = 0;
    let noFight : number | null | undefined = 0;

    if (dominance_average === 0) {
        noFight = 1;
    } else if (dominance_average! > 0) {
        red = dominance_average!;
        blue = 1 - Math.abs(dominance_average!);
    } else if (dominance_average! < 0) {
        blue = Math.abs(dominance_average!); 
        red = 1 - Math.abs(dominance_average!); 
    }

    const dominanceData = [red, blue, noFight];
    console.log(dominanceData)

    const pieData = {
        series: dominanceData,
        labels: ["RARD", "BARD","NaN"],
        colors: ["#FF0033", "#66FFFF", "#808080"],
        title: "Rivalry Dominance (ARD)",
        unit: "%",
    };

    return (
        <PieChart {...pieData} />
    )
}
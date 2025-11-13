import type { RootState } from "@/contexts/store";
import { DomincancePie } from "./DomincancePie"
import { useSelector } from "react-redux";

export function DominaceChart() {
    const dominance_average = useSelector(
        (state: RootState) => state.fights.preFightData?.features.dominance_average
    );

    let red : number | null | undefined = 0;
    let blue : number | null | undefined = 0;
    let noFight : number | null | undefined = 0;

    if (dominance_average === 0) {
        noFight = 1;
    } else if (dominance_average! > 0) {
        red = dominance_average;
        noFight = 1 - Math.abs(dominance_average!); 
    } else if (dominance_average! < 0) {
        blue = Math.abs(dominance_average!); 
        noFight = 1 - Math.abs(dominance_average!); 
    }

    const dominanceData = [red, blue, noFight];

    const pieData = {
        series: dominanceData,
        labels: ["Red Fighter", "Blue Fighter", "No History"],
        colors: ["#FF0033", "#66FFFF", "#808080"],
        title: "Average Rivalry Dominance",
        unit: "%",
    };

    return (
        <DomincancePie {...pieData} />
    )
}
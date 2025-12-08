import { useEffect, useState } from "react";
import { fetchRanking } from "@/utils/fetchRankings";

const options = ['elo_rating', 'quality_score']

interface props {
    typeIndex: number;
}
export function Rankings({typeIndex} : props) {
    const [data, setData] = useState<IFighterData[]>([]);
    
    useEffect(() => {
        const loadData = async () => {
            try {
                const rankingData = await fetchRanking(18, typeIndex);
                console.log(rankingData)
                setData(rankingData);
            } catch (error) {
                console.error("Failed to fetch rankings", error);
            }
        };
        loadData();
    }, [typeIndex]); 

    return (
        <div className="w-full border border-base-200 rounded-xl bg-base-100 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
                <table className="table table-sm w-full">
                    <thead className="bg-base-200/40 text-xs uppercase text-base-content/60 font-bold">
                        <tr>
                            <th className="w-20 pl-4">Rank</th>
                            <th>Fighter Name</th>
                            <th className="text-right">Record</th>
                            <th className="text-right pr-6">{options[typeIndex]}</th>
                        </tr>
                    </thead>

                    <tbody className="text-sm font-medium">
                        {data.map((fighter, index: number) => (
                            <tr key={index} className="hover:bg-base-100 border-b border-base-200/50 last:border-none">
                                <td className="pl-4">
                                    <span className="text-base-content/50 font-mono text-xs">#{index + 1}</span>
                                </td>
                                <td>
                                    <span className="text-base-content font-bold">
                                        {fighter.Name}
                                    </span>
                                </td>
                                <td className="text-right text-base-content/60">
                                    {fighter.Record.replace("Record: ", "")}
                                </td>
                                <td className="text-right pr-6">
                                    <span className="font-mono font-bold text text-error">
                                        {typeIndex === 0 ?  Math.round(fighter.elo_rating) : Math.round(fighter.quality_score)}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
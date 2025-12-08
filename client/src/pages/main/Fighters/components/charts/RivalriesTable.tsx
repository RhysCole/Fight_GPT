import { getRivalries } from "@/utils/fetchRivalries";
import { useState, useEffect } from "react";
export function RivalryTable() {
    const [data, setData] = useState<[]>([]);

    useEffect(() => {
        const loadData = async () => {
            try {
                const rivalries = await getRivalries();
                setData(rivalries);
            } catch (error) {
                console.error("Failed to fetch rivalries", error);
            }
        };
        loadData();
    }, []);

return (
        <div className="flex justify-center">
            <div className="w-full  mx-auto">
                <div className="w-full border border-base-200 rounded-xl bg-base-100 overflow-hidden shadow-sm">
                    <div className="overflow-x-auto">
                        <table className="table table-sm w-full">
                            <thead className="bg-base-200/40 text-xs uppercase text-base-content/60 font-bold">
                                <tr>
                                    <th className="w-16 pl-4 text-left">#</th>
                                    <th>Fighter A</th>
                                    <th className="text-center">Fights</th>
                                    <th className="text-right pr-6">Fighter B</th>
                                </tr>
                            </thead>

                            <tbody className="text-sm font-medium">
                                {data.slice(0,13).map((rivalry, index) => (
                                    <tr key={index} className="cursor-pointer hover:bg-gradient-to-r hover:from-rose-500/20 hover:via-fuchsia-600/20 hover:to-red-600/20">
                                        
                                        <td className="pl-4">
                                            <span className="text-base-content/50 font-mono text-xs">#{index + 1}</span>
                                        </td>
                                        
                                        <td className="text-base-content font-bold">
                                            {rivalry.red_fighter_name}
                                        </td>
                                        
                                        <td className="text-center">
                                            <span className="font-mono font-bold text-lg text-error ">
                                                {rivalry.fight_count}
                                            </span>
                                        </td>
                                        
                                        <td className="text-right text-base-content font-bold">
                                            {rivalry.blue_fighter_name}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}
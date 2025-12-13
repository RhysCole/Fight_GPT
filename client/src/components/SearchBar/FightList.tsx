import { useState, useEffect } from "react";
import axios from "axios";
import { filteredFights } from "@/utils/searchFunctions";
import { LoadingEffect } from "@/components/LoadingEffect";
import type { UpcomingFight } from "@/models/types"; // Assuming your types file is correct
import { useSelector } from "react-redux";
import type { RootState } from "@/contexts/store";
import { handleSelectFight } from "@/utils/handleSelectFight";

const fetchUpcomingFights = async (): Promise<UpcomingFight[]> => {
    const response = await axios.get("http://127.0.0.1:8000/fights/upcoming")
    return response.data
}



export function FightList ({ searchText }: { searchText: string }){

    const [allFights, setAllFights] = useState<UpcomingFight[]>([]);
    const [filteredData, setFilteredData] = useState<UpcomingFight[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState<string | null>(null);

    const user_id = useSelector((state: RootState) => state.user.profile?.id);

    useEffect(() => {
        const loadFights = async () => {
            try {
                setIsLoading(true);
                const data = await fetchUpcomingFights();
                setAllFights(data);
                setIsError(null);
            } catch (err) {
                setIsError(err instanceof Error ? err.message : "Failed to fetch fight data.");
            } finally {
                setIsLoading(false);
            }
        };
        loadFights();
    }, []);

    useEffect(() => {
        const results = filteredFights(allFights, searchText);
        const limitedResults = results.slice(0, 10); 
        
        setFilteredData(limitedResults);
    }, [allFights, searchText]);


    return (
        <LoadingEffect show={isLoading} isError={!!isError} error={isError} className="flex w-full justify-center">
            <div aria-label="Card" className="card bg-base-100 shadow w-full">
                <div className="card-body p-0">
                    
                    <div className="mt-1 overflow-auto">
                        <table className="table table-sm *:text-nowrap">
                            <thead>
                                <tr>
                                    <th>Red Fighter</th>
                                    <th>Date</th>
                                    <th>Blue Fighter</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredData.length > 0 ? (
                                    filteredData.map((fightData, index) => (
                                        <tr key={index} className="hover:bg-red-500/20 cursor-pointer" onClick={() => handleSelectFight(fightData.id!, user_id!)}>
                                            <td>{fightData.red_fighter_name}</td>
                                            <td>{fightData.event_date}</td> 
                                            <td>{fightData.blue_fighter_name}</td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={3} className="text-center py-4 text-base-content/60">
                                            {isLoading ? "Loading Fights..." : "No matching fights found."}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                    
                </div>
            </div>
        </LoadingEffect>
    );
};
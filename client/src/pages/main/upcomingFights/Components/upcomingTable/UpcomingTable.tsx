import { UpcomingTR } from "./UpcomingTR";
import type { UpcomingFight } from "@/models/types";
import axios from "axios";
import { LoadingEffect } from "@/components/LoadingEffect";
import { SearchBar } from "@/components/SearchBar/SearchBar";

import { useSearchTable } from "@/hooks/useSearchTable";
import { PageControl } from "@/components/SearchBar/PageControl";
import { filteredFights } from "@/utils/searchFunctions";

const fetchUpcomingFights = async (): Promise<UpcomingFight[]> => {
    const response = await axios.get("http://127.0.0.1:8000/fights/upcoming")
    return response.data
}


export const UpcomingTable = () => {

const {
        isLoading,
        isError,
        error,
        paginatedData,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        totalPages
    } = useSearchTable<UpcomingFight>({ 
        queryKey: ["upcomingFights"],
        queryFn: fetchUpcomingFights,
        filterFn: filteredFights 
    });


    return (
        <LoadingEffect show={isLoading} isError={isError} error={error?.message} className="flex w-3/5 justify-center ml-35">
            <div aria-label="Card" className="card bg-base-100 shadow">
                <div className="card-body p-0">
                    <div className="flex items-center justify-between gap-2 px-5 pt-5">
                            <span className="
                                iconify lucide--handshake
                                bg-gradient-to-r from-rose-500 via-orange-600 to-red-600 
                                "/>
                            
                            <span className="
                                grow font-medium 
                                bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600 
                                bg-clip-text text-transparent
                            ">
                                Upcoming Fights
                            </span>
                            
                            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>
                        </div>
                    <div className="mt-1 overflow-auto">
                        <table className="table *:text-nowrap">
                            <thead>
                                <tr>
                                    <th>Red Fighter</th>
                                    <th>Red Record</th>
                                    <th>Date</th>
                                    <th>Blue Record</th>
                                    <th>Blue Fighter</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedData?.map((fightData, index) => (
                                    <UpcomingTR {...fightData} key={index} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <PageControl currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
                </div>
            </div>
        </LoadingEffect>
    );
};

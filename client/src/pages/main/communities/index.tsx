import { CommunityList } from "./components/CommunityList";
import { CommunityDetails } from "./components/CommunityDetails"; // Import the new file
import { useSelector } from "react-redux";
import type { RootState } from "@/contexts/store";

export default function Communities() {
    const selectedCommunity = useSelector((state: RootState) => state.community.selectedCommunity);
    const hasSelected = selectedCommunity !== null;

    return(
        <div className="flex flex-col lg:flex-row w-full gap-6 p-4 h-[calc(100vh-4rem)]"> 
            
            <div className="w-full lg:w-3/5 overflow-y-auto">
                <CommunityList/>
            </div>

            <div className="w-full lg:w-2/5 h-full">
                <div className="card bg-base-100 border border-base-200 shadow h-full max-h-full">
                    <div className="card-body p-4 sm:p-6 overflow-hidden">
                        {!hasSelected ? (
                            <div className="flex flex-col items-center justify-center h-full text-center opacity-60">
                                <span className="iconify lucide--layout-list size-12 mb-2"/>
                                <h2 className="card-title">Community Details</h2>
                                <p className="text-sm">Select a community to view more...</p>
                            </div>
                        ) : (
                            <CommunityDetails/> 
                        )}
                    </div>
                </div>
            </div>

        </div>
    );
}
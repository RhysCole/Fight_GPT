import { useEffect, useState } from "react"; // 1. Import useEffect and useState
import { useSelector } from "react-redux";
import { fetchAllCommunities } from "@/hooks/useCommunity";
import type { RootState } from "@/contexts/store";
import { CommunityCard } from "./CommunityCard";

// It is good practice to define helper functions outside the component
async function FAC(){
    await fetchAllCommunities();
}

export function CommunityList() {
    const communities = useSelector((state: RootState) => state.community.comunities);
    const userID = useSelector((state: RootState) => state.user.profile?.id);
    
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            await FAC();
            setIsLoading(false); // Turn off loading when done
        };

        loadData();
    }, []);

    if (isLoading) {
        return <div className="p-10 text-center">Loading Communities...</div>;
    }

    if (!communities || communities.length === 0) {
        return <div>No communities found.</div>;
    }

    return(
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {communities.map((community) => (
                <CommunityCard 
                    key={community.id} 
                    community={community} 
                    userID={userID}
                />
            ))}
        </div>
    )
}
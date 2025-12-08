import axios from "axios";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import store from "@/contexts/store";
import { loadComminities } from "@/contexts/slices/communitySlice";

type CreateCommunityArgs = {
    community_name: string;
    user_id: number;
    fight_id: number;
};


const createCommunity = async ({ community_name, user_id, fight_id }: CreateCommunityArgs) => {
    try {
        const res = await axios.post(`http://127.0.0.1:8000/community/create?name=${community_name}&fight_id=${fight_id}&creator_user_id=${user_id}`)
        return res.data
    } catch (e){
        console.error(e);
        throw e; 
    }
}

export const useCreateCommunity = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (variables: CreateCommunityArgs) => createCommunity(variables),
        onSuccess: (data) => {
            console.log("Community created successfully:", data);
            queryClient.invalidateQueries({ queryKey: ["communities"] });
        },
        onError: (error: any) => {
            console.error("Failed to create community:", error.response?.data || error.message);
        }
    });
}


export const fetchAllCommunities = async () => {
    try {
        const res = await axios.get("http://127.0.0.1:8000/community/all");
        store.dispatch(loadComminities(res.data));
        return res.data
    } catch (e) {
        console.error("Error fetching communities:", e);
        throw e;
    }
}

type JoinCommunityArgs = {
    community_id: number;
    user_id: number;
    bet: number; 
};

const joinCommunity = async ({ community_id, user_id, bet }: JoinCommunityArgs) => {

    try {
        const res = await axios.post(
            `http://127.0.0.1:8000/community/join?community_id=${community_id}&user_id=${user_id}&bet=${bet}`
        );
        return res.data;
    } catch (e: any) {
        console.error(e);
        throw e;
    }
}

export const useJoinCommunity = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (variables: JoinCommunityArgs) => joinCommunity(variables),
        onSuccess: () => {
            // Refetch the list immediately so the UI updates from "Join" to "Joined"
            queryClient.invalidateQueries({ queryKey: ["communities"] });
        },
        onError: (error: any) => {
            console.error("Failed to join community:", error.message);
        }
    });
}
import axios from "axios"; 
import { useMutation, useQueryClient } from "@tanstack/react-query";

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
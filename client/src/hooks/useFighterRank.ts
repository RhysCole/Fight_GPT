import { useQuery } from '@tanstack/react-query';
import axios from "axios";

const fetchPastFights = async (fighterId: number) => {
    if (!fighterId) {
        return null;
    }

    try {
        const res = await axios.get(`http://127.0.0.1:8000/fighters/rank?fighter_id=${fighterId}`);
        
        return res.data;

    } catch (error) {
        throw new Error(error.response?.data?.error || error.message || 'Failed to fetch past fights');
    }
};

export const useFighterRank = (fighterId: number) => {
    return useQuery({
        queryKey: ['rank', fighterId],
        queryFn: () => fetchPastFights(fighterId), 
        enabled: !!fighterId,
    });
};
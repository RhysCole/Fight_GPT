import store from "@/contexts/store";
import { setVoteState, setVoted, showInsights } from "@/contexts/slices/fightSlice";
import { resetCommunity } from "@/contexts/slices/communitySlice";
import { selectFight } from "@/utils/selectFight";
import axios from "axios";



async function getVoteData(fightId: number, user_id: number | undefined) {
    const response = await axios.get(`http://127.0.0.1:8000/fights/vote_check?fight_id=${fightId}&user_id=${user_id}`);
    return response.data;
}

export async function handleSelectFight(id: number, user_id: number) {
        store.dispatch(setVoteState(-1))
        store.dispatch(setVoted(false));
        store.dispatch(showInsights(false));
        store.dispatch(resetCommunity());
        selectFight(id, false);

        try {
            const voteData = await getVoteData(id, user_id);
            console.log(voteData)

            store.dispatch(setVoteState(
                voteData.length > 0 ? voteData[0].vote : -1
            ));

            if (voteData.length > 0) {
                store.dispatch(setVoted(true));
            }
            else{
                store.dispatch(setVoted(false))
            }

        } catch (error) {
            console.error("Failed to get vote data:", error);

        }
    }
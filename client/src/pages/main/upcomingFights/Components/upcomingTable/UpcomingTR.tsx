import type { UpcomingFight } from "@/models/types";

import { selectFight } from "@/utils/selectFight";
import { useSelector } from "react-redux";
import type { RootState } from "@/contexts/store";
import axios from "axios";
import store from "@/contexts/store";
import { setVoteState, setVoted, showInsights } from "@/contexts/slices/fightSlice";


async function getVoteData(fightId: number, user_id: number | undefined) {
    const response = await axios.get(`http://127.0.0.1:8000/fights/vote_check?fight_id=${fightId}&user_id=${user_id}`);
    return response.data;
}

export const UpcomingTR = ({ event_date, red_fighter_name, red_fighter_record, blue_fighter_name, blue_fighter_record, id }: UpcomingFight) => {

    const user_id = useSelector((state: RootState) => state.user.profile?.id);

    async function handleRowClick() {
        store.dispatch(setVoteState(-1))
        store.dispatch(setVoted(false));
        store.dispatch(showInsights(false));
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

    return (
        <tr className="cursor-pointer hover:bg-gradient-to-r hover:from-rose-500/20 hover:via-fuchsia-600/20 hover:to-red-600/20" onClick={handleRowClick}>
            <td className="flex items-center space-x-3 truncate">
                <p>{red_fighter_name}</p>
            </td>
            <td className="font-medium">{red_fighter_record.split(" ")[1]}</td>
            <td className="text-base-content/80 text-sm"><div className="badge badge-error badge-sm badge-soft">{event_date}</div></td>
            <td className="font-medium">{blue_fighter_record.split(" ")[1]}</td>
            <td className="flex items-center space-x-3 truncate">
                <p>{blue_fighter_name}</p>
            </td>
        </tr>
    );
};

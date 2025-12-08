import type { UpcomingFight } from "@/models/types";

import { useSelector } from "react-redux";
import type { RootState } from "@/contexts/store";
import { handleSelectFight } from "@/utils/handleSelectFight";


export const UpcomingTR = ({ event_date, red_fighter_name, red_fighter_record, blue_fighter_name, blue_fighter_record, id }: UpcomingFight) => {

    const user_id = useSelector((state: RootState) => state.user.profile?.id);



    return (
        <tr className="cursor-pointer hover:bg-gradient-to-r hover:from-rose-500/20 hover:via-fuchsia-600/20 hover:to-red-600/20" onClick={() => handleSelectFight(id!, user_id!)}>
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

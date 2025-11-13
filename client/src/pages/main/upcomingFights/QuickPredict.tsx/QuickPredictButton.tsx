import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "@/contexts/store"
import { useMemo } from "react";
import { setVoteState } from "@/contexts/slices/fightSlice";

const data = [
    {
        badge: "lucide--flame",
        class: "error",
        text: "VOTE RED",
        selectionClass: 'border-red-500 bg-red-500/10 text-red-500'
    },
    {
        badge: "lucide--droplet",
        class: "primary",
        text: "VOTE BLUE",
        selectionClass: 'border-blue-500 bg-blue-500/10 text-blue-500'
    },
    {
        badge: "lucide--tree-pine",
        class: "secondary",
        text: "VOTE DRAW",
        selectionClass: 'border-grey-500 bg-grey-500/10 text-grey-500'
    }
]

export function QuickPredictButton({ buttonIndex }) {
    const { red_vote, blue_vote, draw_vote } = useSelector((state: RootState) => state.fights.fightData);
    const { voted, voteIndex} = useSelector((state: RootState) => state.fights);
    const dispatch = useDispatch()

    const isSelected = voteIndex === buttonIndex

    const { count, percentage } = useMemo(() => {
        const all = [red_vote, blue_vote, draw_vote];
        const count = all[buttonIndex] || 0;
        const total = all.reduce((acc, currentVal) => acc + currentVal, 0);

        const percentage = (total === 0) ? 0 : (count / total) * 100;

        return { count, total, percentage };
    }, [red_vote, blue_vote, draw_vote, buttonIndex]);

    function handleClick(){
        dispatch(setVoteState(buttonIndex))
    }

    return (
        <button onClick={handleClick} disabled={voted}>
            <div className={`
                rounded-box cursor-pointer border p-3 transition-all 
                ${isSelected 
                    ? data[buttonIndex].selectionClass /* <--- THIS IS THE FIX */
                    : 'border-base-200 hover:bg-base-200/50'
                }
            `}>
                <div className="flex items-center gap-2">
                    <span className={`iconify ${data[buttonIndex].badge} text-${data[buttonIndex].class} size-4.5`}></span>
                    <p className="text-sm">{data[buttonIndex].text}</p>
                </div>
                <div className="mt-2.5 flex items-end justify-between gap-2">
                    <p className="text-lg/none font-medium">{percentage.toFixed(0)}%</p>
                    <p className={`text-${data[buttonIndex].class} text-sm/none`}>{`${count} total votes`}</p>
                </div>
            </div>
        </button>
    )
}
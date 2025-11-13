import { useSelector } from "react-redux";
import { type RootState } from "@/contexts/store";

import { QuickPredictButton } from "./QuickPredictButton";
import { VoteButton } from "./VoteButton";

export const QuickPredict = () => {

    const fightData = useSelector((state: RootState) => state.fights.fightData)

    return (
        <div className="card bg-base-100 shadow">
            <div className="p-5">
                <div className="flex items-center gap-3">
                    <span className="iconify lucide--heart-pulse size-4"></span>
                    <p className="grow font-medium">Quick Predict</p>
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    <QuickPredictButton buttonIndex={0}/>

                    <QuickPredictButton buttonIndex={1}/>

                    <QuickPredictButton buttonIndex={2}/>

                    <VoteButton />
                </div>
            </div>
        </div>
    );
};

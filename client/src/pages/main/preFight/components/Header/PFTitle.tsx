import type { RootState } from "@/contexts/store";
import { useSelector } from "react-redux";

export function PRTitle(){
    const { blue_fighter_name, red_fighter_name } = useSelector((state: RootState) => state.fights.fightData)

    return (
        <div className="flex flex-wrap items-end gap-3 sm:gap-6 xl:gap-12">
            <div className="from-primary to-error inline-block bg-gradient-to-tr  bg-clip-text text-xl font-semibold tracking-tight text-transparent sm:text-3xl">
                <p className="mt-1">{"Here’s an overview of The Prefight Data"}</p>
            </div>
        </div>
    );
};

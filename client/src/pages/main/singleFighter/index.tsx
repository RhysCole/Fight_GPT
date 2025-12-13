import type { RootState } from "@/contexts/store"
import { useSelector } from "react-redux"
import { FighterBoard } from "./components/FighterBoard";

export default function SingleFighterPage() {
    const fighterData = useSelector((state: RootState) => state.fighters.stats); 
    const isFighterSelected = fighterData && Object.keys(fighterData).length > 0;

    return (
        <div className=" p-8"> 
            {!isFighterSelected ? (
                <div className="text-center">
                    <span className="iconify lucide--thumbs-down text-base-content/50 size-16 mx-auto mb-4" />
                    <h2 className="text-2xl font-semibold text-base-content/80">
                        No Fighter Selected
                    </h2>
                    <p className="text-base text-base-content/60 mt-2">
                        Please use the search bar to select a fighter
                    </p>
                </div>
            ) : (
                <div>
                    <FighterBoard stats={fighterData}/>
                </div>
            )}
        </div>
    )
}
import { DominaceChart } from "./components/DominanceChart/DomincanceChart";
import { EloModal } from "./components/EloGraphs/EloModal";

export default function PreFightPage() {
    return (
        <div className="flex h-screen">
            <div className="w-1/2 bg-blend-color mr-4 flex flex-col gap-4 overflow-y-auto">
                <EloModal/>
            </div>
            <div className="w-1/4 bg-blend-color mr-4 flex flex-col gap-4 overflow-y-auto">
                <DominaceChart/>
            </div>
        </div>
        
    )
}
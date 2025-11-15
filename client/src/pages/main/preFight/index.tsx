import { PreFightButtons } from "./components/Buttons/PreFightButtons";
import { DominaceChart } from "./components/DominanceChart/DomincanceChart";
import { EloModal } from "./components/EloGraphs/EloModal";
import { InfoCards } from "./components/Header/InfoCards";
import { PRTitle } from "./components/Header/PFTitle";
import { ComparisonBar } from "./components/RankingComparison/ComparisonBar";
import { StyleChart } from "./components/StyleChart/StyleChart";

export default function PreFightPage() {
    return (
        <div>
            <div className="mb-3">
                <PRTitle />
                <div className="mt-2 py-2">
                    <InfoCards />
                </div>
            </div>

            <div className="flex">
                <div className="w-1/2 bg-blend-color flex flex-col gap-4 overflow-hidden">
                    <EloModal />
                </div>

                <div className="w-1/2 flex flex-col gap-4 ml-3">

                    <div className="flex h-57 gap-4">
                        <div className="flex-1 bg-base-100 overflow-y-auto mr-3 ml-1.5">
                            <StyleChart />
                        </div>
                        <div className="flex-1 bg-base-100 overflow-y-auto">
                            <DominaceChart />
                        </div>
                    </div>

                    <div className="ml-1.5 ">
                        <ComparisonBar />
                    </div>

                    <div className="ml-1.5">
                        <PreFightButtons/>
                    </div>
                </div>
            </div>
        </div>
    );
}
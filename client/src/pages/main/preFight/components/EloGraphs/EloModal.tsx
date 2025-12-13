import { EloOverTimeChart } from "./EloOverTimeChart"
import { useSelector } from "react-redux"
import { type RootState } from "@/contexts/store"

export function EloModal() {
    const { red_fighter, blue_fighter } = useSelector((state: RootState) => state.fights.preFightData)


    return (
        <div className="card bg-base-100 shadow">
            <div className="flex items-center justify-between mt-4 ml-4">
                <span className="text-3xl">Elo Graphs</span>
            </div>
            <div className="card-body px-0 pb-0">
                <div className="px-6">
                    <div className="flex justify-between">
                        <div>
                            <div className="flex items-center gap-3">
                                <button className="text-4xl 
                                    grow font-medium 
                                    bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600 
                                    bg-clip-text text-transparent">{red_fighter.elo_rating.toFixed(2)}</button>
                            </div>
                            <span className="text-base-content/60 text-sm">red current elo</span>
                        </div>

                        <div className="text-right"> 
                            <div className="flex items-center gap-3 justify-end">
                                <button className="text-4xl 
                                    grow font-medium 
                                    bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 
                                    bg-clip-text text-transparent">{blue_fighter.elo_rating.toFixed(2)}</button>
                            </div>
                            <span className="text-base-content/60 text-sm">blue current elo</span>
                        </div>

                    </div>
                </div>
                <div>
                    <EloOverTimeChart />
                </div>
            </div>
        </div>
    )
}
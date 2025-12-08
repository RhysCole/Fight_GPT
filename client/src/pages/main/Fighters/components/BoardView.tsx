import { useState } from "react";
import { FighterOptions } from "./FighterOptions";
import { Rankings } from "./charts/Rankings";
import { RivalryChart } from "./charts/RivalryChart";

export const BoardView = () => {
    const [activeStat, setActiveStat] = useState<string>("elo");

    const statsList = [
       { id: "elo", type: "Ranking", title: "Elo Leaderboard", description: "Global rankings calculated by win/loss performance FROM ALL OF TIME.", icon: "lucide--trophy" },
       { id: "quality", type: "Analysis", title: "Quality Score", description: "Ratings based on technical skill and fight excitement.", icon: "lucide--star" },
       { id: "rivalry", type: "History", title: "Active Rivalries", description: "Fighters with a recorded history of conflict.", icon: "lucide--swords" },
       { id: "activity", type: "Statistics", title: "Fight Activity", description: "Frequency of bouts and recent arena appearances.", icon: "lucide--activity" },
    ];

    const renderContent = () => {
        switch (activeStat) {
            case "elo": return <Rankings typeIndex={0} />;
            case "quality": return <Rankings typeIndex={1} />;
            case "rivalry": return <RivalryChart/>;
            default: return <div>Placeholder</div>;
        }
    };

    return (
        <div className="grid grid-cols-12 gap-6 w-full">
            
            <div className="col-span-12 md:col-span-4 xl:col-span-3">
                <div className="grid grid-cols-1 gap-4 h-full">
                    {statsList.map((stat) => (
                        <FighterOptions
                            key={stat.id}
                            {...stat}
                            selected={activeStat === stat.id}
                            onClick={() => setActiveStat(stat.id)}
                        />
                    ))}
                </div>
            </div>

            <div className="col-span-12 md:col-span-8 xl:col-span-6">
                <div className="h-full">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};
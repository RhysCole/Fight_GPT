import { useSelector } from "react-redux";
import { InfoCard } from "./InfoCard";
import type { RootState } from "@/contexts/store";
import { StatCard } from "./StatCard";

export function InfoCards(){
    const {red_fighter , blue_fighter, prediction, features} = useSelector((state: RootState) => state.fights.preFightData);
    const data = [red_fighter, blue_fighter];


    return(
        <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
            {data.map((item, index) => 
                <InfoCard key={index} 
                title={ index > 0 ? "Blue Fighter" : "Red Fighter"} 
                text={item.name} 
                record={`${item.record} \u00A0\u00A0\u00A0\u00A0\u00A0 Age: ${index > 0 ? Math.floor(features.red_age) : Math.floor(features.blue_age)}`} 
                icon={'lucide--hand-fist'} 
                colourIndex={index}/>
            )}
            <InfoCard 
                title='FightGPT Win Prediction'
                text={prediction > 0.5 ? "Red Fighter Winner" : "Blue Fighter Winner"}
                record={prediction > 0.5 ? "Blue failed the super concious mind, Who has an accurcy of 80.3% just to stay humble" : "Red failed the super concious mind, Who has an accurcy of 80.3% just to stay humble"}
                icon={'lucide--audio-lines'}
                colourIndex={prediction > 0.5 ? 0 : 1}
            />
            <StatCard/>
        </div>
    )
}
import { useSelector } from "react-redux";
import { type RootState } from "@/contexts/store";

export function HeadToHead(){
    const { fighterImageURLS, fightData, loading} = useSelector((state: RootState) => state.fights)
    

    return (
        <div className="card bg-base-100 shadow-xl w-full flex flex-row gap-6">
            <div className="card-body flex-row items-center justify-around p-6 w-1/2">
                
                <div className="flex-1 flex justify-center">
                    {loading ? (
                        <div className="skeleton h-40 w-40 rounded-full"></div>
                    ) : (
                        <img 
                            src={fighterImageURLS ? fighterImageURLS[0] : 'https://static.wikia.nocookie.net/villains/images/8/83/Fat_Bastard.PNG/revision/latest?cb=20180902160300'} 
                            alt={fightData?.red_fighter_name} 
                            className="h-40 w-40 object-contain" 
                        />
                    )}
                </div>

                <div className="flex-1 text-center">
                    <h2 className="text-2xl font-bold">{fightData?.red_fighter_name}</h2>
                    <h1 className="text-4xl font-bold text-red-500 my-2">VS</h1>
                    <h2 className="text-2xl font-bold">{fightData?.blue_fighter_name}</h2>
                    <p className="text-md text-base-content/70 mt-3">{fightData?.event_date}</p>
                </div>

                <div className="flex-1 flex justify-center">
                    {loading ? (
                        <div className="skeleton h-40 w-40 rounded-full"></div>
                    ) : (
                        <img 
                            src={fighterImageURLS ? fighterImageURLS[1]: 'https://static.wikia.nocookie.net/villains/images/8/83/Fat_Bastard.PNG/revision/latest?cb=20180902160300'} 
                            alt={fightData?.blue_fighter_name} 
                            className="h-40 w-40 object-contain" 
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
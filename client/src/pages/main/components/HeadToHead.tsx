import { useSelector } from "react-redux";
import { type RootState } from "@/contexts/store";

const colourClasses = [
    'bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600',
    'bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300'
];

export function HeadToHead() {
    const { fighterImageURLS, fightData, loading } = useSelector((state: RootState) => state.fights)


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
                    <h2 className={`text-2xl font-bold inline-block bg-clip-text text-transparent ${colourClasses[0]}`}>
                        {fightData?.red_fighter_name}
                    </h2>

                    <h1 className="text-4xl font-bold my-2">VS</h1>

                    <h2 className={`text-2xl font-bold inline-block bg-clip-text text-transparent ${colourClasses[1]}`}>
                        {fightData?.blue_fighter_name}
                    </h2>

                    <p className="text-md text-base-content/70 mt-3">{fightData?.event_date}</p>
                </div>

                <div className="flex-1 flex justify-center">
                    {loading ? (
                        <div className="skeleton h-40 w-40 rounded-full"></div>
                    ) : (
                        <img
                            src={fighterImageURLS ? fighterImageURLS[1] : 'https://static.wikia.nocookie.net/villains/images/8/83/Fat_Bastard.PNG/revision/latest?cb=20180902160300'}
                            alt={fightData?.blue_fighter_name}
                            className="h-40 w-40 object-contain"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}
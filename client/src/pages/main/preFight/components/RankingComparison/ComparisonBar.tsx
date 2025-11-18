import type { RootState } from "@/contexts/store";
import  { useSelector } from "react-redux";
import { useFighterRank } from "@/hooks/searchHooks/useFighterRank"; 

const colourClasses = [
  'bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600',
  'bg-gradient-to-r from-cyan-400 via-blue-400 to-sky-300'
];

export function ComparisonBar(){
  const { red_fighter_id, blue_fighter_id, red_fighter_name, blue_fighter_name } = useSelector((state: RootState) => state.fights.fightData)

  const { data: red_rank } = useFighterRank(red_fighter_id);
  const { data: blue_rank } = useFighterRank(blue_fighter_id);
  console.log(red_rank, blue_rank);

  return (
      <div className="card bg-base-100 shadow xl:col-span-2">
        <div className="card-body gap-3">
        <p className="text-base-content/80 font-medium text-center">Fighter Ranking Comparison</p>

        <div className="flex items-center w-full mt-2">

          <div className="flex-1 text-center">
            <p className="text-sm text-base-content/80 truncate mb-2">{red_fighter_name}</p>
            <p className="text-lg font-semibold">
              <span className={`inline-block bg-clip-text text-transparent ${colourClasses[0]} text-3xl`}>
                {`Rank #${red_rank}`}
              </span>
            </p>
          </div>

          <div className="flex-shrink-0 px-4">
            <p className="text-xl font-bold text-base-content/60">VS</p>
          </div>

          <div className="flex-1 text-center">
            <p className="text-sm text-base-content/80 truncate">{blue_fighter_name}</p>
            <p className="text-lg font-semibold">
              <span className={`inline-block bg-clip-text text-transparent ${colourClasses[1]} text-3xl`}>
                {`Rank #${blue_rank}`}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
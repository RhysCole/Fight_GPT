import { UpcomingTable } from "./Components/upcomingTable/UpcomingTable"
import { HeadToHead } from "./Components/fightOverview/HeadToHead"

import { useSelector } from "react-redux"
import { type RootState } from "@/contexts/store"
import { QuickPredict } from "./QuickPredict.tsx/QuickPredict";
import { GetInsights } from "./Components/getInsights/getInsights";

export default function UpcomingFights() {
  const { loading, fightId } = useSelector((state: RootState) => state.fights);

  return (
    <div className="flex h-screen">
      <div className="w-2/5 bg-blend-color mr-4 flex flex-col gap-4 overflow-y-auto">
        {fightId && !loading && 
        <>
          <HeadToHead />
          <QuickPredict />
          <GetInsights />
        </>
        }
      </div>
      <div className="w-3/5 bg-base-100 p-4 overflow-y-auto mb-40">
        <UpcomingTable />
      </div>
    </div>
  );
}

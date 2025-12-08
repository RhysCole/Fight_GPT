import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleSelectFight } from "@/utils/handleSelectFight";
import { setCommunity } from "@/contexts/slices/communitySlice";
import { JoinModal } from "../../components/JoinCommunityModal";

interface CommunityProps {
    community: {
        id: number;
        name: string;
        fight_id: number;
        event_date: string;
        members: any[];
    }
    userID: number | undefined
}

const colorClass = "bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600 bg-clip-text text-transparent"

export function CommunityCard({ community, userID }: CommunityProps) {
    
    const [isJoinModalOpen, setJoinModalOpen] = useState(false);

    const isJoined = community.members.some((member) => member.user_id === userID);
    const dispatch = useDispatch();

    return (
        <>
            <div className="card bg-base-100 shadow h-70 border border-base-200">
                <div className="card-body flex flex-col gap-2">

                    <div>
                        <div className="flex items-start justify-between gap-2 text-sm">
                            <div>
                                <p className="text-base-content/80 font-medium ">
                                    Fight #{community.fight_id}
                                </p>
                                <div className="mt-2 flex items-center gap-2">
                                    <p className={`text-2xl font-bold truncate max-w-[200px] ${colorClass}`} title={community.name}>
                                        {community.name}
                                    </p>
                                </div>
                            </div>

                            <div className="bg-base-200 rounded-box flex items-center p-2 text-base-content/70">
                                <span className="iconify lucide--users size-5" />
                                <span className="ml-2 text-xs font-bold">
                                    {community.members.length}
                                </span>
                            </div>
                        </div>

                        <p className="text-base-content/60 text-sm mt-2">
                            <span className="font-medium text-base-content">
                                {community.event_date}
                            </span>
                        </p>
                    </div>

                    <div className="flex-grow"></div>

                    <div className="rounded-[calc(var(--radius-box)+2px)] bg-gradient-to-r from-red-600 via-rose-500 to-orange-500 p-px max-sm:hidden mb-3">
                        <button 
                            className="btn btn-sm w-full bg-base-100 text-xs border-none" 
                            onClick={() => {
                                handleSelectFight(community.fight_id, userID!); 
                                dispatch(setCommunity(community));
                            }}
                        >
                            Community Info
                        </button>
                    </div>

                    <div>
                        <button 
                            disabled={isJoined}
                            onClick={() => setJoinModalOpen(true)} 
                            className={`btn w-full text-xl font-bold ${isJoined ? 'btn-disabled bg-base-200 text-base-content/40' : 'btn-soft btn-error'}`}
                        >
                            {isJoined ? "Joined" : "Join"}
                        </button>
                    </div>

                </div>
            </div>

            <JoinModal 
                isOpen={isJoinModalOpen}
                onClose={() => setJoinModalOpen(false)}
                communityId={community.id}
                fightId={community.fight_id}
                communityName={community.name}
            />
        </>
    );
}
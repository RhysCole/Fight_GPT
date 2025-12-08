import { useSelector } from "react-redux";
import type { RootState } from "@/contexts/store";

export function CommunityDetails() {
    const community = useSelector((state: RootState) => state.community.selectedCommunity);

    if (!community) return null;

    const getBetBadge = (bet: string) => {
        if (bet === "Red") return "badge-error text-white"; 
        if (bet === "Blue") return "badge-info text-white"; 
        return "badge-ghost"; 
    };

    return (
        <div className="flex flex-col h-full gap-4">
            
            <div className="bg-base-200/50 rounded-xl p-4 flex flex-col gap-3">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-bold">{community.name}</h3>
                        <span className="text-xs text-base-content/60 uppercase tracking-wider font-bold">
                            Community Details
                        </span>
                    </div>
                    <div className="badge badge-neutral">ID: {community.id}</div>
                </div>

                <div className="grid grid-cols-2 gap-2 mt-1">
                    <div className="bg-base-100 p-2 rounded-lg border border-base-200">
                        <p className="text-xs text-base-content/60">Event Date</p>
                        <p className="font-medium text-sm">{community.event_date || "TBD"}</p>
                    </div>
                    <div className="bg-base-100 p-2 rounded-lg border border-base-200">
                        <p className="text-xs text-base-content/60">Fight ID</p>
                        <p className="font-medium text-sm">#{community.fight_id}</p>
                    </div>
                    <div className="bg-base-100 p-2 rounded-lg border border-base-200 col-span-2">
                        <p className="text-xs text-base-content/60">Creator User ID</p>
                        <div className="flex items-center gap-2">
                            <span className="iconify lucide--crown size-3 text-warning"/>
                            <p className="font-medium text-sm">{community.created_by_user_id}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex-grow flex flex-col min-h-0">
                <div className="flex items-center justify-between mb-2 px-1">
                    <h4 className="font-bold text-sm text-base-content/70">
                        Member List ({community.members.length})
                    </h4>
                </div>

                <div className="overflow-y-auto flex-grow border border-base-200 rounded-xl bg-base-100">
                    <table className="table table-pin-rows table-xs sm:table-sm">
                        <thead>
                            <tr className="bg-base-200">
                                <th>Name</th>
                                <th>Role</th>
                                <th className="text-right">Bet</th>
                            </tr>
                        </thead>
                        <tbody>
                            {community.members.length > 0 ? (
                                community.members.map((member: any) => (
                                    <tr key={member.user_id} className="hover">
                                        <td>
                                            <div className="flex flex-col">
                                                <span className="font-medium">{member.name}</span>
                                                {member.user_id === community.created_by_user_id && (
                                                    <span className="text-[10px] text-warning flex items-center gap-1">
                                                        <span className="iconify lucide--crown size-3"/> Owner
                                                    </span>
                                                )}
                                            </div>
                                        </td>
                                        <td>
                                            <span className={`badge badge-sm ${member.role === 'admin' ? 'badge-neutral' : 'badge-ghost'}`}>
                                                {member.role}
                                            </span>
                                        </td>
                                        <td className="text-right">
                                            <span className={`badge badge-sm ${getBetBadge(member.bet)}`}>
                                                {member.bet}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={3} className="text-center py-4 text-base-content/50">
                                        No members found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
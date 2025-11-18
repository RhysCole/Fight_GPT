import { useSelector } from "react-redux'
import type { RootState } from "@/contexts/store"
import axios from "axios"

async function fetchFightCommunities(fightId: number) {
    try {
        const res = await axios.get(`http://127.0.0.1:8000/community/byFightID?fight_id=${fightId}`)
        return res.data
    } catch (e) {
        throw new Error("error fetching fight communities")
        console.error(e)
    }
}

export function JoinCommunityTable() {
    user_id = useSelector((state: RootState) => state.user.profile?.id)

    return (
        <div aria-label="Card" className="card bg-base-100 shadow">
            <div className="card-body p-0">
                <div className="flex items-center justify-between gap-2 px-5 pt-5">
                    <span className="
                                        iconify lucide--handshake
                                        bg-gradient-to-r from-rose-500 via-orange-600 to-red-600 
                                        "/>

                    <span className="
                                        grow font-medium 
                                        bg-gradient-to-r from-rose-500 via-fuchsia-600 to-orange-600 
                                        bg-clip-text text-transparent
                                    ">
                        Communities
                    </span>

                </div>
                <div className="mt-1 overflow-auto">
                    <table className="table *:text-nowrap">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Created</th>
                                <th>Info</th>
                                <th>Join</th>
                                <th>Leave</th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </div>
                <PageControl currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
            </div>
        </div>
    )
}
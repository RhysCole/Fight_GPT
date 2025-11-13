import {  setVoted } from "@/contexts/slices/fightSlice"
import { useSelector } from "react-redux"
import { type RootState } from "@/contexts/store"
import store from "@/contexts/store"

import axios from "axios"


function handleVote(fight_id: number, user_id: number){  
    const voteIndex = store.getState().fights.voteIndex

    if(voteIndex < 0) return

    axios.post(`http://127.0.0.1:8000/fights/vote?fight_id=${fight_id}&user_id=${user_id}&vote=${voteIndex}`)  

    store.dispatch(setVoted(true))
}

export function VoteButton(){
    const {fightId, voted, voteIndex} = useSelector((state: RootState) => state.fights)
    const userID = useSelector((state: RootState) => state.user.profile?.id)

    return (
        <button 
        className={`
            border-base-200 hover:bg-base-200/50 rounded-box 
            cursor-pointer border p-3 transition-all 
            btn-soft btn py-9
            ${voted ? 'btn-success' : (voteIndex! < 0 ? 'btn-success' : 'btn-warning')}
        `} 
        onClick={() => handleVote(fightId!, userID!)}
        disabled={voted}
        >
            {voted ? 'VOTED' : (voteIndex < 0 ? 'CHOOSE VOTE' : 'SUBMIT VOTE')} 
        </button>
    )
}
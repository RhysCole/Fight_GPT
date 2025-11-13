import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/contexts/store";
import { showInsights, setPreFightData, setRedHistory, setBlueHistory } from "@/contexts/slices/fightSlice"
import axios from "axios";

async function getPreFightData(red_fighter_id: number, blue_fighter_id: number, event_date: string){ 
    const preFightData = await axios.get(`http://127.0.0.1:8000/fights/pre_fight_data?red_fighter_id=${red_fighter_id}&blue_fighter_id=${blue_fighter_id}&event_date=%27${event_date}%27`)
    const red_fighter_history = await axios.get(`http://127.0.0.1:8000/fights/history?fighter_id=${red_fighter_id}`)
    const blue_fighter_history = await axios.get(`http://127.0.0.1:8000/fights/history?fighter_id=${blue_fighter_id}`)

    return { preFightData: preFightData.data, red_fighter_history: red_fighter_history.data, blue_fighter_history: blue_fighter_history.data }
}

export function GetInsights() {
    const dispatch = useDispatch()
    const { red_fighter_id, blue_fighter_id, event_date} = useSelector((state: RootState) => state.fights.fightData)

    async function handleClick() {
        const preFightData = await getPreFightData(red_fighter_id, blue_fighter_id, event_date);
        
        dispatch(setPreFightData(preFightData.preFightData))
        dispatch(setRedHistory(preFightData.red_fighter_history))
        dispatch(setBlueHistory(preFightData.blue_fighter_history))
        dispatch(showInsights(true));
    }

    return (
        <button className="btn text-primary-content from-error to-secondary relative z-1 gap-2 border-none bg-gradient-to-r py-8"
        onClick={handleClick}>
            <span className="iconify lucide--sparkles size-4.5"></span>
            <span className="text-base">FIGHT_GPT INSIGHTS</span>
        </button>
    )
}
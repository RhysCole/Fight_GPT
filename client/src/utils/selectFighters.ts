import axios from "axios";
import store from "@/contexts/store";

import { setFighterId, setFighterList, setLoading, setError, setFighterStats } from "@/contexts/slices/fightersSlice";

export async function fetchFightersList(){
    store.dispatch(setLoading(true));
    try {
    const response = await axios.get(`http://127.0.0.1:8000/fighters/all`);
        const fightersList = response.data;
        store.dispatch(setFighterList(fightersList))
        store.dispatch(setLoading(false));
    }
    catch (err) {
        store.dispatch(setError(err.message))
    }
}

export async function selectFighter(id: number){
    try {
        const response = await axios.get(`http://127.0.0.1:8000/fighters/info?fighter_id=${id}`);
        const fighterInfo = response.data;
        store.dispatch(setFighterId(id))
        store.dispatch(setFighterStats(fighterInfo))
        store.dispatch(setLoading(false))
    } catch (err) {
        store.dispatch(setError(err.message));
    }
}
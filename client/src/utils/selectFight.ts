import axios from "axios";

import store from "@/contexts/store";
import { setFightData, setFightId, setLoading, setError, setFighterImageURLS, setPreFightData } from "@/contexts/slices/fightSlice";

import { fetchImageURL } from "./fighterImageAPI";

async function fetchFightData(fightId: number, completed: boolean) {
  const response = await axios.get(
    `http://127.0.0.1:8000/fights/id?fight_id=${fightId}&completed=${completed}`
  );
  return response.data;
}

async function getURLs(fightData, completed: boolean){
    try{
        const redImgURL = await fetchImageURL(completed ? fightData.Name : fightData.red_fighter_name); 
        const blueImgURL = await fetchImageURL(completed ? fightData.Name : fightData.blue_fighter_name);

        store.dispatch(setFighterImageURLS([redImgURL, blueImgURL]));
    }catch(err){
        store.dispatch(setError(err.message));
        console.error("error fetching fighter images");
    }
}

async function getPreFightData(red_fighter_id: number, blue_fighter_id: number, event_date: string){
    const response = await axios.get(`http://127.0.0.1:8000/fights/pre_fight_data?
    red_fighter_id=${red_fighter_id}
    &blue_fighter_id=${blue_fighter_id}
    &event_date=%27${event_date}%27`);

    return response.data;
}

export async function selectFight(fightId: number, completed: boolean) {
  try {
    store.dispatch(setLoading(true));
    const fightData = await fetchFightData(fightId, completed);

    store.dispatch(setFightData(fightData[0]));
    store.dispatch(setFightId(fightId));
    getURLs(fightData[0], completed);

  } catch (err) {
    store.dispatch(setError(err.message));
  } finally {
    store.dispatch(setLoading(false));
  }
}

export async function getFightData(red_fighter_id: number, blue_fighter_id: number, event_date: string){
    try {
        store.dispatch(setLoading(true));
        const fightData = await getPreFightData(red_fighter_id, blue_fighter_id, event_date);
        store.dispatch(setPreFightData(fightData));

    } catch (err) {
        store.dispatch(setError(err.message));
    } finally {
        store.dispatch(setLoading(false));
    }
}


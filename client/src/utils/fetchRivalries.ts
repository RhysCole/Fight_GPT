import axios from "axios";

export async function getRivalries() {
    const response = await axios.get("http://127.0.0.1:8000/fights/rivalry");
    return response.data;
}

export async function getRivalryFights(red_fighter_id: number, blue_fighter_id: number) {
    const response = await axios.get(`http://127.0.0.1:8000/fights/RFights?red_fighter_id=${red_fighter_id}&blue_fighter_id=${blue_fighter_id}`);
    return response.data;
}
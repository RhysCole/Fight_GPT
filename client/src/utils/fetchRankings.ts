import axios from "axios"
export async function fetchRanking(count: number, optionID: number){
    const response = await axios.get(`http://127.0.0.1:8000/fighters/top?count=${count}&option=${optionID}`)
    return response.data
}
import type { PastFight } from "@/models/types";

interface fighterData {
    event_date: string,
    elo: number
}

export function parseFights(red_fights: PastFight[], id: number): fighterData[] {
    return red_fights.map(fight => {return { event_date: fight.event_date, elo: id === fight.red_fighter_id ? fight.red_fighter_elo_after : fight.blue_fighter_elo_after};})
}

function getLastFight(fights: fighterData[], date: Date) {
    const prevFights = fights
    .filter(fight => new Date(fight.event_date) < date)
    .sort((a, b) => new Date(a.event_date).getTime() - new Date(b.event_date).getTime());

    const elo = prevFights[prevFights.length - 1]?.elo || 1500

    return elo;
}

export function getDataPoints(redFightData: PastFight[], blueFightData:PastFight[], red_id: number, blue_id: number){
    const redData = parseFights(redFightData, red_id)
    const blueData = parseFights(blueFightData, blue_id)

    const dates = [ ...redData, ...blueData].map(data => data.event_date)
    
    const eloPoints = dates.map((data) => {
        const date = new Date(data);
        const redElo = getLastFight(redData, date);
        const blueElo = getLastFight(blueData, date);
        return { redEloPoints: redElo, blueEloPoints: blueElo }
    })

    return { dates, eloPoints };
}
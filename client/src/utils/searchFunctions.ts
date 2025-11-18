import { type UpcomingFight } from "@/models/types";


export function filteredFights(fights: UpcomingFight[], query: string){
    const searchTerms = query.toLowerCase().split(' ').filter(term => term);

    if(searchTerms.length === 0){
        return fights;
    }

    try{
        return fights.filter(fight => {
            const fullName = `${fight.red_fighter_name} ${fight.blue_fighter_name}`.toLowerCase();
            return searchTerms.every(term => fullName.includes(term));
        })
    } catch (error){
        console.error(error);
        return fights;
    }
}   

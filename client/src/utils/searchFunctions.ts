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

export function filteredFighters(fighters: FighterInfo[], query: string): FighterInfo[] {
    const searchTerms = query.toLowerCase().split(' ').filter(term => term.length > 0);

    if (searchTerms.length === 0) {
        return fighters.slice(0, 8);
    }

    try {
        return fighters.filter(fighter => {
            const fighterName = fighter.Name.toLowerCase();
            return searchTerms.every(term => fighterName.includes(term));
        }).slice(0, 8);
    } catch (error) {
        console.error("Error during fighter filtering:", error);
        return fighters.slice(0, 8);
    }
}

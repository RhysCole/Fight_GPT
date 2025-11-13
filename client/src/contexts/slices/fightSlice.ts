import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { PastFight, UpcomingFight } from "@/models/types";

import type { PreFightData } from "@/models/types";

interface upcomingState{
    fightId: number | null;
    fightData: UpcomingFight | null;
    fighterImageURLS: string[] | null;
    preFightData: PreFightData | null;
    completed: boolean | null;
    voteIndex: number;
    voted: boolean;
    viewInsights: boolean;
    red_fighter_history: PastFight[] | null,
    blue_fighter_history: PastFight[] | null, 
    loading: boolean | null;
    error: string | null;
}

const initialState: upcomingState = {
    fightId: null,
    fightData: null,
    fighterImageURLS: null,
    preFightData: null,
    completed: null,
    voteIndex: -1,
    voted: false,
    loading: false,
    viewInsights: false,
    red_fighter_history: null,
    blue_fighter_history: null,
    error: null,
}

const fightSlice = createSlice({
    name: "upcoming",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setFightId: (state, action: PayloadAction<number>) => {
            state.fightId = action.payload;
        },
        setPreFightData: (state, action: PayloadAction<PreFightData>) => {
            state.preFightData = action.payload;
        },
        setFightData: (state, action: PayloadAction<UpcomingFight>) => {
            state.fightData = action.payload;
        },
        setFighterImageURLS: (state, action: PayloadAction<string[]>) => {
            state.fighterImageURLS = action.payload;
        },
        setVoteState: (state, action: PayloadAction<number>) => {
            state.voteIndex = action.payload;
        },
        setVoted: (state, action: PayloadAction<boolean>) => {
            state.voted = action.payload;
        },
        showInsights: (state, action: PayloadAction<boolean>) => {
            state.viewInsights = action.payload;
        },
        setRedHistory: (state, action: PayloadAction<PastFight[]>) => {
            state.red_fighter_history = action.payload;
        },
        setBlueHistory: (state, action: PayloadAction<PastFight[]>) => {
            state.blue_fighter_history = action.payload;
        },
        clearFightState: () => initialState
    }
})

export const { setFightId, setFightData, setFighterImageURLS , clearFightState, setLoading, setError, setPreFightData, setVoteState, setVoted, showInsights, setRedHistory, setBlueHistory} = fightSlice.actions;
export default fightSlice.reducer;
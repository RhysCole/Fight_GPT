import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { FighterInfo, FighterStats } from "@/models/types";

interface FightersState {
    id: number | null;
    stats: FighterStats[] | null;
    fightersList: FighterInfo[] | null;
    loading: boolean | null;
    error: string | null;
}

const initialState: FightersState = {
    id: null,
    stats: null,
    fightersList: null,
    loading: false,
    error: null
}

const fightersSlice = createSlice({
    name: "fighters",
    initialState,
    reducers: {
        setFighterId: (state, action: PayloadAction<number>) => {
            state.id = action.payload;
        },
        setFighterList: (state, action: PayloadAction<FighterInfo[]>) => {
            state.fightersList = action.payload;
        },
        setFighterStats: (state, action: PayloadAction<FighterStats[]>) => {
            state.stats = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        resetState: (state) => {
            state.id = null;
            state.fightersList = null;
            state.stats = null;
            state.loading = false;
            state.error = null;
        }
    },
})

export const { setFighterId, setFighterList, setLoading, setError, setFighterStats, resetState } = fightersSlice.actions;
export default fightersSlice.reducer;
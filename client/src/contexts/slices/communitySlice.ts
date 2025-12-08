import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Community } from "@/models/types";


interface CommunityState{
    comunities: Community[];
    selectedCommunity: Community | null;
    loading: boolean | null;
    error: string | null;
}

const initialState: CommunityState = {
    comunities: [],
    selectedCommunity: null,
    loading: false,
    error: null,
}

const communitySlice = createSlice({
    name: "community",
    initialState,
    reducers: {
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        loadComminities: (state, action: PayloadAction<Community[]>) => {
            state.comunities = action.payload;
        },
        setCommunity: (state, action: PayloadAction<Community>) => {
            state.selectedCommunity = action.payload;
        },
        resetCommunity: (state) => {
            state.selectedCommunity = null;
        },
    }
})

export default communitySlice.reducer;
export const { setLoading, setError, loadComminities, setCommunity, resetCommunity } = communitySlice.actions;
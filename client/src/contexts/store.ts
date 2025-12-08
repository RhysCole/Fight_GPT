import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/contexts/slices/userSlice";
import fightSlice from "@/contexts/slices/fightSlice"; 
import communitySlice from "@/contexts/slices/communitySlice";


const store = configureStore({
    reducer:{ 
        user: userSlice,
        fights: fightSlice,
        community: communitySlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "@/contexts/slices/userSlice";
import fightSlice from "@/contexts/slices/fightSlice"; 


const store = configureStore({
    reducer:{ 
        user: userSlice,
        fights: fightSlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

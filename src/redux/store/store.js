import {configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../reducer/userSlice.js";

export const store = configureStore({
    reducer:{
        user:userSlice.reducer
    }
})
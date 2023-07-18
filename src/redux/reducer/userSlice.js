import {createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const userSlice = createSlice({
    name:"user",
    initialState: {list:[]},
    reducers:{
        setValue:(state,action)=>{
            state.list = action.payload
        },
        get:(state,action)=>{
            return state.list
        },
        find:(state,action)=>{
            return state.list.filter(user=>user.id == action.payload)
        }
    }
})
export const {setValue,get,find} = userSlice.actions
export default userSlice.reducer
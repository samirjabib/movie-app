import { createSlice } from "@reduxjs/toolkit";


export const appStateSlice = createSlice({
    name:"app",
    initialState:{
        appState:"",
        openNav:null
    },
    reducers:{
        setOpenNav : ( state, { payload }) => {
           state.openNav = payload  
        },
    }
})


export const {
    setOpenNav
} = appStateSlice.actions;



import { createSlice } from "@reduxjs/toolkit";


export const appStateSlice = createSlice({
    name:"AppState",
    initialState:{
        appState:"",
        openNav:null
    },
    reducers:{
        setAppState: (state, { paylaod }) => {
            state.appState = paylaod
        }
    }
})


export const {
    setAppState
} = appStateSlice.actions;



import { configureStore } from "@reduxjs/toolkit";

import { appStateSlice } from './features'


export const store = configureStore({
    reducer:{
        appState: appStateSlice
    }
});


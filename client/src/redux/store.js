import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { tmdbApi } from "./api";
import { appStateSlice } from './features'


export const store = configureStore({
    reducer:{
        appState: appStateSlice.reducer,

        [tmdbApi.reducerPath] : tmdbApi.reducer,        
    },
    middleware:(getDefaultMiddleware) => getDefaultMiddleware()
        .concat ( tmdbApi.middleware )
});


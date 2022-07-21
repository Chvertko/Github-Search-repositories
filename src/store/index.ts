import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { githubApi } from "./gitHub/gitHub.api";
import { gtiHubReducer } from "./gitHub/gitHub.slice";

export const store = configureStore({
    reducer:{
        [githubApi.reducerPath]:githubApi.reducer,
        gitHub: gtiHubReducer

    },
    middleware:getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware) 
})

setupListeners(store.dispatch)


export type RootState = ReturnType<typeof store.getState>
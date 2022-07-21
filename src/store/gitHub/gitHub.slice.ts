import { createSlice, PayloadAction } from "@reduxjs/toolkit"
const LS_FAV_KEY = 'rfk'

export interface GithubState{
    favorites:string[]
}

const initialState:GithubState = {
    favorites:JSON.parse(localStorage.getItem(LS_FAV_KEY)?? '[]') 
}
export const gitHubSlice = createSlice({
    name:'gitHub',
    initialState,
    reducers:{
        addFavorites(state,action:PayloadAction<string>){
            state.favorites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY,  JSON.stringify(state.favorites) )
        },
        removeFavorites(state,action:PayloadAction<string>){
            state.favorites=state.favorites.filter(f => f !== action.payload)
            localStorage.setItem(LS_FAV_KEY,  JSON.stringify(state.favorites) )
        }

    }
})

export const gtiHubActions = gitHubSlice.actions
export const gtiHubReducer = gitHubSlice.reducer

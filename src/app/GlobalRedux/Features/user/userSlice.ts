'use client'

import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "@/utils/models/types"

//local storage
const INITIAL_STATE: UserState = {
    firstName : null,
    lastName : null,
    token : null,
    remenberMe: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers:{
        connection : (state, action) => { 
            state.token = action.payload.token 
            state.remenberMe = action.payload.remenberMe

            const connexion = JSON.stringify({token: action.payload.token, remenberMe: action.payload.remenberMe})

            const tokenInLocalStorage = localStorage.getItem('connexion')
            if(!tokenInLocalStorage) localStorage.setItem('connexion', connexion)
        },
        initUserData: (state, action) => {

            const firstName = action.payload.firstName
            const lastName = action.payload.lastName

            state.firstName = firstName
            state.lastName = lastName
        },
        updateUserData : (state, action) => { 

            const firstName = action.payload.firstName
            const lastName = action.payload.lastName

            state.firstName = firstName
            state.lastName = lastName
        },
        logOut : (state) => { 
            state.firstName = null
            state.lastName = null
            state.token = null
            state.remenberMe = false
        },
    }
})

export const { connection, logOut, initUserData, updateUserData } = userSlice.actions

export default userSlice.reducer
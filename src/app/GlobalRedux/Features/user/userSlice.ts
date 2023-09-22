'use client'

import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "@/utils/models/types"

//local storage
const initialState: UserState = {
    firstName : '',
    lastName : '',
    token : '',
    remenberMe: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
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
        logout : (state) => {  },
    }
})

export const { connection, logout, initUserData, updateUserData } = userSlice.actions

export default userSlice.reducer
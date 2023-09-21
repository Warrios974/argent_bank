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
        },
        updateUser: (state, action) => {

            const firstName = action.payload.firstName
            const lastName = action.payload.lastName

            state.firstName = firstName
            state.lastName = lastName
        },
        logout : (state) => {  },
    }
})

export const { connection, logout, updateUser } = userSlice.actions

export default userSlice.reducer
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
        logout : (state) => {  },
    }
})

export const { connection, logout } = userSlice.actions

export default userSlice.reducer
'use client'

import { createSlice } from "@reduxjs/toolkit"
import { UserState } from "@/utils/models/types"

const initialState: UserState = {
    id : 'string',
    name : 'string',
    isConnected : false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        connection : (state) => { state.isConnected = true;},
        logout : (state) => { state.isConnected = false },
    }
})

export const { connection, logout } = userSlice.actions

export default userSlice.reducer
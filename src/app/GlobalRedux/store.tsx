'use client'

import { configureStore, applyMiddleware } from "@reduxjs/toolkit"
import userReducer from "./Features/user/userSlice"
import thunkMiddleware from "redux-thunk"
import { customMiddleware } from "./middleware"


export const store = configureStore({
    reducer:{
        user: userReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(thunkMiddleware, customMiddleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

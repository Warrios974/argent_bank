'use client'

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { Connexion, UserState } from "@/utils/models/types"

//local storage
const INITIAL_STATE: UserState = {
    firstName : null,
    lastName : null,
    token : null,
    loading : null,
    error: null,
}

// Créez une action asynchrone avec createAsyncThunk
export const fetchUserData = createAsyncThunk('user/fetchUserData', async (token : string) => {
  try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: "POST",
        headers: new Headers({ 'Authorization' : `Bearer ${token}` }),
      });
      console.log(await response.status);
      const data = await response.json();
      return data;
    } catch (error) {
      throw error; // Lancez l'erreur pour qu'elle soit gérée par createAsyncThunk
    }
});

export const fetchConnexionUser = createAsyncThunk('user/fetchConnexionUser', async ({email, password}: Connexion) => {
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/login', {
        method: "POST", 
        headers: new Headers({ 'Content-Type': 'application/json'}),
        body: JSON.stringify({
          "email": email,
          "password": password,
        })
      })
      const data = await response.json()
      return data;
      } catch (error) {
        throw error; // Lancez l'erreur pour qu'elle soit gérée par createAsyncThunk
      }
});

export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers:{
        connexion : (state, action) => { 
            state.token = action.payload.token 

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
        },
    },
    extraReducers: (builder) => {
        // Gérez les actions asynchrones créées par createAsyncThunk
        builder
          .addCase(fetchUserData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchUserData.fulfilled, (state, action) => {
            state.loading = false;
            state.firstName = action.payload.body.firstName
            state.lastName = action.payload.body.lastName
          })
          .addCase(fetchUserData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          })
    }
})

export const { connexion, logOut, initUserData, updateUserData } = userSlice.actions

export default userSlice.reducer
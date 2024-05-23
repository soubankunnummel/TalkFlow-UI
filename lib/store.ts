'use client'

import {configureStore} from '@reduxjs/toolkit'
import statusSlice from './feature/status/statusSlice';
import postSlice from './feature/post/postSlice';
 

export const  store = configureStore({
    reducer:{
        status:statusSlice,
        post:postSlice,
    }
})

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState;
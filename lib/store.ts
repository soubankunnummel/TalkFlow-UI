'use client'

import {configureStore} from '@reduxjs/toolkit'
import statusSlice from './feature/status/statusSlice';
 

export const  store = configureStore({
    reducer:{
        status:statusSlice,
    }
})

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState;
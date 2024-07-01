'use client'

import {configureStore} from '@reduxjs/toolkit'
import statusSlice from './feature/status/statusSlice';
import postSlice from './feature/post/postSlice';
import useSlice from './feature/users/useSlice';
 

export const  store = configureStore({
    reducer:{
        status:statusSlice,
        post:postSlice,
        user:useSlice,
    }
})

export type RooteState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.getState;
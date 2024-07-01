'use client'

import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface UserStatus  {
    isLogdin:Boolean,
    token: string | boolean
    subToken :string | boolean
}

const initialState: UserStatus = {
    isLogdin:false,
    token:false,
    subToken:false

}  
 
export const statusSclice = createSlice ({
    name: "status",
    initialState,
    reducers:{
        setLogged: (state, action :PayloadAction<boolean>) => {
            state.isLogdin = action.payload;

        }, 
        setToken: (state, action :PayloadAction<boolean> ) => {
            state.token = action.payload;

        }
         
    }

})

export const {setLogged,setToken  } =  statusSclice.actions;
export default statusSclice.reducer;
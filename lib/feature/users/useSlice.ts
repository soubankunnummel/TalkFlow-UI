import { createSlice } from "@reduxjs/toolkit" ;

interface userSlice {
    currentUsre: any ;
}

const initialState :userSlice = {
    currentUsre : ''
}

 const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setCurrentser: (state, action) => {
            state.currentUsre = action.payload;
            }
    }

})

export const {setCurrentser} = userSlice.actions
export default userSlice.reducer
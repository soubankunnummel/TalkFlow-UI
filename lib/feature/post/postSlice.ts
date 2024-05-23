import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  _id: string;
  username: string;
  name:string
}


interface PostDetails {
    _id: string;
    postedBy: User;
    text: string;
    img?: string;  
    likes: string[];
    comments: string[];
    createdAt: string;
 
  }
  



  interface PostState {
    posts: PostDetails[];
  }
  
  const initialState: PostState = {
    posts: [],
  };
  
  const postSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
      setPosts: (state, action: PayloadAction<PostDetails[]>) => {
        state.posts = action.payload;
      },
    },
  });
  
  export const { setPosts } = postSlice.actions;
  export default postSlice.reducer;
  
 
import Axios from "../config/axios";


/// GET USER PROFILE ////
export const getUserProfile = async (username:any)=>{

    try {
        const res = await Axios.get(`/userprofile/${username}`)
        return res;
    } catch (error) {
        return error
        
    }
}


/////// GET ALL USERS //////
 
export const getAllUsers = async () => { 
    try {
        const res = await Axios.get('/allusers')
        return res

    } catch (error) {
        return error
    }
}



////////// GET CURRENT USER ///////////////

export const getCurrentUser = async () => {
    try {
       const res = await Axios.get('/currentuser') 
       return res
    } catch (error) {
        return error
        
    }
}



  

///////////// FOLLOW UNFOLLOW //////////////

export const followUnfollow = async (username:any) => {
    console.log(username)
    try {
        const res = await Axios.post(`/follow-unfollow/${username}`)
        return res
    } catch (error) {
        return error
    }
}
import Axios from "../config/axios"


//////////// GET POSTS //////////

export const getPosts = async() => {
    try {
        const res = await Axios.get('/post')
        return res
    } catch (error) {
        return error
    }
}


////////// LIKE UNLIKE //////////

export const likeUnlike = async (id:string) => {
    try {
        const res = await Axios.post(`/like-unlike/${id}`) 
        return res
    } catch (error) {
        return error
    }
}


/////////// CHECK LIKE /////////

export const checkLike = async(id:string) => {
    try {
        const res = await Axios.post(`/like-state/${id}`)
        return res
    } catch (error) {
        return error
    }
}
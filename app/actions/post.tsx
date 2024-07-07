import Axios from "../config/axios"


//////////// GET Random POSTS //////////

export const getPosts = async() => {
    try {
        const res = await Axios.get('/post')
        return res
    } catch (error) {
        return error
    }
}


// << --- get feed posts -->>

export const getFeed = async () => {
    try {
        const res = await Axios.get("/feed-post")
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


//// <<< -  create post ->>>> ///////


export const cretePost = async (formData:FormData) => {
    
    try {
        const res = await Axios.post('/post',formData,
            {
                headers:{
                    "Content-Type":"multipart/form-data"
                }
            }
        )
        return res
    } catch (error) {
        return error
        
    }

}
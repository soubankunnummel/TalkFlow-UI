import Axios from "../config/axios"


export const UserLogin = async (data:object) => {
    try {
        const res = await Axios.post('/login',data)
        if(res.status === 200){
            return res.data
        }
    } catch (error) {

        // console.log(error)
        return error 
    }
}
export const UserSignUp = async (data:object) => {
    try {
        const res = await Axios.post('/signup',data)
        if(res.status === 200){
            return res.data
        }
    } catch (error) {

        // console.log(error)
        return error 
    }
}


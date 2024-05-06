import axios from 'axios'
import Cookie from 'js-cookie'

const Axios = axios.create({
    baseURL:'http://localhost:8000/api',
    // baseURL:'https://talk-flow-sever2.onrender.com',
    headers:{
        "Content-Type":"application/json",
        Authorization: Cookie.get("token")
    }


})

Axios.interceptors.request.use(
    (config) => {
        const token = Cookie.get("token")
        if (!!token){
            config.headers["Authorization"]= `Bearer ${token}`;  
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default Axios
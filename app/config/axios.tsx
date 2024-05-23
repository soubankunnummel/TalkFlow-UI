
import axios from 'axios';
import Cookie from 'js-cookie';

const Axios = axios.create({
    baseURL:  process.env.NODE_ENV === 'production' 
              ? 'https://talk-flow-sever2.onrender.com' 
              : 'http://localhost:8000/api',
    headers:{
        "Content-Type": "application/json",
        Authorization: Cookie.get('token')
    }
 
});

Axios.interceptors.request.use(
    (config) => {
        const token = Cookie.get("token");
        if (token) {
            config.headers["Authorization"] = token; 
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default Axios;

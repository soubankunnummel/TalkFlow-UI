
'use client'
import Image from "next/image";
import React from "react";
import header from "@/public/svg/header.svg";
import {useForm} from 'react-hook-form'
import { UserLogin } from "@/app/actions/auth";
import {useRouter} from 'next/navigation'
import Cookies from 'js-cookie'
import { useDispatch } from "react-redux";
import { setLogged } from "@/lib/feature/status/statusSlice";
import { toast } from "sonner";

interface LoginForm {
  username: string
  password: string;
}


function Login() {
  const dispatch = useDispatch()
  const token = Cookies.get("token")
  
  const {register,handleSubmit,setError} = useForm<LoginForm> ()
  const  router = useRouter();

  const onsubmit = async (data:LoginForm) => {
  const res = await UserLogin(data) 
  if(res?.response?.status === 401){
    return toast.error(res.response.data.error)
  }else {
    Cookies.set("token",res.token);
    dispatch(setLogged(true))
     router.push('/')
  }
   
  } 



  return (
    <div className="flex justify-center  flex-col  items-center h-screen relative">
      {/* //////// header ////////// */}
      <div className=" flex justify-center items-center absolute top-0  px-4 ">
        <Image alt="header_img" src={header} className="w-full" />
      </div>

      {/* login Form  */}
      <div className="  w-[370px] h-[407.5px] mt-[100px]  rounded-md z-10 py-8 ">
        <form action="" className="flex flex-col gap-y-4 justify-center h-full" onSubmit={handleSubmit(onsubmit)}>
          <input
            type="text"
            // name="username"
            id=""
            className="w-[370px] h-[55px] rounded-[12px] p-4 text-white  placeholder:text-[#999999] font-roboto outline-none bg-[#1E1E1E] "
            placeholder="Username"
            {...register("username",{required:true})}
          />
          <input
            type="password"
            id=""
            className="w-[370px] h-[55px] rounded-[12px] p-4 text-white  placeholder:text-[#999999] font-roboto outline-none bg-[#1E1E1E]  "
            placeholder="Password"
            {...register("password",{required:true})}
          />
          <input
            type="submit"
            value="Login"
            name=""
            id=""
            className="w-[370px] hover:text-black h-[55px] rounded-[12px] p-4 text-[#999999] bg-white  "
          />
          <h1 className="text-[#999999] text-center text-[14px] ">Forgot Password</h1>
         <div className="flex justify-between items-center gap-x-5">
         <div className="w-1/2 h-[0.5px] bg-border "></div> <span>or</span> <div className="w-1/2 h-[0.5px] bg-border"></div>
         </div>

        </form>
        <button>google</button>
      </div>
    </div>
  );
}



export default Login;

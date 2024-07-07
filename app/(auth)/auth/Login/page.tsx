'use client'
import React from "react";
// import AuthForm from "./AuthForm";
import { UserLogin } from "@/app/actions/auth";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setLogged } from "@/lib/feature/status/statusSlice";
import { useRouter } from 'next/navigation';
import { toast } from "sonner";
import AuthForm from "../AuthForm";

function Login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async (data: any) => {
    const res = await UserLogin(data);
    if (res?.response?.status === 401) {
      throw new Error(res.response.data.error);
    } else {
      Cookies.set("token", res.token);
      dispatch(setLogged(true));
      router.push('/');
    }  
  };

  return <AuthForm type="login" onSubmit={handleLogin} />;
}

export default Login;
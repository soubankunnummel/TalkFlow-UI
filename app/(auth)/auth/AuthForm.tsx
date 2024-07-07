import Image from "next/image";
import React from "react";
import header from "@/public/svg/header.svg";
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setLogged } from "@/lib/feature/status/statusSlice";
import { toast } from "sonner";
import Link from "next/link";

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (data: any) => Promise<void>;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleFormSubmit = async (data: any) => {
    try {
      await onSubmit(data);
      if (type === 'login') {
        dispatch(setLogged(true));
        router.push('/');
      } else {
        toast.success("Sign up successful. Please log in.");
        router.push('/auth/Login');
      }
    } catch (error: any) {
      toast.error(error.message || "An error occurred");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center h-screen relative">
      <div className="flex justify-center items-center absolute top-0 px-4">
        <Image alt="header_img" src={header} className="w-full" />
      </div>

      <div className="w-[370px] mt-[100px] rounded-md z-10 py-8">
        <form className="flex flex-col gap-y-4 justify-center" onSubmit={handleSubmit(handleFormSubmit)}>
          {type === 'signup' && (
            <input
              type="text"
              className="w-full h-[55px] rounded-[12px] p-4 text-white placeholder:text-[#999999] font-roboto outline-none bg-[#1E1E1E]"
              placeholder="Full Name"
              {...register("name", { required: true })}
            />
          )}
          <input
            type="text"
            className="w-full h-[55px] rounded-[12px] p-4 text-white placeholder:text-[#999999] font-roboto outline-none bg-[#1E1E1E]"
            placeholder="Username"
            {...register("username", { required: true })}
          />
          {type === 'signup' && (
            <input
              type="email"
              className="w-full h-[55px] rounded-[12px] p-4 text-white placeholder:text-[#999999] font-roboto outline-none bg-[#1E1E1E]"
              placeholder="Email"
              {...register("email", { required: true })}
            />
          )}
          <input
            type="password"
            className="w-full h-[55px] rounded-[12px] p-4 text-white placeholder:text-[#999999] font-roboto outline-none bg-[#1E1E1E]"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          <input
            type="submit"
            value={type === 'login' ? "Login" : "Sign Up"}
            className="w-full h-[55px] rounded-[12px] p-4 text-[#999999] bg-white hover:text-black cursor-pointer"
          />
          {type === 'login' && (
            <h1 className="text-[#999999] text-center text-[14px]">Forgot Password</h1>
          )}
        { type === 'login' &&  <div className="flex justify-between items-center gap-x-5">
          <div className="w-1/2 h-[0.5px] bg-border"></div>
          <span>or</span>
          <div className="w-1/2 h-[0.5px] bg-border"></div>
        </div>}
        </form>
       { type === 'login' && <button className="w-full mt-4 h-[55px] rounded-[12px] p-4 text-[#999999] bg-white hover:text-black">
          Sign in with Google
        </button>}


        <div className="mt-4 text-center">
          {type === 'login' ? (
            <p className="text-[#999999]">
              Don&apos;t have an account? <Link href="/auth/signup"  className="text-white hover:underline">Sign up</Link>
            </p>
          ) : (
            <p className="text-[#999999]">
              Already have an account? <Link href="/auth/Login" className="text-white hover:underline">Log in</Link>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
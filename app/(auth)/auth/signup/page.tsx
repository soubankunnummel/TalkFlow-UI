'use client'
import React from "react";
import AuthForm from "../AuthForm";
import { UserSignUp } from "@/app/actions/auth";
import { toast } from "sonner";

function SignUp() {
  const handleSignUp = async (data: any) => {
    try {
      const res = await UserSignUp(data);
      if (res?.error) {
        throw new Error(res.error);
      }
      toast.success("Sign up successful. Please log in.");
    } catch (error: any) {
      toast.error(error.message || "Sign up failed");
    }
  };

  return <AuthForm type="signup" onSubmit={handleSignUp} />;
}

export default SignUp;
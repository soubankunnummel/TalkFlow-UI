"use client";

import { followUnfollow } from "@/app/actions/user";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import Axios from "@/app/config/axios";

interface AxiosError {
  response: {
    data: {
      error: string;
    };
  };
}

interface FollowbtnProps {
  value: string;
  username: string;
}

const Followbtn = ({ value, username }: FollowbtnProps) => {
  const [text, setText] = useState(false);

  const fetchFollowState = async () => {
    try {
      const res = await Axios.get(`/follow-state/${username}`);
      setText(res.data.isFollowing);
    } catch (error) {
      const axiosError = error as AxiosError;
      toast.error(axiosError.response?.data?.error || "Failed to fetch follow state");
      console.error("Error fetching follow state:", error);
    }
  };

  useEffect(() => {
    fetchFollowState();
  }, );

  const handleFollow = async () => {
    try {
      await followUnfollow(username);
      setText((prev) => !prev);
    } catch (error) {
      const axiosError = error as AxiosError;
      toast.error(axiosError.response.data.error);
      setText(false);
      console.error("Error in follow/unfollow:", error);
    }
  };

  return (
    <button
      className={`h-[34px] ${text ? `w-[112px]` : `w-[104px]`} ${
        text ? `text-text` : `text-white`
      } flex justify-center border-border border-[1px] rounded-[10px] items-center font-roboto font-semibold text-[15px]`}
      onClick={handleFollow}
    >
      {text ? "Following" : value}
    </button>
  );
};

export default Followbtn;

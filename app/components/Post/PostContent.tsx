"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThreeDot from "@/public/assets/threedot.svg";
import UserName from "../commen/UserName";
import { checkLike, likeUnlike } from "@/app/actions/post";
import TimeAgo from "./TimeAgo";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RooteState } from "@/lib/store";
import { toast } from "sonner";
import { Notificationsocket } from "@/socket";
import axios from "axios";
import useLazyLoadImage from "@/utils/hooks/useLazyLoadImage";
import LikeSection from "./LikeSection";



interface PostContentProp {
  id: string;
  text: string;
  img?: string;
  likes: string[];
  comments: string[];
  createdAt: string;
  username: string;
  name: string;
}

function PostContent({
  text,
  img,
  likes,
  comments,
  id,
  createdAt,
  username,
  name,
}: PostContentProp) {
  const [status, setStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);
  const isLogin = useSelector((state: RooteState) => state.status.isLogdin);
  const user = useSelector((state: RooteState) => state.user.currentUsre);
  const notificationName = user?.username;

  const {ref, inView} = useLazyLoadImage()

  useEffect(() => {
    checkLike(id).then((res: any) => {
      setStatus(res?.data?.status);
    });

    if (notificationName) {
      Notificationsocket.emit("register", notificationName);
    }

    const handleNotification = (notification: any) => {
      if (notificationName !== username) {
        toast.success(notification.message);
      }
    };

    Notificationsocket.on("notification", handleNotification);

    return () => {
      Notificationsocket.off("notification", handleNotification);
    };
  }, [id, notificationName, username]);

  const handleLike = async (postId: string) => {
    if (isLogin) {
      likeUnlike(postId).then(() => {
        setStatus(!status);
        setLikeCount((prevCount: any) =>
          status ? prevCount - 1 : prevCount + 1
        );
      });

      if (notificationName && notificationName !== username) {
        try {
          await axios
            .post(
              `http://localhost:8002/api/notification/${username}`,
              {
                type: "like",
              },
              {
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
            .then((res) => console.log(res.data));
        } catch (error) {
          console.error("Error sending notification:", error);
        }
      }
    } else {
      toast.error("Please login to like post");
    }
  };

  const router = useRouter();
  const handleClick = (username: string) => {
    router.push(`/@${username}`);
  };

  return (
    <div className="flex-1 mb-4"  ref={ref} >
      {/* post user name three dots */}
      <div className="flex justify-between px-[2%] items-center h-[21px]">
        <div>
          <h4>
            <UserName username={username} name={name} onClick={handleClick} />
          </h4>
        </div>
        <div className="flex gap-x-[9.8px]">
          <h4 className="text-[14.53px] text-[#777777]">
            <TimeAgo date={createdAt} />{" "}
          </h4>
          <Image alt="ThreeDot" src={ThreeDot} />
        </div>
      </div>
      {/* three dot ending */}

      {/* post content starting */}
      <div className="flex-auto px-[2%] items-center text-start md:w-fit">
        <Link href={""}>
          <p className="mb-3">{text}</p>
        </Link>
        {img && inView && (
          <Image
            loading="lazy"
            alt="Post image"
            src={img}
            width={500}
            height={100}
            className="mb-3 rounded-lg md:w-full"
          />
        )}
      </div>
      {/* post content ending */}

      {/* Like replies share */}
      <LikeSection
       id={id}
       status={status}
       likeCount={likeCount}
       comments={comments}
       handleLike={handleLike}
      
      />
      {/* Like replies share */}

    </div>
  );
}

export default PostContent;

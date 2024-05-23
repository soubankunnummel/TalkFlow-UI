'use client'

import Image from "next/image";
import ThreeDot from "@/public/assets/threedot.svg";
import Like from "@/public/assets/like.svg";
import redLike from '@/public/assets/red-heart.svg'
import Coment from "@/public/assets/coment.svg";
import Share from "@/public/assets/shere.svg";
import Repost from "@/public/assets/repost.svg";
import Link from "next/link";
import UserName from "../commen/UserName";
import { useEffect, useState } from "react";
import { checkLike, likeUnlike } from "@/app/actions/post";
import TimeAgo from "./TimeAgo";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { RooteState } from "@/lib/store";
import { toast } from "sonner";



interface PostContentProp {
  id: string;
  text: string;
  img?: string;  
  likes: string[];
  comments: string[];
  createdAt: string;
  username: string;
  name:string
  
}

function PostContent({ text, img, likes, comments, id, createdAt , username,name }:PostContentProp) {
  const [status, setStatus] = useState(false);
  const [likeCount, setLikeCount] = useState(likes.length);
  const islogin = useSelector((state:RooteState) => state.status.isLogdin);



  useEffect(() => {

    checkLike(id).then((res:any) => {
      setStatus(res?.data?.status);
    });
  }, [id]);

  const handleLike = (postId:string) => {
     if(islogin) {

       likeUnlike(postId).then((res) => {
       
         setStatus(!status);
         setLikeCount((prevCount:any) => (status ? prevCount - 1 : prevCount + 1));
       });
     }else{
      toast.error("Please Login to like post")
     }
  };

    /////////////////// handle user profile ///////////////////////
    const Route = useRouter();
    const handleClick = (username: string) => {
      Route.push(`/@${username}`);
    };

  return (
    <div className="flex-1 mb-4">
      {/* post user name three dots */}
      <div className="flex justify-between px-[2%] items-center h-[21px]">
        <div>
          <h4><UserName username={`${username}`} name={`${name}`}  onClick={handleClick}/></h4>
        </div>
        <div className="flex gap-x-[9.8px]">
          <h4 className="text-[14.53px] text-[#777777]"><TimeAgo date={createdAt}/> </h4>
          <Image alt="Thredot" src={ThreeDot} />
        </div>
      </div>
      {/* three dot ending */}

      {/* post content starting */}
      <div className="flex-auto px-[2%] items-center text-start md:w-fit">
        <Link href={"/pages/@user/post/124"}>
          <p className="mb-3">
            {text}
          </p>
        </Link>
        {img && <Image alt="Post image" src={img} width={500} height={100} className="mb-3 rounded-lg md:w-full" />}
      </div>
      {/* post content ending */}

      {/* Like replies shere */}
      <div className="w-[195.77px] h-[28px] flex justify-evenly">
        <div onClick={() => handleLike(id)}>
          <Image alt="Like" src={status ? redLike : Like} />
        </div>
        <div>
          <Image alt="coment" src={Coment} />
        </div>
        <div>
          <Image alt="Repost" src={Repost} />
        </div>
        <div>
          <Image alt="share" src={Share} />
        </div>
      </div>
      {/* Like replies shere */}

      <div className="w-[195.77px] h-[28px] flex justify-center items-center gap-x-3">
        <div>
          <span className="text-[14.65px] text-[#777777]">{comments.length} replies</span>
        </div>
        <div>
          <span className="text-[14.41px] text-[#777777]">{likeCount} likes</span>
        </div>
      </div>
      {/* like replies share */}
    </div>
  );
}

export default PostContent;

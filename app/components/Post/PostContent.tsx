import Image from "next/image";
import ThreeDot from "@/public/assets/threedot.svg";
import car from "@/public/assets/car - bugatti.jpg";
import Like from "@/public/assets/like.svg";
import Coment from "@/public/assets/coment.svg";
import Share from "@/public/assets/shere.svg";
import Repost from "@/public/assets/repost.svg";
import PostImage from "@/public/assets/post_image.png";

import Link from "next/link";
import UserName from "../commen/UserName";

function PostContent() {
  return (
    <div className="flex-1  mb-4">
      {/* post user name three dots */}

      <div className="flex justify-between px-[2%] items-center h-[21px]  ">
        <div>
          <h4><UserName name="souban"/></h4>
        </div>
        <div className="flex gap-x-[9.8px] ">
          <h4 className="text-[14.53px] text-[#777777] ">14h</h4>
          <Image alt="Thredot" src={ThreeDot} />
        </div>
      </div>

      {/* three dot ending */}

      {/* post content starting */}

      <div className="flex-auto  px-[2%] items-center text-start md:w-fit ">
        <Link href={"/pages/@user/post/124"}>
          <p className="mb-3">
            Post texts Lorem ipsum dolor sit amet consectetur adipisicing Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quidem, quod
            libero assumenda vero in, et cum odit dicta amet aperiam illum
            labore? Dolorem obcaecati deleniti voluptas a tenetur eligendi
            delectus.
          </p>
        </Link>

        <Image alt="Post image" src={PostImage} className="mb-3 md:w-full " />
      </div>

      {/* post content ending */}

      {/* Like replies shere */}
      <div className="w-[195.77px]  h-[28px] flex justify-evenly ">
        <div>
          <Image alt="Like" src={Like} />
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
      <div className="w-[195.77px]  h-[28px] flex justify-center items-center gap-x-3">
        <div>
          <span className="text-[14.65px] text-[#777777] ">11 replies</span>
        </div>
        .
        <div>
          <span className="text-[14.41px] text-[#777777] ">1451 likes</span>
        </div>
      </div>
      {/* like riples share */}
    </div>
  );
}

export default PostContent;

'use client'
import { useSelector } from "react-redux";
import FollowForyou from "../components/Post/FollowForyou";
import Post from "../components/Post/Post";
import PostHead from "../components/Post/PostHead";
// import { RooteState } from "@/lib/store";
// import ProtectRoute from "../components/commen/ProtectRoute";

export default function Home() {
  
  return (
    <main>
      {/* <Nave /> */}
      
      <div className="flex justify-center items-center flex-col ">
        <PostHead />
        {/* <ProtectRoute/> */}
        <FollowForyou />
        <Post />
        
    
      </div>
      {/* <Footer /> */}
    </main>
  );
}

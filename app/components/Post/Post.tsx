import PostLine from "./PostLine";
import PostContent from "./PostContent";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getPosts } from "@/app/actions/post";
import { setPosts } from "@/lib/feature/post/postSlice";
import { RooteState } from "@/lib/store";

const Post: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RooteState) => state.post.posts);

  useEffect(() => {
    getPosts().then((res: any) => {
      dispatch(setPosts(res.data));
    });
  }, [dispatch]);
  return (
    <>
      {posts?.map((item,index) => (
        <div className=" w-[620px] h-auto md:w-full   p-0 md:p-[2%] "key={index}>
          <div className="h-auto  border-b-[1px] border-[#333638] flex w-full md:w-full mt-4  ">
            {/* user avathar and horizondel line */}
            <PostLine />
            <PostContent text={item.text} img={item.img} createdAt={item.createdAt} name={item.postedBy.name}
             likes={item.likes} comments={item.comments} id={item._id} username={item.postedBy.username} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;

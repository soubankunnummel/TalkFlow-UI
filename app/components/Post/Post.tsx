
import PostLine from "./PostLine";
import PostContent from "./PostContent";

function Post() {
  return (
    <div className=" w-[620px] h-auto md:w-full   p-0 md:p-[2%] ">
      <div className="h-auto  border-b-[1px] border-[#333638] flex w-full md:w-full mt-4  ">
        {/* user avathar and horizondel line */}
        <PostLine />
        <PostContent />
      </div>
    </div>
  );
} 

export default Post;

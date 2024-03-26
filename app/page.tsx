import Nave from "./components/Navebar/Nave";
import Footer from "./components/Footer/Footer";
import Post from "./components/Post/Post";
import PostHead from "./components/Post/PostHead";
import FollowForyou from "./components/Post/FollowForyou";

export default function Home() {
  return (
    <main>
      <Nave />
      <div className="flex justify-center items-center flex-col ">
        <PostHead />
        <FollowForyou />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
      <Footer />
    </main>
  );
}

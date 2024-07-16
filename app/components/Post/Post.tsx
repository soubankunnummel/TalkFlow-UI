'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed, getPosts, getUserPost } from '@/app/actions/post';
import { setPosts } from '@/lib/feature/post/postSlice';
import { RooteState } from '@/lib/store';
import PostLine from './PostLine';
import PostContent from './PostContent';
import PostSkeleton from './PostSkeleton';
import { useParams, usePathname } from 'next/navigation';


const Post: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RooteState) => state.post.posts);
  const user = useSelector((state:RooteState) => state.user.currentUsre)
 
  
  const path = useParams();
  const pathname = usePathname();
  const username = path.userId as string | undefined;
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);



  // useEffect(() => {
  //   if(user&& user?.username === username){
  //     getFeed()
  //     .then((res: any) => {
        
  //       if (Array.isArray(res.data)) {
  //         dispatch(setPosts(res.data));
         
  //         setLoading(false);
  //       } else {
  //         console.error('Received data is not an array:', res.data); 
  //         setError('Received invalid data format');
  //         setLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching posts:', err);
  //       setError('Failed to fetch posts');
  //       setLoading(false);
  //     });

  //   }else{

  //     getPosts()
  //     .then((res: any) => {
  //       if (Array.isArray(res.data)) {
  //         dispatch(setPosts(res.data));
  //         console.log(res.data)
  //         setLoading(false);
  //       } else {
  //         console.error('Received data is not an array:', res.data);
  //         setError('Received invalid data format');
  //         setLoading(false);
  //       }
  //     })
  //     .catch((err) => {
  //       console.error('Error fetching posts:', err);
  //       setError('Failed to fetch posts');
  //       setLoading(false);
  //     });
      
  //   }
  // }, [dispatch]);

  const fetchPosts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      let response:any
      if (!user) {
        // User is not logged in
        response = await getPosts();
      } else if (pathname.startsWith('/@') && pathname !== '/@' + user.username) {
        // Viewing another user's profile
        response = await getUserPost();
      } else if (pathname === '/@' + user.username) {
        // User is on their own profile page
        response = await getUserPost();
      } else {
        // User is logged in and on the main feed
        response = await getFeed();
      }

      if (Array.isArray(response.data)) {
        dispatch(setPosts(response.data));
      } else {
        throw new Error("Received invalid data format");
      }
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError("Failed to fetch posts");
    } finally {
      setLoading(false);
    }
  }, [dispatch, user, pathname]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  if (loading) {
    return (
      <div className="w-[620px] h-auto md:w-full p-0 md:p-[2%]">
        <div className="h-auto border-b-[1px] border-[#333638] flex w-full md:w-full mt-4">
          <PostSkeleton />
        </div>
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (!Array.isArray(posts) || posts.length === 0) {
    return <div className='text-center text-text mt-5'>No posts available.</div>;
  }

  return (
    <section>
      {posts.map((item, index) => (
        <div
          className="w-[620px] h-auto md:w-full p-0 md:p-[2%]"
          key={item._id || index}
        >
          <div className="h-auto border-b-[1px] border-[#333638] flex w-full md:w-full mt-4">
            <PostLine />
            <PostContent
              text={item.text}
              img={item.img}
              createdAt={item.createdAt}
              name={item.postedBy.name}
              likes={item.likes}
              comments={item.comments}
              id={item._id}
              username={item.postedBy.username}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Post;
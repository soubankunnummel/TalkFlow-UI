'use client'
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getFeed, getPosts } from '@/app/actions/post';
import { setPosts } from '@/lib/feature/post/postSlice';
import { RooteState } from '@/lib/store';
import PostLine from './PostLine';
import PostContent from './PostContent';
import PostSkeleton from './PostSkeleton';
import { useParams } from 'next/navigation';

const Post: React.FC = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: RooteState) => state.post.posts);
  const user = useSelector((state:RooteState) => state.user.currentUsre)
  const path = useParams()
  const username = path.userId
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if(user?.username === username){
      getFeed()
      .then((res: any) => {
        console.log(res)
        if (Array.isArray(res.data)) {
          dispatch(setPosts(res.data));
          setLoading(false);
        } else {
          console.error('Received data is not an array:', res.data);
          setError('Received invalid data format');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts');
        setLoading(false);
      });

    }else{

      getPosts()
      .then((res: any) => {
        if (Array.isArray(res.data)) {
          dispatch(setPosts(res.data));
          setLoading(false);
        } else {
          console.error('Received data is not an array:', res.data);
          setError('Received invalid data format');
          setLoading(false);
        }
      })
      .catch((err) => {
        console.error('Error fetching posts:', err);
        setError('Failed to fetch posts');
        setLoading(false);
      });
      
    }
  }, [dispatch]);

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
    return <div>No posts available.</div>;
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
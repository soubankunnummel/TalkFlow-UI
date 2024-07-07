import React from 'react';
import Image from 'next/image';
import Like from '@/public/assets/like.svg';
import redLike from '@/public/assets/red-heart.svg';
import Coment from '@/public/assets/coment.svg';
import Share from '@/public/assets/shere.svg';
import Repost from '@/public/assets/repost.svg';

interface LikeSectionProps {
  id: string;
  status: boolean;
  likeCount: number;
  comments: string[];
  handleLike: (postId: string) => void;
}

const LikeSection: React.FC<LikeSectionProps> = ({ id, status, likeCount, comments, handleLike }) => {
  return (
    <>
      <div className="w-[195.77px] h-[28px] flex justify-evenly">
        <div onClick={() => handleLike(id)}>
          <Image alt="Like" src={status ? redLike : Like} />
        </div>
        <div>
          <Image alt="Comment" src={Coment} />
        </div>
        <div>
          <Image alt="Repost" src={Repost} />
        </div>
        <div>
          <Image alt="Share" src={Share} />
        </div>
      </div>
      <div className="w-[195.77px] h-[28px] flex justify-center items-center gap-x-3">
        <div>
          <span className="text-[14.65px] text-[#777777]">
            {comments.length} replies
          </span>
        </div>
        <div>
          <span className="text-[14.41px] text-[#777777]">
            {likeCount} likes
          </span>
        </div>
      </div>
    </>
  );
};

export default LikeSection;

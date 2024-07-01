import React from "react";
import Image from "next/image";
import UserName from "@/app/components/commen/UserName";
import Followbtn from "@/app/components/Search/Followbtn";
import Followers from "@/app/components/commen/Followers";
import User from "@/public/assets/useravathar.svg";
import avathar from "@/public/assets/usericon.svg";

export interface UserDetails {
  name: string;
  username: string;
  email: string;
}

interface UserCardProps {
  user: UserDetails;
  onUserClick: (username: string) => void;
  isActivity: Boolean;
}

 const UserCard: React.FC<UserCardProps> = React.memo(
  ({ user, onUserClick, isActivity }) => (
    <div
      className="h-[99.67px] border-b border-border flex flex-col p-5"
      key={user.name}
    >
      <div className="flex gap-x-3">
        <div className="relative">
          {" "}
          {isActivity && (
            <Image
              alt="user icon"
              src={avathar}
              className="w-[22px] h-[22px] absolute right-0 bottom-2 "
            />
          )}
          <Image alt="user image" src={User} className="w-[36px] h-[36px]  " />
        </div>
        <div className="w-[524px] h-[50px] flex justify-between">
          <div>
            <UserName
              name={user.name}
              username={user.username}
              onClick={() => onUserClick(user.username)}
            />
            {isActivity ? (
              <h4 className="text-text text-[14.65px] font-roboto">
                Follow Suggetion
              </h4>
            ) : (
              <h4 className="text-text text-[14.65px] font-roboto">
                {user.name}
              </h4>
            )}
          </div>
          <Followbtn value="Follow" username={user.username} />
        </div>
      </div>
     { !isActivity && <Followers count={345} />}
    </div>
  )
);



UserCard.displayName = "UserCard"
export default UserCard

"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import User from "@/public/assets/useravathar.svg";
import avathar from "@/public/assets/usericon.svg";
import UserName from "@/app/components/commen/UserName";
import Followbtn from "@/app/components/Search/Followbtn";
import { getAllUsers } from "@/app/actions/user";
import { useRouter } from "next/navigation";
import  UserCard,{ UserDetails } from "@/app/components/Search/UserCard";
import { truncate } from "fs/promises";
import { UserSkelton } from "@/app/components/Search/UserSkelton";

 
export default function Activity() {
  const [users, setUsers] = useState<UserDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllUsers().then((res: any) => {
      // console.log(res);
      setLoading(false)
      setUsers(res.data);
    });
  }, []);

  /////////////////// handle user profile ///////////////////////
  const Route = useRouter();
  const handleClick = (username: string) => {
    Route.push(`/@${username}`);
  };

  return (
 

    <section className="w-full h-full flex justify-center items-center overflow-y-auto no-scrollbar">
    <div className="w-[600px] md:w-full p-0 md:p-[3%]">
     
      {loading ? (
        <UserSkelton/>
      ) : (
        users?.map((item) => (
          <UserCard key={item.username} user={item} onUserClick={handleClick} isActivity={true} />
        ))
      )}
    </div>
  </section>
  );
}

"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import SearchBar from "@/app/components/Search/SearchBar";
import { getAllUsers } from "@/app/actions/user";
import UserCard, {  UserDetails } from "@/app/components/Search/UserCard";
import {UserSkelton} from '@/app/components/Search/UserSkelton'

const Search: React.FC = () => {
  const [users, setUsers] = useState<UserDetails[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res:any = await getAllUsers();
        setUsers(res.data);
        setLoading(false)
      } catch (error) {
        console.error("Failed to fetch users:", error);
      }
    };

    fetchUsers();
  }, []);

  const handleUserClick = useCallback((username: string) => {
    router.push(`/@${username}`);
  }, [router]);

  return (
    <section className="w-full h-full flex justify-center items-center overflow-y-auto no-scrollbar">
      <div className="w-[600px] md:w-full p-0 md:p-[3%]">
        <SearchBar />
        {loading ? (
          // <div>Loading...</div>
          <UserSkelton/>
        ) : (
          users?.map((item) => (
            <UserCard key={item.username} user={item} onUserClick={handleUserClick} isActivity={false} />
          ))
        )}
      </div>
    </section>
  );
};

export default Search;
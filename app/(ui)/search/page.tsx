"use client";
import SearchBar from "@/app/components/Search/SearchBar";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import user from "@/public/assets/useravathar.svg";
import UserName from "@/app/components/commen/UserName";
import Followbtn from "@/app/components/Search/Followbtn";
import Followers from "@/app/components/commen/Followers";
import { getAllUsers, getUserProfile } from "@/app/actions/user";
import { useRouter } from "next/navigation";

interface userDetails {
  name: string;
  username: string;
  email: string;
}

const Search = () => {
  const [data, setdata] = useState<userDetails[]>([]);

  useEffect(() => {
    getAllUsers().then((res: any) => {
      // console.log(res);
      setdata(res.data);
    });
  }, []);

  /////////////////// handle user profile ///////////////////////
  const Route = useRouter();
  const handleClick = (username: string) => {
    Route.push(`/@${username}`);
  };

  return (
    <section className="w-full h-full flex justify-center items-center overflow-y-auto no-scrollbar ">
      <div className=" w-[600px] md:w-full  p-0 md:p-[3%]  ">
        <SearchBar />

        {data?.map((item) => (
          <>
            <div className="h-[99.67px] border-b border-border flex flex-col p-5  ">
              <div className="flex gap-x-3">
                <div className="w-[36px] h-[36px] ">
                  <Image
                    alt=""
                    src={user}
                    className="w-[36px] h-[36px] md:w-[40px] md:h-[40px] "
                  />
                </div>
                <div className=" w-[524px] h-[50px] flex justify-between ">
                  <div>
                    <UserName
                      name={`${item.name}`}
                      username={`${item.username}`}
                      onClick={handleClick}
                    />
                    <h4 className="text-text text-[14.65px] font-roboto ">
                      {item.name}{" "}
                    </h4>
                  </div>
                  <Followbtn value={"Follow"} username={`${item.username}`} />
                </div>
              </div>

              <Followers count={345} />
            </div>
          </>
        ))}
  
      </div>
    </section>
  );
};

export default Search;

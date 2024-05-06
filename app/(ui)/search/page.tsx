import Nave from "@/app/components/Navebar/Nave";
import SearchBar from "@/app/components/Search/SearchBar";
import Image from "next/image";
import React from "react";
import user from "@/public/assets/useravathar.svg";
import UserName from "@/app/components/commen/UserName";
import Followbtn from "@/app/components/Search/Followbtn";
import Followers from "@/app/components/commen/Followers";

function Search() {
  return (
    <section className="w-full h-full flex justify-center items-center overflow-y-auto no-scrollbar ">
      <div className=" w-[600px] md:w-full  p-0 md:p-[3%]  ">
        <SearchBar />

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
                <UserName name={"User_name"} />
                <h4 className="text-text text-[14.65px] font-roboto ">name</h4>
              </div>
              <Followbtn value={"Follow"} />
            </div>
          </div>

         <Followers count={345}/>
        </div>
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
                <UserName name={"User_name"} />
                <h4 className="text-text text-[14.65px] font-roboto ">name</h4>
              </div>
              <Followbtn value={"Follow"} />
            </div>
          </div>

          <div className="ps-[48px] text-[14.53pX] ">1234 followers</div>
        </div>
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
                <UserName name={"User_name"} />
                <h4 className="text-text text-[14.65px] font-roboto ">name</h4>
              </div>
              <Followbtn value={"Follow"} />
            </div>
          </div>

          <div className="ps-[48px] text-[14.53pX] ">1234 followers</div>
        </div>
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
                <UserName name={"User_name"} />
                <h4 className="text-text text-[14.65px] font-roboto ">name</h4>
              </div>
              <Followbtn value={"Follow"} />
            </div>
          </div>

          <div className="ps-[48px] text-[14.53pX] ">1234 followers</div>
        </div>
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
                <UserName name={"User_name"} />
                <h4 className="text-text text-[14.65px] font-roboto ">name</h4>
              </div>
              <Followbtn value={"Follow"} />
            </div>
          </div>

          <div className="ps-[48px] text-[14.53pX] ">1234 followers</div>
        </div>
      </div>
    </section>
  );
}

export default Search;

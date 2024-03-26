import Link from "next/link";
import React from "react";
import HomeBtn from "../Navebar/HomeBtn";
import SearchBtn from "../Navebar/Search";
import CreatBtn from "../Navebar/CreatBtn";
import ActivityBtn from "../Navebar/ActivityBtn";
import UserBtn from "../Navebar/UserBtn";

function Footer() {
  return (
    <nav className="fixed w-full flex justify-center items-center bottom-0 z-20 p-2 bg-primery ">
      <div className="md:w-[412px]  hidden md:flex h-[68px] justify-between   px-[2%] items-center ">
        <Link href={"/"}>
          <div>
            <HomeBtn />
          </div>
        </Link>
        <Link href={"/pages/search"}>
          <div>
            <SearchBtn />
          </div>
        </Link>
        <Link href={"/"}>
          <div>
            <CreatBtn />
          </div>
        </Link>
        <Link href={"/pages/activity"}>
          <div>
            <ActivityBtn />
          </div>
        </Link>
        <Link href={"/pages/@user"}>
          <div>
            <UserBtn />
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Footer;

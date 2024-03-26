import Image from "next/image";
import logo from "@/public/assets/logo.svg";
import Link from "next/link";
import SearchBtn from "./Search";
import HomeBtn from "./HomeBtn";
import ActivityBtn from "./ActivityBtn";
import UserBtn from "./UserBtn";
import CreatBtn from "./CreatBtn";

function Nave() {
  // const handleCreate = () => {
  //   <label htmlFor="my_modal_7"></label>;
  // };
  return (
    <nav className="sticky top-0 overflow-hidden z-40 ">
      <div className="w-full h-[78px]  flex justify-between px-[2%]  items-center md:justify-center   bg-primery">
        <Link href={"/"}>
          <div>
            <Image alt="logo" src={logo} />
          </div>
        </Link>
        <div className="w-[610px]  flex justify-evenly items-center md:hidden ">
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
          <div>
            <CreatBtn />
          </div>
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
        <div></div>
      </div>
    </nav>
  );
}

export default Nave;

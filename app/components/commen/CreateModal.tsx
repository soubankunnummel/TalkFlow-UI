"use client";
import React from "react";
import Close from "./Close";
import More from "@/public/assets/More.svg";
import Image from "next/image";
import User from "@/public/assets/useravathar.svg";
import ImageIcon from "@/public/assets/ImageIcon.svg";
import PostBtn from "../Post/PostBtn";

export default function CreateModal() {
  return (
    <>
      <dialog id="my_modal_2" className="modal md:hidden ">
        <div className="  w-[620px] h-[292.33px]  ">
          <div className="grid  grid-cols-1 grid-rows-1 p-2 bg-black rounded-t">
            <h3 className="col-start-1 row-start-1">New thead</h3>
            <Image
              alt="moge image"
              src={More}
              className="w-[24px] h-[24px] col-start-3 row-start-1  "
            />
          </div>
          <div className="rounded-[16px] border  border-border p-[5%]  bg-primery ">
            <div className="grid grid-cols-3 grid-rows-2  p-[5%]  ">
              <div className=" flex gap-x-3   ">
                <Image
                  alt="User avathar"
                  src={User}
                  className="w-[36px] h-[36px] "
                />
                <h3>Souban_Kunnummel</h3>
              </div>
              <div className="col-start-1 row-start-2  h-[36px] flex gap-x-6  items-center ">
                <div className="w-[2px] h-[32px] bg-[#333638] ms-4 "></div>
                <div className="flex flex-col ">
                  <input type="text" name="" id="" placeholder="Start new thread..." className="text-[12.3px] outline-none bg-transparent w-full text-text"/>
                  {/* <input className=" ">
                    
                  </input> */}
                  <Image alt="ImgIcon" src={ImageIcon} />
                </div>
              </div>
              <div className="col-start-1 row-start-3 h-[16px] w-[48px]  ">
                <Image
                  alt="user avathar"
                  src={User}
                  className="w-[16px] h-[16px] ms-2 "
                />
              </div>
            </div>
            <div className="flex justify-end">
              <PostBtn value="Post" />
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

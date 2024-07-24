"use client";

import User from "@/public/assets/useravathar.svg";
import ImageIcon from "@/public/assets/ImageIcon.svg";

import React, { useEffect, useRef, useState } from "react";
import UserName from "./UserName";
import Image from "next/image";
import PostBtn from "../Post/PostBtn";
import { useForm } from "react-hook-form";
import "react-confirm-alert/src/react-confirm-alert.css";
import ConfirmModal from "./ConfirmationModal";
import { cretePost } from "@/app/actions/post";
import { useDispatch, useSelector } from "react-redux";
import { addPost } from "@/lib/feature/post/postSlice";
import { RooteState } from "@/lib/store";


interface FormData {
  text: string;
  file: FileList;
}

interface CreateModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateModal: React.FC<CreateModalProps> = ({ isOpen, onClose }) => {
  const { register, handleSubmit, reset, watch } = useForm<FormData>();
  const modalRef = useRef<HTMLDivElement>(null);
  const [showConfirm, setShowConfirm] = useState(false);
  
  const textValue = watch();
  const dispatch = useDispatch();
  const posts = useSelector((state: RooteState) => state.post.posts);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        if (textValue.file) {
          setShowConfirm(true);
        } else {
          onClose();
        }
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose, textValue]);

  const handlePost = (data: FormData) => {
    const formData = new FormData();

    if ( data.text || data.file && data.file.length > 0) {
    formData.append('text', data.text);
    formData.append('image', data.file[0]);
  }

    cretePost(formData).then((res:any) =>{
      console.log(res)
      dispatch(addPost(res.data))
    })

    console.log(posts);
    onClose();
    reset();
  };

 


  const handleConfirm = () => {
    setShowConfirm(false);
    onClose();
    reset();
  };

  const handleCancel = () => {
    setShowConfirm(false);
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div
        className="rounded-2xl w-[40%] bg-[#181818] flex flex-col border-border p-5 border shadow-lg"
        ref={modalRef}
      >
        <h1 className="text-center">New thread</h1>
        <form onSubmit={handleSubmit(handlePost)}>
          <div className="flex gap-5 p-5">
            {/* User profile */}
            <div className="gap-3 flex items-center flex-col">
              <div className="w-[35px] h-[35px] rounded-full">
                <Image
                  alt="User avatar"
                  src={User}
                  className="w-[36px] h-[36px]"
                />
              </div>
              <div className="w-[1px] h-[20px] bg-gray-600"></div>
              <div className="w-[16px] h-[16px] flex justify-center items-center">
                <Image
                  alt="user avatar"
                  src={User}
                  className="w-[16px] h-[16px]"
                />
              </div>
            </div>
            {/* User profile */}

            <div className="flex flex-col">
              <UserName name="Souban" username="souban" onClick={() => {}} />
              <input
                type="text"
                id=""
                className="w-full bg-transparent outline-none placeholder:text-[12px] placeholder:text-text mb-2 text-[12px] text-text"
                placeholder="Start thread..."
                {...register("text")}
              />
              <input
                type="file"
                id="file"
                className="hidden"
                {...register("file")}
              />
              <Image
                alt="ImgIcon"
                src={ImageIcon}
                onClick={() => document.getElementById("file")?.click()}
                className="cursor-pointer"
              />
            </div>
          </div>

          <div className="flex justify-end">
            <PostBtn value="Post" />
          </div>
        </form> 
      </div>
      {showConfirm && (
        <ConfirmModal
          isOpen={showConfirm}
          title="Confirm to discard"
          // message="You have unsaved changes. Are you sure you want to discard them?"
          onConfirm={handleConfirm}
          onCancel={handleCancel}
        />
      )}
    </div>
  );
};

export default CreateModal;

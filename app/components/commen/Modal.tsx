import React, { useCallback } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface EditProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (profileData: ProfileData) => void;
  initialData: ProfileData;
}

interface ProfileData {
  // name:string
  username: string;
  bio: string;
  link: string;
  profilePic: string;
}

const Modal: React.FC<EditProfileModalProps> = ({
  isOpen,
  onClose,
  onSave,
  initialData,
}) => {
  const { register, handleSubmit, formState: { errors } } = useForm<ProfileData>({
    defaultValues: initialData
  });

  const handleOverlayClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  const onSubmit = (data: ProfileData) => {
    onSave(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex justify-center z-50 items-center bg-black bg-opacity-50" onClick={handleOverlayClick}>
      <div className="bg-[#181818] text-white p-5 rounded-lg shadow-lg w-[400px]">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <div className="flex flex-col flex-grow">
              <label htmlFor="username" className="text-sm text-gray-400">Username</label>
              <input
                {...register("username", { required: "Username is required" })}
                className="bg-transparent border-b border-[#333] text-white placeholder-gray-500 pb-1 focus:outline-none focus:border-white"
                placeholder="@username"
                readOnly
              />
              {errors.username && <span className="text-red-500 text-xs mt-1">{errors.username.message}</span>}
            </div>
            <Image
              src={initialData.profilePic}
              alt="Profile"
              width={60}
              height={60}
              className="rounded-full"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bio" className="text-sm text-gray-400">Bio</label>
            <input
              {...register("bio")}
              className="bg-transparent border-b border-[#333] text-white placeholder-gray-500 pb-1 focus:outline-none focus:border-white"
              placeholder="+ Write bio"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="link" className="text-sm text-gray-400">Link</label>
            <input
              {...register("link")}
              className="bg-transparent border-b border-[#333] text-white placeholder-gray-500 pb-1 focus:outline-none focus:border-white"
              placeholder="+ Add link"
            />
          </div>
        </form>

        <button
          onClick={handleSubmit(onSubmit)}
          className="w-full bg-white text-black font-semibold py-2 rounded-full mt-4 hover:bg-gray-200 transition duration-300"
        >
          Done
        </button>
      </div>
    </div>
  );
};

export default Modal;
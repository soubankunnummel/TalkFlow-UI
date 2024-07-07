import React from "react";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
//   message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title,
//   message,
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-[#181818] white p-5  rounded shadow-lg">
        <h2>{title}</h2>
        {/* <p>{message}</p> */}
        <div className="flex justify-center gap-3 mt-4">
          <button
            className="border text-red-500 hover:bg-red-500 hover:text-black w-full p-5 py-1 rounded"
            onClick={onConfirm}
          >
            Discard
          </button>
          <button
            className="border p-5 py-1 hover:bg-white hover:text-black w-full rounded"
            onClick={onCancel}
          >
            Cansel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;

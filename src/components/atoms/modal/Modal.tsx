import React from "react";

interface ModalProps {
  modalText: string;
}

export default function Modal({ modalText }: ModalProps) {
  return (
    <>
      <div className="0border rounded-[4px] ring-0 ring-[#E9E9EE] p-[16px] text-[12px] bg-white ">
        {modalText}
      </div>
    </>
  );
}

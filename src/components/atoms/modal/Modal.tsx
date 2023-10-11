import React from "react";

interface ModalProps {
  modalText: string;
}

export default function Modal({ modalText }: ModalProps) {
  return (
    <>
      <div className="border rounded  p-4 text-[12px] bg-white ">
        {modalText}
      </div>
    </>
  );
}

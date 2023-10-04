import DefaultCard from "@/components/molecule/SignUpBox";
import React from "react";
import Modal from "./Modal";

interface SignUpModalProps {
  modalText: string;
}

export default function SignUpModal({ modalText }: SignUpModalProps) {
  return (
    <div className="hidden group-hover:block absolute left-0 top-full z-10">
      {/* <div className="hidden ">SignUpModal</div> */}
      <Modal modalText={modalText} />
    </div>
  );
}

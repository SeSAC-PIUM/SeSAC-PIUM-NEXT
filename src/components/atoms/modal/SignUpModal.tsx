import DefaultCard from "@/components/molecule/SignUpBox";
import React from "react";
import Modal from "./Modal";

interface SignUpModalProps {
  modalText: string;
}

export default function SignUpModal({ modalText }: SignUpModalProps) {
  return (
    <div className="hidden group-hover:block absolute left-0 top-full z-10 w-[240px]">
      <Modal modalText={modalText} />
    </div>
  );
}

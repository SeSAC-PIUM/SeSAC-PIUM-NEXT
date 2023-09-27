import React from "react";
import SignUpLabel from "../atoms/label/SignUpLabel";
import Image from "next/image";
import modal from "../../img/modal.png";
import SignUpRadio from "../atoms/button/RadioButton";

export default function SignUpTitleBox() {
  return (
    <>
      <SignUpRadio />
      <div className="flex items-center w-48">
        <SignUpLabel title="이름" />
        <Image src={modal} alt="modal" className="object-contain" />
      </div>
    </>
  );
}

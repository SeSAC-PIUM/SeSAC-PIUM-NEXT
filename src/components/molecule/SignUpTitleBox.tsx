import React from "react";
import SignUpLabel from "../atoms/label/DefaultLabel";
import Image from "next/image";
import Modal from "../../img/modal.png";
import SignUpModal from "../atoms/modal/SignUpModal";

interface SingnUpTitleBoxProps {
  title: string;
  modal?: string;
}

export default function SignUpTitleBox({
  title,
  modal,
}: SingnUpTitleBoxProps): React.ReactElement {
  return (
    <>
      <div className="flex items-center mb-2 relative">
        <SignUpLabel title={title} />
        {modal && (
          <div className="flex group ">
            <Image
              src={Modal}
              alt="modal"
              className="object-contain cursor-pointer"
            />
            <SignUpModal modalText={modal} />
          </div>
        )}
      </div>
    </>
  );
}

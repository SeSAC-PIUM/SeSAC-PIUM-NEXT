import React from "react";
import SignUpLabel from "../atoms/label/SignUpLabel";
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
  const cardObject = {
    name: "SBA 가입 시 입력한 이름입니다. 만약 실명과 일치하지 않는다면 마이페이지 - 이름변경 신청을 통해 수정 가능합니다",
  };

  return (
    <>
      <div className="flex items-center w-48">
        <SignUpLabel title={title} />
        {modal && (
          <>
            <Image src={Modal} alt="modal" className="object-contain" />
            <SignUpModal />
          </>
        )}
      </div>
    </>
  );
}

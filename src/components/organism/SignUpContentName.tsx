import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import WarningLabel from "../atoms/label/WarningLabel";
import Modal from "../atoms/modal/Modal";

interface SignUpContentNameProps {
  className: string;
}

export default function SignUpContentName({
  className,
}: SignUpContentNameProps) {
  return (
    <div className={className}>
      {/* <div className="flex "> */}
      <SignUpTitleBox
        title="이름"
        modal="    SBA 가입 시 입력한 이름입니다. 만약 실명과 일치하지 않는다면 마이페이지 - 이름변경 신청을 통해 수정 가능합니다"
      />

      <div className="flex flex-col">
        <SignUpInput placeholder="한글로 실명을 입력해주세요" />
        <WarningLabel text="한글로 실명을 입력해주세요" />
      </div>
    </div>
  );
}

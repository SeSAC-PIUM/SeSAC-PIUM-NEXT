import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import WarningLabel from "../atoms/label/WarningLabel";

interface SignUpContentNameProps {
  className: string;
}

export default function SignUpContentName({
  className,
}: SignUpContentNameProps) {
  return (
    <div className={className}>
      {/* <div className="flex "> */}
      <SignUpTitleBox title="이름" modal="name" />
      <div className="flex flex-col">
        <SignUpInput placeholder="한글로 실명을 입력해주세요" />
        <WarningLabel text="한글로 실명을 입력해주세요" />
      </div>
    </div>
  );
}

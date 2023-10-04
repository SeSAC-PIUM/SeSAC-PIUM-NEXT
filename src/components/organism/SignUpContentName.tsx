import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";

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
      <SignUpInput placeholder="이름" />
    </div>
  );
}

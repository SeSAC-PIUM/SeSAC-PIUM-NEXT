import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";

interface SignUpContentJobProps {
  className: string;
}

export default function SignUpContentJob({ className }: SignUpContentJobProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="희망직무" modal="name" />
      <SignUpInput placeholder="이름" />
    </div>
  );
}

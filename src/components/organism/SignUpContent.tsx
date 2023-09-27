import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";

export default function SignUpContent() {
  return (
    <div className="flex">
      <SignUpTitleBox />
      <SignUpInput />
    </div>
  );
}

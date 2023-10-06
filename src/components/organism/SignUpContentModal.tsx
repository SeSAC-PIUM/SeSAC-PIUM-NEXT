import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import SignUpLabel from "../atoms/label/SignUpLabel";

export default function SignUpContent() {
  return (
    <div className="flex">
      <SignUpLabel title="수강교육과정" />
      {/* <SignUpTitleBox title="수강교육과정" /> */}
      <SignUpInput />
    </div>
  );
}

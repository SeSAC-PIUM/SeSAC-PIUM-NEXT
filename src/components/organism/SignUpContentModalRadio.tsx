import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/DefaultInput";
import SignUpLabel from "../atoms/label/DefaultLabel";

export default function SignUpContent() {
  return (
    <div className="flex">
      <SignUpLabel title="멘토/멘티" />
      <SignUpInput />
    </div>
  );
}

import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import SignUpLabel from "../atoms/label/SignUpLabel";

export default function SignUpContent() {
  return (
    <div className="flex">
      <SignUpLabel title="멘토/멘티" />
      <SignUpInput />
    </div>
  );
}

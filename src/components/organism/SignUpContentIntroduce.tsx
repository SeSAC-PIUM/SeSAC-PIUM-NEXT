import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import TextInput from "../atoms/input/TextInput";
interface SignUpContentIntroduceProps {
  className?: string;
}

export default function SignUpContentIntroduce({
  className,
}: SignUpContentIntroduceProps) {
  return (
    <>
      <div className={className}>
        <SignUpTitleBox title="자기소개" />
        <TextInput />
      </div>
    </>
  );
}

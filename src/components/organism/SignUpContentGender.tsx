import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import RadioButton from "../atoms/button/RadioButton";

interface SignUpContentGenderProps {
  className?: string;
}

export default function SignUpContentGender({
  className,
}: SignUpContentGenderProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="성별" />
      <div className="flex flex-wrap  ">
        <RadioButton label="여성" name="gender" value="female" />
        <RadioButton label="남성" name="gender" value="male" />
        <RadioButton label="비공개" name="gender" value="void" />
      </div>
    </div>
  );
}

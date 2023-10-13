import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import RadioButton from "../atoms/button/RadioButton";
import { UseFormRegisterReturn } from "react-hook-form";

interface SignUpContentGenderProps {
  className?: string;
  register: UseFormRegisterReturn;
}

export default function SignUpContentGender({
  className,
  register,
}: SignUpContentGenderProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="성별" />
      <div className="flex flex-wrap  ">
        <RadioButton
          register={register}
          label="여성"
          name="gender"
          value="female"
        />
        <RadioButton
          register={register}
          label="남성"
          name="gender"
          value="male"
        />
        <RadioButton
          register={register}
          label="비공개"
          name="gender"
          value="void"
        />
      </div>
    </div>
  );
}

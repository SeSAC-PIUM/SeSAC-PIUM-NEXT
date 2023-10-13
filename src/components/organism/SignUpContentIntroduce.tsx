import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import TextInput from "../atoms/input/TextInput";
import { UseFormRegisterReturn } from "react-hook-form";
interface SignUpContentIntroduceProps {
  className?: string;
  register: UseFormRegisterReturn;
}

export default function SignUpContentIntroduce({
  className,
  register,
}: SignUpContentIntroduceProps) {
  return (
    <>
      <div className={className}>
        <SignUpTitleBox title="자기소개" />
        <TextInput register={register} />
      </div>
    </>
  );
}

import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/DefaultInput";
import Image from "next/image";
import dropDown from "../../img/dropDown.svg";
import { UseFormRegisterReturn } from "react-hook-form";
interface SignUpContentCurriculumProps {
  className?: string;
  register: UseFormRegisterReturn;
}

export default function SignUpContentCurriculum({
  className,
  register,
}: SignUpContentCurriculumProps) {
  return (
    <>
      <div className={className}>
        <SignUpTitleBox title="수강 교육과정" />
        <div className="flex flex-col gap-2 ">
          <SignUpInput placeholder="캠퍼스 선택">
            <Image className="absolute right-6" src={dropDown} alt="dropDown" />
          </SignUpInput>
          <SignUpInput placeholder="클래스 선택">
            <Image className="absolute right-6" src={dropDown} alt="dropDown" />
          </SignUpInput>
        </div>
      </div>
    </>
  );
}

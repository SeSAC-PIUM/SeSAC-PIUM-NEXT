import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import TextInput from "../atoms/input/TextInput";
import DefaultButton from "../atoms/button/DefaultButton";

interface SignUpContentIProfileProps {
  className?: string;
}

export default function SignUpContentIProfileProps({
  className,
}: SignUpContentIProfileProps) {
  return (
    <>
      <div className={className}>
        <SignUpTitleBox title="프로필 사진" />
        <div className="flex gap-10">
          {/* 이미지 등록 컴포넌트 만들 것. 지금은 그냥 div */}
          <div className="bg-[--color-grayscale-100] w-[150px] h-[150px] rounded-full"></div>
          <div className="flex flex-col m-auto gap-3 ">
            <DefaultButton>이미지 첨부</DefaultButton>
            <span className=" text-gray-400 ">
              이미지 권장 사이즈는 300x300 입니다.
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

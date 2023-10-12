import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import FileUpload from "../organism/FileUpload";
import GreenBorderButton from "../atoms/button/GreenBorderButton";

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
        <div className="flex flex-wrap ">
          {/* 이미지 등록 컴포넌트 만들 것. 지금은 그냥 div */}
          <FileUpload />
          <div className="flex flex-col justify-center gap-3 my-4">
            {/* <GreenBorderButton text="이미지 첨부" addClassName=" w-[120px] " />
            <span className=" text-gray-400 ">
              이미지 권장 사이즈는 300x300 입니다.
            </span> */}
          </div>
        </div>
      </div>
    </>
  );
}

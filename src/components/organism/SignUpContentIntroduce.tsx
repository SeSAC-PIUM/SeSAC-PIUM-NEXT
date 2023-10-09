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
        <div className="flex flex-col gap-2 relative">
          <TextInput placeholder="소개" />
          <span className="absolute top-full flex end-0 text-gray-400 font pt-1">
            0 / 200자
          </span>
        </div>
      </div>
    </>
  );
}

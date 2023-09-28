import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";

interface SignUpContentCurriculumProps {
  className?: string;
}

export default function SignUpContentCurriculum({
  className,
}: SignUpContentCurriculumProps) {
  return (
    <>
      <div className={className}>
        <SignUpTitleBox title="수강 교육과정" />
        <div className="flex flex-col">
          <SignUpInput placeholder="캠퍼스 선택" />
          <SignUpInput placeholder="클래스 선택" />
        </div>
      </div>
    </>
  );
}

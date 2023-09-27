import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import RadioButton from "../atoms/button/RadioButton";

interface SignUpContentMentoringProps {
  className?: string;
}

export default function SignUpContentMentoring({
  className,
}: SignUpContentMentoringProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="멘토/멘티" modal="name" />
      <div className="flex ">
        <RadioButton label="멘토" name="mentoring" value="mentor" />
        <RadioButton label="멘티" name="mentoring" value="mentee" />

        {/* <SignUpInput placeholder="캠퍼스 선택" />
        <SignUpInput placeholder="클래스 선택" /> */}
      </div>
    </div>
  );
}

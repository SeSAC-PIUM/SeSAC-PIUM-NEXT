import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/DefaultInput";
import RadioButton from "../atoms/button/RadioButton";
import { UseFormRegisterReturn } from "react-hook-form";

interface SignUpContentMentoringProps {
  className?: string;
  register: UseFormRegisterReturn;
}

export default function SignUpContentMentoring({
  className,
}: SignUpContentMentoringProps) {
  return (
    <div className={className}>
      <SignUpTitleBox
        title="멘토/멘티"
        modal="해당 직무를 처음 접하는 교육생들을 위해 프로젝트 멘토/멘티
                  짝꿍제도를 운영합니다. 수업을 따라가는데 문제가 없는
                  수준이라면 멘토를 지원해주세요🥰"
      />
      <div className="flex flex-wrap">
        <RadioButton label="멘토" name="mentoring" value="mentor" />
        <RadioButton label="멘티" name="mentoring" value="mentee" />
      </div>
    </div>
  );
}

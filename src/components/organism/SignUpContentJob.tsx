import React, { useState } from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";

// import SignUpBox from "../molecule/SignUpBox";
import ChipsForm from "../molecule/ChipsForm";
import { UseFormRegisterReturn } from "react-hook-form";
import ChipButtonName from "../atoms/button/ChipButtonNameProps";
import DefaultCard from "../atoms/card/DefaultCard";
interface SignUpContentJobProps {
  className: string;
  register: UseFormRegisterReturn;
}
// const skills = [
//   {
//     item: "기획",
//     value: "1",
//   },
//   {
//     item: "UX/UI 디자인",
//     value: "2",
//   },
//   {
//     item: "퍼블리싱",
//     value: "3",
//   },
//   {
//     item: "프론트엔드",
//     value: "4",
//   },
//   {
//     item: "백엔드",
//     value: "5",
//   },
// ];

export default function SignUpContentJob({ className }: SignUpContentJobProps) {
  const [isClick, setIsClick] = useState("");
  return (
    <div className={className}>
      <SignUpTitleBox
        title="희망직무"
        modal="프로젝트에 희망하는 직무를 선택해주세요"
      />

      <DefaultCard addClassName="">
        <div className="flex  gap-x-4 gap-y-4 flex-wrap">
          <ChipButtonName
            label="기획"
            name="job"
            value="기획"
            clicked={isClick}
            onClick={() => setIsClick("기획")}
          />
          <ChipButtonName
            label="UX/UI 디자인"
            name="job"
            value="UX/UI 디자인"
            clicked={isClick}
            onClick={() => setIsClick("UX/UI 디자인")}
          />
          <ChipButtonName
            label="퍼블리싱"
            name="job"
            value="퍼블리싱"
            clicked={isClick}
            onClick={() => setIsClick("퍼블리싱")}
          />
          <ChipButtonName
            label="프론트엔드"
            name="job"
            value="프론트엔드"
            clicked={isClick}
            onClick={() => setIsClick("프론트엔드")}
          />
          <ChipButtonName
            label="백엔드"
            name="job"
            value="백엔드"
            clicked={isClick}
            onClick={() => setIsClick("백엔드")}
          />
        </div>
      </DefaultCard>

      {/* <ChipsForm text={skills} /> */}
    </div>
  );
}

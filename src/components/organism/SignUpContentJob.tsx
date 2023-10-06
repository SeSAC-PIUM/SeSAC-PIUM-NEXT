import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import DefaultCard from "../atoms/card/DefaultCard";

// import SignUpBox from "../molecule/SignUpBox";
import ChipsForm from "../molecule/ChipsForm";
interface SignUpContentJobProps {
  className: string;
}
const skiils = [
  {
    item: "기획",
    value: "1",
  },
  {
    item: "UX/UI 디자인",
    value: "2",
  },
  {
    item: "퍼블리싱",
    value: "3",
  },
  {
    item: "프론트엔드",
    value: "4",
  },
  {
    item: "백엔드",
    value: "5",
  },
];

export default function SignUpContentJob({ className }: SignUpContentJobProps) {
  return (
    <div className={className}>
      <SignUpTitleBox
        title="희망직무"
        modal="프로젝트에 희망하는 직무를 선택해주세요"
      />
      <ChipsForm text={skiils} />
    </div>
  );
}

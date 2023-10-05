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
    value: "",
    // value도 넣어주세요 - 미정
  },
  {
    item: "UX/UI 디자인",
    value: "",
  },
  {
    item: "퍼블리싱",
    value: "",
  },
  {
    item: "프론트엔드",
    value: "",
  },
  {
    item: "백엔드",
    value: "",
  },
];

export default function SignUpContentJob({ className }: SignUpContentJobProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="희망직무" modal="name" />
      <ChipsForm text={skiils} />
    </div>
  );
}

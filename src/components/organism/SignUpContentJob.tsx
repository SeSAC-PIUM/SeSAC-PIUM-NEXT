import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import DefaultButton from "../atoms/button/DefaultButton";
import DefaultCard from "../atoms/card/DefaultCard";

// import SignUpBox from "../molecule/SignUpBox";
import ChipsForm from "../molecule/ChipsForm";
interface SignUpContentJobProps {
  className: string;
}
const skiils = [
  {
    item: "기획",
  },
  {
    item: "UX/UI 디자인",
  },
  {
    item: "퍼블리싱",
  },
  {
    item: "프론트엔드",
  },
  {
    item: "백엔드",
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

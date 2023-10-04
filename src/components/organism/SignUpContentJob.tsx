import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/SignUpInput";
import DefaultButton from "../atoms/button/DefaultButton";
import DefaultCard from "../atoms/card/DefaultCard";
import SignUpBox from "../molecule/SignUpBox";

interface SignUpContentJobProps {
  className: string;
}

export default function SignUpContentJob({ className }: SignUpContentJobProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="희망직무" modal="name" />
      {/* <SignUpInput placeholder="" /> */}
      <SignUpBox />
      {/* <DefaultCard />
      <DefaultButton text="기획" />
      <DefaultButton text="UX/XI 디자인" />
      <DefaultButton text="퍼블리싱" />
      <DefaultButton text="프론트엔드" />
      <DefaultButton text="백엔드" /> */}
      {/* </DefaultCard> */}
      {/* </SignUpInput> */}
    </div>
  );
}

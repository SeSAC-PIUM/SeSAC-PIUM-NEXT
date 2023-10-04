import React from "react";
import SignUpContentName from "../organism/SignUpContentName";
import SignUpContentModal from "../organism/SignUpContentModal";
import RadioButton from "../atoms/button/RadioButton";
import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
import SignUpContentGender from "../organism/SignUpContentGender";
import SignUpContentJob from "../organism/SignUpContentJob";
import SignUpContentMentoring from "../organism/SignUpContentMentoring";
import GreenButton from "../atoms/button/GreenButton";

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start py-4 w-full";
  return (
    <>
      <section className="border-2 w-[800px] m-auto">
        <SignUpContentName className={className} />
        <SignUpContentCurriculum className={className} />
        <SignUpContentGender className={className} />
        <SignUpContentJob className={className} />
        <SignUpContentMentoring className={className} />
        <GreenButton className="w-[400px] m-auto" text="가입완료" />
      </section>
      {/* <SignUpContentModal /> */}
      {/* <RadioButton /> */}
    </>
  );
}

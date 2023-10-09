import React from "react";
import SignUpContentName from "../organism/SignUpContentName";
// import SignUpContentModal from "../organism/SignUpContentModal";
// import RadioButton from "../atoms/button/RadioButton";
import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
import SignUpContentGender from "../organism/SignUpContentGender";
import SignUpContentJob from "../organism/SignUpContentJob";
import SignUpContentMentoring from "../organism/SignUpContentMentoring";

export default function SignUpTemplate({}) {
  const className = "flex flex-col bg-slate-100 items-start py-6 ";
  return (
    <>
      <SignUpContentName className={className} />
      <SignUpContentCurriculum className={className} />
      <SignUpContentGender className={className} />
      <SignUpContentJob className={className} />
      <SignUpContentMentoring className={className} />
    </>
  );
}

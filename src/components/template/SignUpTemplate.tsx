import React from "react";
import SignUpContentName from "../organism/SignUpContentName";
import SignUpContentModal from "../organism/SignUpContentModal";
import RadioButton from "../atoms/button/RadioButton";
import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
import SignUpContentGender from "../organism/SignUpContentGender";
import SignUpContentJob from "../organism/SignUpContentJob";
import SignUpContentMentoring from "../organism/SignUpContentMentoring";

function Test() {
  return <div>Test</div>;
}

export default function SignUpTemplate({}) {
  const className = "flex bg-slate-100 items-start";
  return (
    <>
      <SignUpContentName className={className} />
      <SignUpContentCurriculum className={className} />
      <SignUpContentGender className={className} />
      <SignUpContentJob className={className} />
      <SignUpContentMentoring className={className} />
      {/* <SignUpContentModal /> */}
      {/* <RadioButton /> */}
    </>
  );
}

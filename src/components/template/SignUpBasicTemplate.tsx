import React from "react";
// import SignUpContentName from "../organism/SignUpContentName";
// import SignUpContentModal from "../organism/SignUpContentModal";
// import RadioButton from "../atoms/button/RadioButton";
// import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
// import SignUpContentGender from "../organism/SignUpContentGender";
// import SignUpContentJob from "../organism/SignUpContentJob";
// import SignUpContentMentoring from "../organism/SignUpContentMentoring";
import GreenButton from "../atoms/button/GreenButton";
import PageTitle from "../atoms/label/PageTitle";
import BorderBottom from "../atoms/label/BorderBottom";
import SignUpContentFirst from "../organism/SignUpContentFirst";
import SignUpContentSecond from "../organism/SignUpContentSecond";

export default function SignUpTemplate({}) {
  // const className = "flex flex-wrap  bg-slate-100 items-start py-6 w-full";
  return (
    <>
      <section className=" max-w-[800px] w-full m-auto ">
        <PageTitle
          title1="프로젝트를 위한"
          PointTitle1="기본정보"
          title2="입력"
          PointTitle2=""
          border="border-b-[1px] border-[--color-grayscale-600]"
        />
        <SignUpContentFirst />

        <BorderBottom marginTop={"mt-[64px]"} marginBottom={"mb-[120px]"} />

        <SignUpContentSecond />
        <BorderBottom marginTop={"mt-[64px]"} marginBottom={"mb-2"} />

        <GreenButton
          className="max-w-[400px] w-full m-auto mt-12"
          text="가입완료"
        />
      </section>
    </>
  );
}

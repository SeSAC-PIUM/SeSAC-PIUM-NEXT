import React from "react";
import SignUpContentName from "../organism/SignUpContentName";
import SignUpContentModal from "../organism/SignUpContentModal";
import RadioButton from "../atoms/button/RadioButton";
import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
import SignUpContentGender from "../organism/SignUpContentGender";
import SignUpContentJob from "../organism/SignUpContentJob";
import SignUpContentMentoring from "../organism/SignUpContentMentoring";
import CheckBoxButton from "../atoms/button/CheckBoxButton";
import GrayButton from "../atoms/button/GrayButton";
import YellowButton from "../atoms/button/YellowButton";
import SignUpInput from "../atoms/input/SignUpInput";
// import Image from "next/image";

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap  items-start pb-4 w-full";
  return (
    <>
      <section className="border-2 w-[360px] m-auto">
        {/* <Image src={logo_name} alt="logo_name" className="object-contain " /> */}
        <div className="mb-[48px] text-center font-semibold">
          <span className="text-[--color-grayscale-600] mr-2">
            이미 회원이신가요?
          </span>
          <button className="text-[--color-main-green] "> 로그인</button>
        </div>

        <GrayButton className={className} text="이메일로 가입하기" />
        <YellowButton className={className} text="카카오로 가입하기" />
      </section>
    </>
  );
}

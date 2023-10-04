import React from "react";
import SignUpContentName from "../organism/SignUpContentName";
import SignUpContentModal from "../organism/SignUpContentModal";
import RadioButton from "../atoms/button/RadioButton";
import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
import SignUpContentGender from "../organism/SignUpContentGender";
import SignUpContentJob from "../organism/SignUpContentJob";
import SignUpContentMentoring from "../organism/SignUpContentMentoring";
import CheckBoxButton from "../atoms/button/CheckBoxButton";
import GreenButton from "../atoms/button/GreenButton";
import YellowButton from "../atoms/button/YellowButton";
import SignUpInput from "../atoms/input/SignUpInput";
// import Image from "next/image";

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start  pb- w-full";
  return (
    <>
      <section className="border-2 w-[360px] m-auto">
        {/* <Image src={logo_name} alt="logo_name" className="object-contain " /> */}
        <div className="pb-[48px] text-center font-semibold ">
          <span className="text-[--color-grayscale-600] mr-2">
            회원이 아니신가요?
          </span>
          <button className="text-[--color-main-green] "> 회원가입</button>
        </div>
        <div className="flex flex-col">
          <SignUpInput placeholder="이메일" />
          <SignUpInput placeholder="비밀번호" />
        </div>
        <div className="flex justify-between ">
          <CheckBoxButton label="로그인유지" name="signIn" value="signIn" />
          <button className="text-[--color-grayscale-500]">
            비밀번호 찾기
          </button>
        </div>

        <GreenButton className={className} text="로그인" />
        <YellowButton className={className} text="카카오계정으로 로그인" />
      </section>
    </>
  );
}

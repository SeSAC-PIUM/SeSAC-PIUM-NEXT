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
import GrayButton from "../atoms/button/GrayButton";
// import Image from "next/image";

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start  pb- w-full";
  return (
    <>
      <section className="border-2 w-[360px] m-auto">
        {/* <Image src={logo_name} alt="logo_name" className="object-contain " /> */}
        <div className="pb-[48px] text-center font-semibold ">
          <span className="text-[--color-grayscale-600] mr-2">
            이미 회원이신가요?
          </span>
          <button className="text-[--color-main-green] "> 로그인</button>
        </div>
        <div className="flex flex-col">
          <SignUpInput placeholder="이메일" />
          <SignUpInput placeholder="비밀번호" />
          <SignUpInput placeholder="비밀번호 확인" />
        </div>

        <div className="flex justify-between">
          <GrayButton
            className={className}
            text="전체 이용약관 동의"
          ></GrayButton>
          <button className="text-[--color-grayscale-500] ">자세히</button>
        </div>

        <div className="flex flex-col ">
          <CheckBoxButton
            label="(필수) 개인정보 수집 이용 동의"
            name="signIn"
            value="signIn"
          />
          <CheckBoxButton
            label="(필수) 개인정보 제3자 제공 동의"
            name="signIn"
            value="signIn"
          />
          <CheckBoxButton
            label="(선택) 광고성 정보수진 동의"
            name="signIn"
            value="signIn"
          />
        </div>

        <GreenButton className={className} text="가입완료" />
      </section>
    </>
  );
}

import React from "react";
import CheckBoxButton from "../atoms/button/CheckBoxButton";
import GreenButton from "../atoms/button/GreenButton";
import SignUpInput from "../atoms/input/SignUpInput";
import GrayButton from "../atoms/button/GrayButton";
import LogoName from "../../img/logo&name.svg";
import Image from "next/image";

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start  pb- w-full";
  return (
    <>
      <section className="w-[360px] m-auto pt-[60px]">
        <div className="flex flex-col gap-4 items-center">
          <Image src={LogoName} alt="logo_name" className="object-contain " />
          <div className="mb-[48px]  font-semibold ">
            <span className="text-[--color-grayscale-600] mr-2">
              이미 회원이신가요?
            </span>
            <button className="text-[--color-main-green] "> 로그인</button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-4">
            <SignUpInput placeholder="이메일" />
            <SignUpInput placeholder="비밀번호" />
            <SignUpInput placeholder="비밀번호 확인" />
          </div>

          <div className="flex justify-between bg-[--color-grayscale-100] py-4 px-8 rounded">
            <CheckBoxButton
              label="전체 이용약관 동의"
              name="signIn"
              value="signIn"
            />
            <button className="text-[--color-grayscale-500] ">자세히</button>
          </div>

          <div className="flex flex-col gap-4 px-8">
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
        </div>
        <GreenButton className=" my-6" text="가입완료" />
      </section>
    </>
  );
}

import React from "react";
import CheckBoxButton from "../atoms/button/CheckBoxButton";

import SignUpInput from "../atoms/input/SignUpInput";
import LogoName from "../../img/logo&name.svg";
import Image from "next/image";
import kakao from "../../img/logo_kakao.svg";
import google from "../../img/logo_google.svg";
import LoginButton from "../atoms/button/LoginButton";

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start  pb- w-full";
  return (
    <>
      <section className="w-[360px] m-auto flex flex-col gap-12 pt-[60px]">
        <div className="logo">
          <div className="flex flex-col gap-4 items-center">
            <Image src={LogoName} alt="logo_name" className="object-contain " />
            <div className="font-semibold ">
              <span className="text-[--color-grayscale-600] mr-2">
                회원이 아니신가요?
              </span>
              <button className="text-[--color-main-green] "> 회원가입</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div className=" flex flex-col gap-4">
            <SignUpInput placeholder="이메일" />
            <SignUpInput placeholder="비밀번호" />
            <div className="flex justify-between ">
              <CheckBoxButton label="로그인유지" name="signIn" value="signIn" />
              <button className="text-[--color-grayscale-500] ">
                비밀번호 찾기
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <LoginButton
              bgColor="bg-[--color-main-green]"
              textColor="text-white"
              text=" 로그인"
              border="none"
            />

            <LoginButton
              image={google}
              bgColor="bg-white"
              textColor="text-[--color-grayscale-600]"
              border="border-[1px]"
              text="Google계정으로 로그인"
            />

            <LoginButton
              image={kakao}
              bgColor="bg-[#FFE600]"
              textColor="text-[--color-grayscale-600]"
              border="none"
              text="카카오계정으로 로그인"
            />
          </div>
        </div>
      </section>
    </>
  );
}

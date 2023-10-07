import React from "react";
import GrayButton from "../atoms/button/GrayButton";
import YellowButton from "../atoms/button/YellowButton";
import LogoName from "../../img/logo&name.svg";
import Image from "next/image";
import kakao from "../../img/logo_kakao.svg";
import google from "../../img/logo_google.svg";
import mail from "../../img/logo_mail.svg";
import LoginButton from "../atoms/button/LoginButton";
import Link from "next/link";
export default function SignUpTemplate({}) {
  const className = "flex flex-wrap  items-start pb-4 w-full";
  return (
    <>
      <section className=" w-[360px] m-auto pt-[60px]">
        <div className="flex flex-col gap-4 items-center">
          <Image src={LogoName} alt="logo_name" className="object-contain " />
          <div className="mb-[48px]  font-semibold ">
            <span className="text-[--color-grayscale-600] mr-2">
              이미 회원이신가요?
            </span>
            <Link href={"/signIn"} className="text-[--color-main-green] ">
              로그인
            </Link>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <Link href="signUp_Email">
            <LoginButton
              image={mail}
              bgColor="bg-[--color-grayscale-100]"
              textColor="text-[--color-grayscale-600]"
              text=" 이메일로 가입하기"
              border="none"
            />
          </Link>

          <LoginButton
            image={google}
            bgColor="bg-white"
            textColor="text-[--color-grayscale-600]"
            border="border-[1px]"
            text="구글계정으로 가입하기"
          />

          <LoginButton
            image={kakao}
            bgColor="bg-[#FFE600]"
            textColor="text-[--color-grayscale-600]"
            border="none"
            text="카카오계정으로 가입하기"
          />
        </div>
      </section>
    </>
  );
}

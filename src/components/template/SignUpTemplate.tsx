import React from "react";
import GrayButton from "../atoms/button/GrayButton";
import YellowButton from "../atoms/button/YellowButton";
import LogoName from "../../img/logo&name.svg";
import Image from "next/image";

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
            <button className="text-[--color-main-green] "> 로그인</button>
          </div>
        </div>

        <GrayButton className={className} text="이메일로 가입하기" />
        <YellowButton className={className} text="카카오로 가입하기" />
      </section>
    </>
  );
}

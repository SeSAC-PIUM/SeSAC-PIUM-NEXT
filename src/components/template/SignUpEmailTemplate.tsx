import React from "react";
import CheckBoxButton from "../atoms/button/CheckBoxButton";
import GreenButton from "../atoms/button/GreenButton";
import SignUpInput from "../atoms/input/SignUpInput";
import WarningLabel from "../atoms/label/WarningLabel";

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
            <div>
              <SignUpInput placeholder="이메일" />
              <WarningLabel text="이메일 형식으로 입력해주세요" />
            </div>
            <div>
              <SignUpInput placeholder="비밀번호" />
              <WarningLabel text="비밀번호는 영문+숫자 조합 8자 이상 입력해주세요" />
            </div>
            <div>
              <SignUpInput placeholder="비밀번호 확인" />
              <WarningLabel text="비밀번호가 일치하지 않아요" />
            </div>
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
              name="signUp1"
              value="(필수) 개인정보 수집 이용 동의"
            />
            <CheckBoxButton
              label="(필수) 개인정보 제3자 제공 동의"
              name="signUp2"
              value="(필수) 개인정보 제3자 제공 동의"
            />
            <CheckBoxButton
              label="(선택) 광고성 정보수진 동의"
              name="signUp3"
              value="(선택) 광고성 정보수진 동의"
            />
          </div>
        </div>

        <GreenButton className=" my-6" text="가입완료" />
        <div>
          <label className="form-checkbox inline-flex items-center">
            <input type="checkbox" className="form-checkbox text-green-500" />
            <span className="ml-2">Option 2</span>
          </label>
        </div>
      </section>
    </>
  );
}

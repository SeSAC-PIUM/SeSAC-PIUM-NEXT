import React, { useEffect, useRef } from "react";
import CheckBoxButton from "../atoms/button/CheckBoxButton";
import GreenButton from "../atoms/button/GreenButton";
import SignUpInput from "../atoms/input/DefaultInput";
import WarningLabel from "../atoms/label/WarningLabel";

import LogoName from "../../img/logo&name.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";

interface signUpForm {
  email: string;
  password: string;
  passwordCheck: string;
}

const passwordRegular = {
  num: /[0-9]/,
  eng: /[a-zA-Z]/,
  spc: /[~!@#$%^&*()_+|<>?:{}]/,
};

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start  pb- w-full";

  const signAll = useRef(null);
  const signUp1 = useRef(null);
  const signUp2 = useRef(null);
  const signUp3 = useRef(null);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<signUpForm>({ mode: "onChange" });

  const onValid = () => {};

  const onInvalid = () => {};

  useEffect(() => {
    console.log("signAll");
    console.log(signAll.current);
  }, [signAll]);

  // console.log(errors);
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

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onValid, onInvalid)}
        >
          <div className="flex flex-col gap-4">
            <div>
              <SignUpInput
                register={register("email", {
                  validate: {
                    email: (value) =>
                      value.includes("@") || "이메일을 입력해주세요.",
                  },
                })}
                type="email"
                placeholder="이메일"
              />
              {errors.email && (
                <WarningLabel text="이메일 형식으로 입력해주세요" />
              )}
            </div>
            <div>
              <SignUpInput
                register={register("password", {
                  required: true,
                  minLength: {
                    message:
                      "비밀번호는 영문+숫자 조합 8자 이상 입력해주세요.!!",
                    value: 8,
                  },
                  validate: {
                    password: (value) =>
                      (passwordRegular.num.test(value) &&
                        passwordRegular.eng.test(value)) ||
                      `passwordRegular.test(value) : ${value}`,
                  },
                })}
                type="password"
                placeholder="비밀번호"
              />
              {errors.password && (
                <WarningLabel text="비밀번호는 영문+숫자 조합 8자 이상 입력해주세요." />
              )}
            </div>
            <div>
              <SignUpInput
                register={register("passwordCheck", {
                  validate: {
                    passwordCheck: (value) =>
                      getValues("password") === value ||
                      "비밀번호가 일치하지 않아요",
                  },
                })}
                type="password"
                placeholder="비밀번호 확인"
              />
              {errors.passwordCheck && (
                <WarningLabel text="비밀번호가 일치하지 않아요" />
              )}
            </div>
          </div>

          <div className="flex justify-between bg-[--color-grayscale-100] py-4 px-8 rounded">
            <CheckBoxButton
              label="전체 이용약관 동의"
              name="signIn"
              value="signIn"
              checkRef={signAll}
            />
            <button className="text-[--color-grayscale-500] ">자세히</button>
          </div>

          <div className="flex flex-col gap-4 px-8">
            <CheckBoxButton
              label="(필수) 개인정보 수집 이용 동의"
              name="signUp1"
              value="(필수) 개인정보 수집 이용 동의"
              checkRef={signUp1}
            />
            <CheckBoxButton
              label="(필수) 개인정보 제3자 제공 동의"
              name="signUp2"
              value="(필수) 개인정보 제3자 제공 동의"
              checkRef={signUp2}
            />
            <CheckBoxButton
              label="(선택) 광고성 정보수진 동의"
              name="signUp3"
              value="(선택) 광고성 정보수진 동의"
              checkRef={signUp3}
            />
          </div>
        </form>

        <GreenButton className=" my-6" text="가입완료" />
      </section>
    </>
  );
}

import React from "react";
import CheckBoxButton from "../atoms/button/CheckBoxButton";
import GreenButton from "../atoms/button/GreenButton";
// import YellowButton from "../atoms/button/YellowButton";
import SignUpInput from "../atoms/input/SignUpInput";
import LogoName from "../../img/logo&name.svg";
import Image from "next/image";
import kakao from "../../img/kakao.svg";
import LoginButton from "../atoms/button/LoginButton";
import { FieldErrors, useForm } from "react-hook-form";

// Validation Check List
// Error ( set, clear, display )
// Have control over inputs
// Dont deal with events
// Easier Inputs

interface LoginForm {
  email: string;
  password: string;
}

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start  pb- w-full";

  // useForm 초기화
  //  input 들과 연결을 시켜주는 register 함수
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    mode: "onChange",
  });

  // register 로 연결된 input을 보여주는 함수
  console.log(watch());

  // 유효성 검사를 통과하면 실행하는 함수
  const onValid = (data: LoginForm) => {
    console.log("dddd");
  };

  // 유효성 검사를 통과하지 못하면 실행하는 함수
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  console.log(errors.email?.message);

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
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onValid, onInvalid)}
            id="loginForm"
          >
            <SignUpInput
              register={register("email", {
                required: "Email is required",
                validate: {
                  email: (value) =>
                    value.includes("@") || "이메일을 입력해주세요.",
                },
              })}
              placeholder="이메일"
            />
            <SignUpInput
              register={register("password", {
                required: "Password is required",
              })}
              placeholder="비밀번호"
              type="password"
            />
            <div className="flex justify-between ">
              <CheckBoxButton label="로그인유지" name="signIn" value="signIn" />
              <button className="text-[--color-grayscale-500] ">
                비밀번호 찾기
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-4">
            {/* <GreenButton className={className} text="로그인" /> */}
            <LoginButton
              className={className}
              bgColor="[--color-main-green]"
              textColor="--color-grayscale-100"
              text="로그인"
              form="loginForm"
            />

            <LoginButton
              // image
              image={kakao}
              className={className}
              bgColor="sky-200"
              textColor="--color-grayscale-600"
              text="Google계정으로 로그인"
            />

            <LoginButton
              image={kakao}
              className={className}
              bgColor="[#FFE600]"
              textColor="--color-grayscale-600"
              text="카카오계정으로 로그인"
            />
            {/* <YellowButton className={className} text="카카오계정으로 로그인" /> */}
          </div>
        </div>
      </section>
    </>
  );
}

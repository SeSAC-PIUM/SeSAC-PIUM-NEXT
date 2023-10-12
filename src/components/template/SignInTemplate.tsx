import React, { useEffect, useRef, useState } from "react";
import CheckBoxButton from "../atoms/button/CheckBoxButton";

import DefaultInput from "../atoms/input/DefaultInput";
import LogoName from "../../img/logo&name.svg";
import Image from "next/image";
import kakao from "../../img/logo_kakao.svg";
import google from "../../img/logo_google.svg";
import LoginButton from "../atoms/button/LoginButton";
import { FieldErrors, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import auth from "@/firebase/auth";
import { FirebaseError } from "firebase/app";
import Link from "next/link";
import WarningLabel from "../atoms/label/WarningLabel";

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
    setError,
  } = useForm<LoginForm>({ mode: "onSubmit" });

  const autoLoginCheck = useState(false);
  const router = useRouter();

  // register 로 연결된 input을 보여주는 함수
  // console.log(watch());

  // 유효성 검사를 통과하면 실행하는 함수
  const onValid = async (data: LoginForm) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);

      //db autoLoginCheck 저장

      router.push("/");
    } catch (e) {
      if (e instanceof FirebaseError) {
        console.log("login error : ", e.message);
        setError("email", {
          type: "loginError",
          message: "이메일을 확인해주세요.",
        });
        setError("password", {
          type: "loginError",
          message: "비밀번호를 확인해주세요.",
        });
      }
    } finally {
      // setLoading(false);
    }
  };

  // 유효성 검사를 통과하지 못하면 실행하는 함수
  const onInvalid = (errors: FieldErrors) => {
    console.log(errors);
  };

  useEffect(() => {
    autoLoginCheck;
  }, [autoLoginCheck]);

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
              <Link href={"/signUp"} className="text-[--color-main-green] ">
                회원가입
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <form
            className="flex flex-col gap-4"
            onSubmit={handleSubmit(onValid, onInvalid)}
            id="loginForm"
          >
            <div>
              <DefaultInput
                register={register("email", {
                  required: "이메일을 입력해주세요.",
                  validate: {
                    email: (value) =>
                      value.includes("@") || "이메일을 입력해주세요.",
                  },
                })}
                placeholder="이메일"
                autoComplete="autoComplete"
              />

              {errors.email && <WarningLabel text={errors.email?.message} />}
            </div>
            <div>
              <DefaultInput
                register={register("password", {
                  required: "비밀번호를 입력해주세요.",
                })}
                placeholder="비밀번호"
                type="password"
                autoComplete="current-password"
              />

              {errors.password && (
                <WarningLabel text={errors.password?.message} />
              )}
            </div>

            <div className="flex justify-between ">
              <CheckBoxButton label="로그인유지" name="signIn" value="signIn" />
              <button className="text-[--color-grayscale-500] ">
                비밀번호 찾기
              </button>
            </div>
          </form>

          <div className="flex flex-col gap-4">
            <button type="submit" form="loginForm">
              <LoginButton
                bgColor="bg-[--color-main-green]"
                textColor="text-white"
                text=" 로그인"
                border="none"
              />
            </button>

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

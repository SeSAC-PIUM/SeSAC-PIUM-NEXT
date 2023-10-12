import React, { useEffect, useRef, useState } from "react";
import CheckBoxButton from "../atoms/button/CheckBoxButton";
import GreenButton from "../atoms/button/GreenButton";
import SignUpInput from "../atoms/input/DefaultInput";
import WarningLabel from "../atoms/label/WarningLabel";

import LogoName from "../../img/logo&name.svg";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "@/firebase/auth";
import { useRouter } from "next/router";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import db from "@/firebase/db";
import Link from "next/link";

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

var emailRegular = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

export default function SignUpTemplate({}) {
  const className = "flex flex-wrap bg-slate-100 items-start  pb- w-full";

  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [signAll, setSignAll] = useState<Boolean>(false);
  const [signUp1, setSignUp1] = useState<Boolean>(false);
  const [signUp2, setSignUp2] = useState<Boolean>(false);
  const [signUp3, setSignUp3] = useState<Boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    getValues,
  } = useForm<signUpForm>({ mode: "onChange" });

  const onValid = async (data: signUpForm) => {
    if (!(signUp1 && signUp2)) {
      //문구 정해야함
      alert("이용약관에 동의 해주세요.");
      return;
    }

    setLoading(true);

    try {
      // 유저 계정 생성
      const credentials = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      // 자동 id 생성
      // const doc = await addDoc(collection(db, "user"), {
      //   userEmail: data.email,
      //   adReceive: signUp3,
      // });

      // 수동 id 생성 ( 회원가입시 나요는 uid 활용 )
      const newDocRef = doc(db, "user", credentials.user.uid);
      await setDoc(newDocRef, { userEmail: data.email, adReceive: signUp3 });

      router.push("/signUp_001_Basic");
    } catch (e) {
      console.log(e);
      alert("이미 사용중인 이메일입니다.");
    }

    setLoading(false);

    // 유저 정보 업데이트
    // await updateProfile(credentials.user, {
    //   displayName: name,
    // });
  };

  const onInvalid = () => {};

  //약관동의 체크
  //전체동의 이벤트
  useEffect(() => {
    if (signAll) {
      setSignUp1(true);
      setSignUp2(true);
      setSignUp3(true);
    } else if (!signAll && signUp1 && signUp2 && signUp3) {
      setSignUp1(false);
      setSignUp2(false);
      setSignUp3(false);
    }
  }, [signAll]);

  // 개별 동의시 모두 체크하면 전체 동의 체크 아니면 해제
  useEffect(() => {
    if (signUp1 && signUp2 && signUp3) {
      setSignAll(true);
    } else {
      setSignAll(false);
    }
  }, [signUp1, signUp2, signUp3]);

  return (
    <>
      <section className="w-[360px] m-auto pt-[60px]">
        <div className="flex flex-col gap-4 items-center">
          <Image src={LogoName} alt="logo_name" className="object-contain " />
          <div className="mb-[48px]  font-semibold ">
            <span className="text-[--color-grayscale-600] mr-2">
              이미 회원이신가요?
            </span>
            <Link href="/signIn" className="text-[--color-main-green] ">
              {" "}
              로그인
            </Link>
          </div>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={handleSubmit(onValid, onInvalid)}
          id="signUpForm"
        >
          <div className="flex flex-col gap-4">
            <div>
              <SignUpInput
                register={register("email", {
                  validate: {
                    email: (value) =>
                      emailRegular.test(value) || "이메일을 입력해주세요.",
                  },
                })}
                type="email"
                placeholder="이메일"
                autoComplete="autoComplete"
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
                autoComplete="current-password"
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
                autoComplete="current-password"
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
              check={signAll}
              setCheck={setSignAll}
            />
            <button className="text-[--color-grayscale-500] ">자세히</button>
          </div>

          <div className="flex flex-col gap-4 px-8">
            <CheckBoxButton
              label="(필수) 개인정보 수집 이용 동의"
              name="signUp"
              value="(필수) 개인정보 수집 이용 동의"
              check={signUp1}
              setCheck={setSignUp1}
            />
            <CheckBoxButton
              label="(필수) 개인정보 제3자 제공 동의"
              name="signUp"
              value="(필수) 개인정보 제3자 제공 동의"
              check={signUp2}
              setCheck={setSignUp2}
            />
            <CheckBoxButton
              label="(선택) 광고성 정보수진 동의"
              name="signUp"
              value="(선택) 광고성 정보수진 동의"
              check={signUp3}
              setCheck={setSignUp3}
            />
          </div>
        </form>

        <button type="submit" form="signUpForm" disabled={isLoading}>
          <GreenButton className="my-6 w-[360px]" text="다음" />
        </button>
      </section>
    </>
  );
}

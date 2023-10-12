import React from "react";
import GreenButton from "../atoms/button/GreenButton";
import PageTitle from "../atoms/label/PageTitle";
import BorderBottom from "../atoms/label/BorderBottom";
import { useForm } from "react-hook-form";
import SignUpContentName from "../organism/SignUpContentName";
import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
import SignUpContentJob from "../organism/SignUpContentJob";
import SignUpContentGender from "../organism/SignUpContentGender";
import SignUpContentMentoring from "../organism/SignUpContentMentoring";
import SignUpContentIProfile from "../organism/SignUpContentIProfile";
import SignUpContentIntroduce from "../organism/SignUpContentIntroduce";
import SignUpContentMbti2 from "../organism/SignUpContentMBTI2";
import SignUpContentHistory from "../organism/SignUpContentHistory";
import SignUpContentLike from "../organism/SignUpContentLike";

interface basicInfo {
  name: string;
}

export default function SignUpTemplate({}) {
  // const className = "flex flex-wrap  bg-slate-100 items-start py-6 w-full";
  const className = "flex flex-col items-start py-6 ";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<basicInfo>();

  const onValid = () => {
    console.log("성공");
  };

  const inVaild = () => {
    console.log("실패");
  };

  return (
    <>
      <section className=" max-w-[800px] w-full m-auto ">
        <form onSubmit={handleSubmit(onValid, inVaild)}>
          <PageTitle
            title1="프로젝트를 위한"
            PointTitle1="기본정보"
            title2="입력"
            PointTitle2=""
            border="border-b-[1px] border-[--color-grayscale-600]"
          />
          {/* <SignUpContentFirst register={register} error /> */}

          <SignUpContentName
            className={className}
            register={register("name", {
              required: true,
              validate: {
                // name: (value) => value.length < 3 && "세글자 이상 입력하세요.",
                name: (value) => {
                  const koreanRegex = /^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]*$/;
                  return (
                    koreanRegex.test(value) || "한글로 실명을 입력해주세요."
                  );
                },
              },
            })}
            errors={errors}
          />

          <SignUpContentCurriculum
            className={className}
            register={register("name", { required: true })}
          />
          <SignUpContentGender
            className={className}
            register={register("name", { required: true })}
          />
          <SignUpContentJob
            className={className}
            register={register("name", { required: true })}
          />
          <SignUpContentMentoring
            className={className}
            register={register("name", { required: true })}
          />

          <BorderBottom marginTop={"mt-[64px]"} marginBottom={"mb-[120px]"} />

          {/* <SignUpContentSecond /> */}
          <SignUpContentIProfile className={className} />
          <SignUpContentIntroduce className={className} />
          <SignUpContentMbti2 className={className} />
          <SignUpContentHistory className={className} />
          <SignUpContentLike className={className} />

          <BorderBottom marginTop={"mt-[64px]"} marginBottom={"mb-2"} />

          <button>
            <GreenButton
              className="max-w-[400px] w-full m-auto mt-12"
              text="가입완료"
            />
          </button>
        </form>
      </section>
    </>
  );
}

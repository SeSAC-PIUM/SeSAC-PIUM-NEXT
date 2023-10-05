// // import SubmitButton from "../components/atoms/button/SubmitButton";
// // import MainMakingProjectButton from "../components/atoms/button/MainMakingProjectButton";
// // import ProfileButton from "../components/atoms/button/ProfileButton";
// // import DefaultButton from "../components/atoms/button/DefaultButton";
import ChipsForm from "../components/molecule/ChipsForm";
import CardTitle from "../components/atoms/label/CardTitle";
import SignUpInput from "../components/atoms/input/SignUpInput";
// import { skiils } from "../data/skill";
import { useState, useCallback } from "react";
import PageTitle from "../components/atoms/label/PageTitle";
import SectionTitle from "../components/atoms/label/SectionTitle";
import DefaultButton from "../components/atoms/button/DefaultButton";
import DefaultCard from "../components/atoms/card/DefaultCard";
import SelectedButton from "../components/atoms/button/SelectedButton";
import ThumbnailMaker from "../components/organism/ThumbnailMaker";

function BorderBottom() {
  return <p className="w-full h-px bg-[--color-grayscale-300] mt-4 mb-12"></p>;
}

export default function CreateProject() {
  const days = [
    {
      item: "요일 미정",
      value: "undecided",
    },
    {
      item: "월요일",
      value: "monday",
    },
    {
      item: "화요일",
      value: "tuesday",
    },
    {
      item: "수요일",
      value: "wednesday",
    },
    {
      item: "목요일",
      value: "thursday",
    },
    {
      item: "금요일",
      value: "friday",
    },
    {
      item: "토요일",
      value: "saturday",
    },
    {
      item: "일요일",
      value: "sunday",
    },
  ];

  const skills = [
    {
      item: "Javascript",
      value: "javascript",
    },
    {
      item: "Typescript",
      value: "Typescript",
    },
    {
      item: "Nextjs",
      value: "Nextjs",
    },
    {
      item: "Java",
      value: "Java",
    },
    {
      item: "Spring",
      value: "Spring",
    },
    {
      item: "Nodejs",
      value: "Nodejs",
    },
    {
      item: "Mongodb",
      value: "Mongodb",
    },
    {
      item: "Python",
      value: "Python",
    },
    {
      item: "Figma",
      value: "Figma",
    },
    {
      item: "Zeplin",
      value: "Zeplin",
    },
  ];

  return (
    <div className="my-0 mx-auto max-w-[1200px] px-5">
      <main>
        <PageTitle
          title1=""
          PointTitle1="프로젝트"
          title2=" 생성"
          PointTitle2=""
        ></PageTitle>
        <section className="mb-40">
          <SectionTitle
            title1="프로젝트 기본 정보를 입력해주세요"
            PointTitle1=""
            title2=""
            PointTitle2=""
          ></SectionTitle>
          <BorderBottom></BorderBottom>
          <div className="flex flex-col gap-12">
            <div className="flex flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <CardTitle
                  title1="캠퍼스"
                  PointTitle1=""
                  title2=""
                  PointTitle2=""
                ></CardTitle>
                <SignUpInput placeholder="캠퍼스를 선택해주세요"></SignUpInput>
              </div>
              <div className="flex-1">
                <CardTitle
                  title1="진행기간"
                  PointTitle1=""
                  title2=""
                  PointTitle2=""
                ></CardTitle>
                <div className="flex gap-[10px]">
                  <SignUpInput placeholder="시작 날짜"></SignUpInput>
                  <SignUpInput placeholder="마감 날짜"></SignUpInput>
                </div>
              </div>
            </div>
            <div>
              <CardTitle
                title1="작업요일"
                PointTitle1=""
                title2=""
                PointTitle2=""
              ></CardTitle>
              <ChipsForm text={days}></ChipsForm>
            </div>
            <div>
              <CardTitle
                title1="모집 기술"
                PointTitle1=""
                title2=""
                PointTitle2=""
              ></CardTitle>
              <ChipsForm text={skills}></ChipsForm>
            </div>
            <div>
              <CardTitle
                title1="나의 포지션"
                PointTitle1=""
                title2=""
                PointTitle2=""
              ></CardTitle>
              <DefaultCard>
                {/* 데이터 받아와야 함 */}프론트엔드 / 멘토
              </DefaultCard>
            </div>
            <div>
              <CardTitle
                title1="모집 포지션"
                PointTitle1=""
                title2=""
                PointTitle2=""
              ></CardTitle>
              <div className="flex">
                <SignUpInput placeholder="포지션을 선택해주세요."></SignUpInput>
                <DefaultCard>멘토 1명</DefaultCard>
                <DefaultCard>멘티 1명</DefaultCard>
                <SelectedButton>추가</SelectedButton>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-40">
          <SectionTitle
            title1="프로젝트 대표 이미지를 설정해주세요"
            PointTitle1=""
            title2=""
            PointTitle2=""
          ></SectionTitle>
          <BorderBottom></BorderBottom>
          <ThumbnailMaker></ThumbnailMaker>
        </section>
      </main>
    </div>
  );
}

// export default function Home() {
//   // const [check, setCheck] = useState([]);
//   // const onClickEvent = useCallback(
//   //   (checked, item) => {
//   //     console.log(check);
//   //     if (checked) {
//   //       setCheck((prev) => [...prev, item]);
//   //     } else if (!checked) {
//   //       setCheck(check.filter((el) => el !== item));
//   //     }
//   //   },
//   //   [check]
//   // );
//   return (
//     <main>
//       <div className="flex justify-center items-center">
//       <ChipsForm text={skills}></ChipsForm>
//       </div>
//     </main>
//   );
// }

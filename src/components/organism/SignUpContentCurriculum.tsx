import React, { useEffect, useState } from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/DefaultInput";
import Image from "next/image";
import dropDown from "../../img/dropDown.svg";
import {
  UseFormGetValues,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import UseAutocomplete from "../molecule/DropDown";
interface SignUpContentCurriculumProps {
  className?: string;
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  watch: UseFormWatch<any>;
}

const campus = [
  "",
  "강동캠퍼스",
  "강서캠퍼스",
  "광진캠퍼스",
  "금천캠퍼스",
  "동작캠퍼스",
  "마포캠퍼스",
  "서대문캠퍼스",
  "용산캠퍼스",
  "종로캠퍼스",
  "중구캠퍼스",
];

const campusClasses = [
  { name: "", classes: [] },
  {
    name: "강동캠퍼스",
    classes: [
      "모든 직무에서 활용 가능한 웹 퍼블리싱 과정",
      "디지털 트레이드 엑스퍼트",
      "NAVER Cloud 클라우드 실무교육과정",
      "언리얼 엔진을 활용한 XR콘텐츠 개발자 양성 과정",
      "GoogleCloud 기반 인공지능 개발자 과정    ",
      "블록체인 플랫폼 융합 게임서버 개발자 양성 과정",
    ],
  },
  {
    name: "강서캠퍼스",
    classes: [
      "데이터기반 디지털 마케팅 실전 취업 원패스",
      "이커머스 특화 전Z전능 콘텐츠 마케터 양성과정",
    ],
  },
  {
    name: "광진캠퍼스",
    classes: [
      "데이터 드리븐 패션 MD 실전",
      "데이터 드리븐 퍼포먼스 마케팅 체인저스 1기",
    ],
  },
  {
    name: "금천캠퍼스",
    classes: [
      "ChatGPT를 활용한 생성형/대화형 인공지능 개발자",
      "AI융합 서비스 개발자 양성과정",
      "언리얼엔진을 활용한 인터렉티브 XR 실감콘텐츠 개발자 과정",
    ],
  },
  {
    name: "동작캠퍼스",
    classes: [
      "데이터 드리븐 서비스 기획 체인저스",
      "유니콘 기업 현직자에게 배우는 IT 서비스 기획자 취업캠프",
    ],
  },
  {
    name: "마포캠퍼스",
    classes: ["데이터 드리븐 퍼포먼스 마케팅 체인저스 2기"],
  },
  {
    name: "서대문캠퍼스",
    classes: [
      "프로젝트와 포트폴리오를 한 번에! 3D 모션그래픽 취업 클래스",
      "파이썬 기반의 풀스택 웹서비스 개발 과정",
      "유니티와 로블록스를 활용한 메타버스 게임 제작 과정",
      " Python 기반의 탄탄한 데이터 분석 기초부터 인공지능&딥러닝 과정",
    ],
  },

  {
    name: "용산캠퍼스",
    classes: [
      "사풀스택 웹 융합 개발자 양성 과정",
      "사물인터넷과 메타버스를 연계한 SW 개발자 과정",
      "핀테크 특화 데이터/AI 엔지니어 <핀테커스>",
      "하이브리드 클라우드 데이터옵스 엔지니어 양성과정",
    ],
  },
  {
    name: "종로캠퍼스",
    classes: [
      "실무요건 기반 핀테크 데이터 분석가 과정",
      "주얼리 데이터 드리븐(Date-driven) MD 데뷔과정",
      "브랜디 패션 플랫폼 콘텐츠 프로바이더 과정",
    ],
  },
  {
    name: "중구캠퍼스",
    classes: [
      "3D 디지털 융합 패션 전문가 양성과정-여성복",
      "3D 디지털 융합 패션 전문가 양성과정-남성복",
      "핀테크 특화 데이터 드리븐 UI/UX 디자이너 <핀테커스",
    ],
  },
];

const empty = () => {};

export default function SignUpContentCurriculum({
  className,
  register,
  setValue,
  watch,
}: SignUpContentCurriculumProps) {
  const [isCampus, setCampus] = useState("");
  const [isClasses, setClasses] = useState<string[]>([]);
  const [isClass, setClass] = useState("");

  let watchedCampus = watch("campus", isCampus);
  let watchedClass = watch("class", isClass);

  useEffect(() => {
    campusClasses.forEach((value) => {
      if (value.name === isCampus) {
        setClasses(value.classes);
      }
    });
    setValue("campus", isCampus);
  }, [isCampus]);

  useEffect(() => {
    if (isCampus !== watchedCampus) {
      setCampus(watchedCampus);
    }
    if (isClass !== watchedClass) {
      setClass(watchedClass);
    }
  }, [watchedCampus, watchedClass]);

  console.log("watchedCampus, watchedClass", watchedCampus, watchedClass);

  return (
    <>
      <div className={className}>
        <SignUpTitleBox title="수강 교육과정" />
        <div className="flex flex-col gap-2 ">
          {/* <SignUpInput placeholder="캠퍼스 선택">
            <Image className="absolute right-6" src={dropDown} alt="dropDown" />
          </SignUpInput> */}
          <UseAutocomplete
            kind={"campus"}
            onLifting={setCampus}
            item={campus}
            placeholder="캠퍼스 선택"
            defaultValue={isCampus}
          ></UseAutocomplete>
          {/* <SignUpInput placeholder="클래스 선택">
            <Image className="absolute right-6" src={dropDown} alt="dropDown" />
          </SignUpInput> */}
          <UseAutocomplete
            kind={"class"}
            onLifting={setValue}
            item={isClasses}
            placeholder="클래스 선택"
            defaultValue={isClass}
          ></UseAutocomplete>
        </div>
      </div>
    </>
  );
}

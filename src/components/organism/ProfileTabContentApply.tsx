import React from "react";

import DefaultLabel from "../atoms/label/DefaultLabel";
import SectionCard from "../atoms/card/SectionCard";
import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function ProfileTabContentApply() {
  const addClassName = "inline-block mr-3 px-6 py-3";

  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8 ">
        <DefaultLabel title="🌱 나의 지원현황 " addClassName="font-semibold" />

        <section className="flex gap-6 overflow-x-auto">
          <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
            <CardHeader
              text1="PIUM"
              text2="[강동] 새싹 프로젝트 매칭 플랫폼"
              text3="푸시알람 관심제품 추천 및 핫딜 공유 서비스"
              href=""
            ></CardHeader>
            <CardFooter data={"4/5"}></CardFooter>
          </div>
          <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
            <CardHeader
              text1="PIUM"
              text2="[강동] 새싹 프로젝트 매칭 플랫폼"
              text3="푸시알람 관심제품 추천 및 핫딜 공유 서비스"
              href=""
            ></CardHeader>
            <CardFooter data={"4/5"}></CardFooter>
          </div>
          <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
            <CardHeader
              text1="PIUM"
              text2="[강동] 새싹 프로젝트 매칭 플랫폼"
              text3="푸시알람 관심제품 추천 및 핫딜 공유 서비스"
              href=""
            ></CardHeader>
            <CardFooter data={"4/5"}></CardFooter>
          </div>
          <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
            <CardHeader
              text1="PIUM"
              text2="[강동] 새싹 프로젝트 매칭 플랫폼"
              text3="푸시알람 관심제품 추천 및 핫딜 공유 서비스"
              href=""
            ></CardHeader>
            <CardFooter data={"4/5"}></CardFooter>
          </div>
          <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
            <CardHeader
              text1="PIUM"
              text2="[강동] 새싹 프로젝트 매칭 플랫폼"
              text3="푸시알람 관심제품 추천 및 핫딜 공유 서비스"
              href=""
            ></CardHeader>
            <CardFooter data={"4/5"}></CardFooter>
          </div>
        </section>
      </SectionCard>
    </>
  );
}

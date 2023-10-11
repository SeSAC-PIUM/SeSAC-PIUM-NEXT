import React from "react";
import AnyButtonGreen from "../atoms/button/AnyButtonGreen";
import DefaultLabel from "../atoms/label/DefaultLabel";
import CardHeader from "../atoms/card/CardHeader";
import MainModal from "../atoms/modal/MainModal";
import AnyButtonGray from "../atoms/button/AnyButtonGray";

export default function ProfileTabContentMyProject() {
  const addClassName = "inline-block mr-3 px-6 py-3";

  return (
    <>
      <DefaultLabel
        title="📌 나의 프로젝트 관리 "
        addClassName="font-semibold"
      />

      <section className="flex gap-10">
        <CardHeader
          text1="PIUM"
          text2="[강동] 새싹 프로젝트 매칭 플랫폼"
          text3="푸시알람 관심제품 추천 및 핫딜 공유 서비스"
          href=""
        ></CardHeader>

        <MainModal />
        <div className="flex flex-col gap-6">
          <AnyButtonGreen text="프로젝트 수정" addClassName="min-w-[148px]" />
          <AnyButtonGray text="프로젝트 삭제" addClassName="min-w-[148px] " />
        </div>
      </section>
    </>
  );
}

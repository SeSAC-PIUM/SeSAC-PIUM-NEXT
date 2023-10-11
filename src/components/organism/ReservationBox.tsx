import React from "react";
import SelectedButton from "../atoms/button/SelectedButton";
import DefaultLabel from "../atoms/label/DefaultLabel";
import DefaultButton from "../atoms/button/DefaultButton";
import DefaultCard from "../atoms/card/DefaultCard";

export default function reservationBox() {
  return (
    <>
      <section className="border rounded flex flex-col gap-y-8 p-8">
        <SelectedButton>예약하기</SelectedButton>

        <article className="flex flex-col gap-3">
          <div className="campus">
            <DefaultLabel title="캠퍼스" />
            <DefaultLabel title="강동캠퍼스" />
          </div>

          <div className="address">
            <DefaultLabel title="주소" />
            <DefaultLabel title="서울특별시 강동구 고덕로 429 팍스애비뉴 4~5층(5호선 강일역)" />
          </div>

          <div className="UtilizationHours">
            <DefaultLabel title="이용시간" />
            <DefaultLabel title="오전 8:00 ~ 오후 11시 (매일)" />
          </div>

          <div className="contact">
            <DefaultLabel title="연락처" />
            <DefaultLabel title="02-6249-1601" />
          </div>
        </article>

        <article>
          <div className="hashTag flex flex-wrap gap-2">
            <DefaultButton># 노트북대여</DefaultButton>
            <DefaultButton># 빔 프로젝트 대여</DefaultButton>
            <DefaultButton># 주차 불가능</DefaultButton>
            <DefaultButton># 간식 제공</DefaultButton>
            <DefaultButton># 5호선 강일역</DefaultButton>
            <DefaultButton># 58시 ~ 23시</DefaultButton>
          </div>
        </article>
      </section>
    </>
  );
}

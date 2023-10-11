import React from "react";
import ReservationBox from "../organism/ReservationBox";
import PageTitle from "../atoms/label/PageTitle";
// import SectionTitle from "../atoms/label/SectionTitle";

export default function reservationTemplate() {
  return (
    <>
      <PageTitle
        title1="공간예약"
        title2=""
        PointTitle1=""
        PointTitle2=""
        border="border-b-[1px]"
      />
      {/* <SectionTitle
        title1=""
        PointTitle1="강동캠퍼스"
        title2="스터디 공간을 예약해 보세요"
        PointTitle2=""
        border="border-b-2"
      /> */}
      <ReservationBox />
    </>
  );
}

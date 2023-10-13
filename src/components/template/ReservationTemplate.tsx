import React from "react";
import ReservationBox from "../organism/ReservationBox";
import SwiperReservation from "../organism/SwiperReservation";
import PageTitle from "../atoms/label/PageTitle";
// import SectionTitle from "../atoms/label/SectionTitle";

export default function reservationTemplate() {
  return (
    <>
      <section className=" max-w-[800px] w-full m-auto mb-[44px]">
        <PageTitle
          title1="공간예약"
          title2=""
          PointTitle1=""
          PointTitle2=""
          border="border-b-[1px]"
        />
        <div className="flex flex-wrap pt-[40px]">
          <SwiperReservation />
          <ReservationBox />
        </div>
      </section>
    </>
  );
}

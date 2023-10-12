import Image from "next/image";
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

import gd0 from "@/img/gd_0.jpg";
import gd1 from "@/img/gd_1.jpg";
import gd2 from "@/img/gd_2.jpg";
import gd3 from "@/img/gd_3.jpg";
import gd4 from "@/img/gd_4.jpg";
import gd5 from "@/img/gd_5.jpg";
import SectionCard from "../atoms/card/SectionCard";

export default function SwiperReservation() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides={true}
        loop={true}
        speed={5000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image className="w-full h-full" src={gd0} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-full" src={gd1} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-full" src={gd2} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-full" src={gd3} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-full" src={gd4} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide>
          <Image className="w-full h-full" src={gd5} alt="캠퍼스"></Image>
        </SwiperSlide>
      </Swiper>
    </>
  );
}

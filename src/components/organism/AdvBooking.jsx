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

export default function AdvBooking() {
  let images = ["gd_0.jpg", "gd_1.jpg", "gd_2.jpg", "gd_3.jpg", "gd_4.jpg"];
  return (
    <div className="card_container flex">
      {/* <Swiper
        slidesPerView={4.5}
        spaceBetween={24}
        centeredSlides={true}
        loop={true} 
        speed={10000}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper w-full"
      >
        
        <SwiperSlide className="w-[384px]">
          0
          <Image className="w-[384px] h-[240px]" src={gd0} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          1
          <Image className="w-[384px] h-[240px]" src={gd1} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          2
          <Image className="w-[384px] h-[240px]" src={gd2} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          3
          <Image className="w-[384px] h-[240px]" src={gd3} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          4
          <Image className="w-[384px] h-[240px]" src={gd4} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          5
          <Image className="w-[384px] h-[240px]" src={gd5} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          0
          <Image className="w-[384px] h-[240px]" src={gd0} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          1
          <Image className="w-[384px] h-[240px]" src={gd1} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          2
          <Image className="w-[384px] h-[240px]" src={gd2} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          3
          <Image className="w-[384px] h-[240px]" src={gd3} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          4
          <Image className="w-[384px] h-[240px]" src={gd4} alt="캠퍼스"></Image>
        </SwiperSlide>
        <SwiperSlide className="w-[384px]">
          5
          <Image className="w-[384px] h-[240px]" src={gd5} alt="캠퍼스"></Image>
        </SwiperSlide>
      </Swiper> */}
      <ul>
        {images.map((e, i) => {
          return (
            <li key={i}>
              <a>
                <div
                  className="card_img"
                  style={{ backgroundImage: `url(../../img/${e})` }}
                ></div>
              </a>
            </li>
          );
        })}
      </ul>
      <ul>
        {images.map((e, i) => {
          return (
            <li key={i}>
              <a>
                <div
                  className="card_img"
                  style={{ backgroundImage: `url(../../img/${e})` }}
                ></div>
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

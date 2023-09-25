import Image from "next/image";
import { useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../atoms/button/SwiperButton";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";

export default function SwiperComponents({ className, slideClassName, lists }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const setting = {
    className,
    pagination: true,
    modules: [Pagination, Navigation, Autoplay],
    autoplay: true,
    navigation: {
      prevEl: prevRef.current, // 이전 버튼
      nextEl: nextRef.current, // 다음 버튼
    },
    onBeforeInit: (swiper) => {
      // 초기 설정
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.update();
    },
    loop: true,
  };

  return (
    <div className="relative group">
      <SwiperButton position="left" buttonRef={prevRef} />
      <Swiper {...setting}>
        {lists.map((v, i) => (
          <SwiperSlide className={slideClassName} key={i}>
            {v}
          </SwiperSlide>
        ))}
      </Swiper>
      <SwiperButton position="right" buttonRef={nextRef} />
    </div>
  );
}

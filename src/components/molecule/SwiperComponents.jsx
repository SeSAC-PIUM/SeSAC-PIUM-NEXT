import Image from "next/image";
import { useRef, useState } from "react";

import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperButton from "../atoms/button/SwiperButton";
import "swiper/swiper-bundle.css";

import "swiper/scss";
import "swiper/scss/navigation";
import "swiper/scss/pagination";
import "swiper/swiper-bundle.css";

export default function SwiperComponents({ className, slideClassName, lists }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const setting = {
    className,
    pagination: {
      type: "fraction",
    },
    modules: [Pagination, Navigation, Autoplay, Mousewheel],
    autoplay: {
      dispay: 3000,
      disableOnInteraction: false,
    },
    mousewheel: true,
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
    <div className="relative group w-[906px]  h-[260px] m-0">
      <Swiper {...setting}>
        {lists.map((v, i) => (
          <SwiperSlide className={slideClassName} key={i}>
            {v}
          </SwiperSlide>
        ))}
        <div class="flex">
          <SwiperButton position="left" buttonRef={prevRef} />
          <SwiperButton position="right" buttonRef={nextRef} />
        </div>
      </Swiper>
    </div>
  );
}

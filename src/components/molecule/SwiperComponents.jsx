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
import left from "@/img/Frame 186.png";
import right from "@/img/Frame 187.png";
import stop from "@/img/pause_FILL1_wght400_GRAD0_opsz48 1.png";
import start from "@/img/start.png";

import BannerMenu from "@/components/atoms/button/BannerMenu";

export default function SwiperComponents({ className, slideClassName, lists }) {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef();
  const [play, setPlay] = useState(true);
  // const buttonStyle = {
  //   border: "1px solid blue",
  //   marginRight: "15px",
  // };

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
    <div className="flex flex-col w-full">
      <div className="relative group w-[906px]  h-[260px] m-0 mb-[10px]">
        <Swiper
          {...setting}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          {lists.map((v, i) => (
            <SwiperSlide className={slideClassName} key={i}>
              {v}
              <SwiperButton position="left" buttonRef={prevRef} />
              <SwiperButton position="right" buttonRef={nextRef} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex  justify-center items-center gap-[16px]">
        {/* <button
          style={buttonStyle}
          onClick={() => swiperRef.current.slideToLoop(0)}
        >
          버튼1
        </button>
        <button
          style={buttonStyle}
          onClick={() => swiperRef.current.slideToLoop(1)}
        >
          버튼2
        </button>
        <button
          style={buttonStyle}
          onClick={() => swiperRef.current.slideToLoop(2)}
        >
          버튼3
        </button> */}
        <div>
          <button
            // style={buttonStyle}
            onClick={() => swiperRef.current.slidePrev()}
          >
            <Image src={left} alt="left"></Image>
          </button>
          <button
            className="mx-[12px]"
            onClick={() => {
              setPlay(!play);
            }}
          >
            {play ? (
              <button
                // style={buttonStyle}
                onClick={() => swiperRef.current.autoplay.stop()}
              >
                <Image src={stop} alt="stop"></Image>
              </button>
            ) : (
              <button
                className="w-[14px] h-[14px] text-[#464656]"
                onClick={() => swiperRef.current.autoplay.start()}
              >
                <Image src={start} alt="start"></Image>
              </button>
            )}
          </button>
          <button
            // style={buttonStyle}
            onClick={() => swiperRef.current.slideNext()}
          >
            <Image src={right} alt="right"></Image>
          </button>
        </div>
        <div onClick={() => swiperRef.current.slideToLoop(2)}>
          <BannerMenu text="매칭데이 안내 🎉"></BannerMenu>
        </div>
        <div onClick={() => swiperRef.current.slideToLoop(0)}>
          <BannerMenu text="이용가이드 ✏️"></BannerMenu>
        </div>
        <div onClick={() => swiperRef.current.slideToLoop(1)}>
          <BannerMenu text="이달의 프로젝트 💎"></BannerMenu>
        </div>
        <BannerMenu text="현직자 멘토링 🔮"></BannerMenu>
        <BannerMenu text="퍼스널 컬러 🎨"></BannerMenu>
        {/* <BannerMenu text="랜덤매칭이란? 🎈"></BannerMenu>
        <BannerMenu text="수강후기 이벤트 🎁"></BannerMenu>
        <BannerMenu text="취직 이야기👑"></BannerMenu> */}
      </div>
    </div>
  );
}

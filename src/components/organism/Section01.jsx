import Image from "next/image";
import styles from "@/styles/main.module.css";
import SwiperComponents from "@/components/molecule/SwiperComponents.jsx";
import MainRadomMatchingButton from "@/components/atoms/button/MainRandomMatchingButton.jsx";
import MainMakingProjectButton from "@/components/atoms/button/MainMakingProjectButton.jsx";
import banner_icon07 from "@/img/banner_icon07.png";
import banner_icon04 from "@/img/banner_icon04.png";
import banner_icon01 from "@/img/banner_icon01.png";

export default function Home() {
  const mainBannerList = [
    <div className="bg-[#fffbf3] h-[16.25rem] " key={1}>
      <div className="relative top-[50%] left-[80px] w-[80%] translate-y-[-50%] ">
        <div className=" tracking-[-1.28px] mb-[16px] relative text-[32px]  leading-[140%] text-[#464656] font-semibold">
          처음이신가요?
          <br />
          <span className="text-[#e87300]">이용가이드</span>
        </div>
        <div className="font-[500] text-[14px] text-[#464656]">
          PIUM을 처음 이용하시는 당신을 위한 가이드!
        </div>
      </div>
      <Image
        className="absolute top-[40px] right-[8%]"
        src={banner_icon07}
        alt="compass"
      />
    </div>,
    <div className="bg-[#112647] h-[16.25rem] " key={2}>
      <div className="relative top-[50%] left-[80px] w-[80%] translate-y-[-50%] ">
        <div className="text-[32px] font-semibold leading-[140%] text-[#ffc927]">
          완성 <span className="text-[#fff]">프로젝트</span>
          <br />
          <p className="tracking-[-1.28px] mb-[16px] text-[32px] font-semibold leading-[140%] text-[#fff]">
            둘러보기
          </p>
        </div>
        <div className="text-[14px] font-[500] text-[#fff]">
          다른 사람들은 어떻게 했을까?
        </div>
      </div>
      <Image
        className="absolute top-[40px] right-[8%]"
        src={banner_icon04}
        alt="star"
      />
    </div>,
    <div className="bg-[#e0eeff] h-[16.25rem]" key={3}>
      <div className="relative top-[50%] left-[80px] w-[80%] translate-y-[-50%] ">
        <div className="text-[32px] text-[#464656] font-semibold leading-[140%]">
          8월 <span className="text-[#3e8bff]">매칭데이</span>
          <br />
          개최 안내
        </div>
        <div className="text-[14px] font-[500] text-[#464656]">
          새싹 교육생들을 위한 8월 매칭데이가 8월 18일에 열립니다!
        </div>
      </div>
      <Image
        className="absolute top-[40px] right-[8%]"
        src={banner_icon01}
        alt="Party"
      />
    </div>,
  ];
  return (
    <main>
      {/* <h1>메인 작업 페이지 입니다.</h1> */}
      {/* <!-- Slides --> */}
      <div className="flex justify-center">
        <div className="flex gap-3 ">
          <SwiperComponents
            // className={`${styles["swiper-wrapper"]}`}
            className="rounded-[8px]"
            // slideClassName={`${styles["swiper-slide"]}`}
            lists={mainBannerList}
          />
          <div className="flex flex-col gap-y-3">
            <MainRadomMatchingButton />
            <MainMakingProjectButton />
          </div>
        </div>
      </div>
    </main>
  );
}

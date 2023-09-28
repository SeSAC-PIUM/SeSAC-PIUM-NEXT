import Image from "next/image";
import styles from "@/styles/main.module.css";
import SwiperComponents from "../components/molecule/SwiperComponents.jsx";
import MainRadomMatchingButton from "@/components/atoms/button/MainRandomMatchingButton.jsx";
import MainMakingProjectButton from "@/components/atoms/button/MainMakingProjectButton.jsx";

export default function Home() {
  const testFont = {
    fontWeight: "900",
    color: "red",
    fontFamily: "Pretendard Variable",
  };
  const mainBannerList = [
    <div className="bg-[#fffbf3] h-[16.25rem]" key={1}>
      <div className="relative top-[50%] left-[80px] w-[80%] translate-y-[-50%] ">
        <div className=" tracking-[-1.28px] mb-[16px] relative text-[32px]  leading-[140%] text-[#464656] font-semibold">
          처음이신가요?
          <br />
          <span className="text-[#e87300]">이용가이드</span>
          <div style={testFont}>안녕하세요</div>
        </div>
        <div className="">PIUM을 처음 이용하시는 당신을 위한 가이드!</div>
      </div>
      <Image
        width={100}
        height={100}
        src="/img/banner_icon07.png"
        alt="compass"
      />
    </div>,
    <div
      className="bg-[#112647] h-[16.25rem]"
      style={{ backgroundColor: "#112647" }}
      key={2}
    >
      <div className={`${styles["slide-tit"]}`}>
        <div className={`${styles.slide_title4}`}>
          완성 <span style={{ color: "#fff" }}>프로젝트</span>
          <br />
          <p className={`${styles.slide_title2}`} style={{ color: "#fff" }}>
            둘러보기
          </p>
        </div>
        <div className={`${styles.slide_title_desc}`} style={{ color: "#fff" }}>
          다른 사람들은 어떻게 했을까?
        </div>
      </div>
      <Image width={100} height={100} src="/img/banner_icon04.png" alt="star" />
    </div>,
    <div
      className="bg-[#e0eeff] h-[16.25rem]"
      style={{ backgroundColor: "#e0eeff" }}
      key={3}
    >
      <div className={`${styles["slide-tit"]}`}>
        <div className={`${styles.slide_title2}`}>
          8월 <span style={{ color: "#3e8bff" }}>매칭데이</span>
          <br />
          개최 안내
        </div>
        <div className={`${styles.slide_title_desc}`}>
          새싹 교육생들을 위한 8월 매칭데이가 8월 18일에 열립니다!
        </div>
      </div>
      <Image
        width={100}
        height={100}
        src="/img/banner_icon01.png"
        alt="Party"
      />
    </div>,
  ];
  return (
    <main>
      {/* <h1>메인 작업 페이지 입니다.</h1> */}
      {/* <!-- Slides --> */}
      <SwiperComponents
        // className={`${styles["swiper-wrapper"]}`}
        className={`${styles.swiper}`}
        slideClassName={`${styles["swiper-slide"]}`}
        lists={mainBannerList}
      />
      <MainRadomMatchingButton />
      <MainMakingProjectButton />
    </main>
  );
}

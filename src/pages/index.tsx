import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/main.module.css";
import SwiperComponents from "../components/molecule/SwiperComponents.jsx";
import { useEffect } from "react";
import auth from "@/firebase/auth";

// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const mainBannerList = [
    <div
      className={`${styles["swiper-slide"]}`}
      style={{ backgroundColor: "#fffbf3" }}
      key={1}
    >
      <div className={`${styles["slide-tit"]}`}>
        <div className={`${styles.slide_title2}`}>
          처음이신가요?
          <br />
          <span className={`${styles.slide_title3}`}>이용가이드</span>
        </div>
        <div className={`${styles.slide_title_desc}`}>
          PIUM을 처음 이용하시는 당신을 위한 가이드!
        </div>
      </div>
      <Image
        width={100}
        height={100}
        src="/img/banner_icon07.png"
        alt="compass"
      />
    </div>,
    <div
      className={`${styles["swiper-slide"]}`}
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
      className={`${styles["swiper-slide"]}`}
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
      <h1>메인 작업 페이지 입니다.</h1>
      {/* <!-- Slides --> */}

      <SwiperComponents
        // className={`${styles["swiper-wrapper"]}`}
        className={`${styles.swiper}`}
        slideClassName={`${styles["swiper-slide"]}`}
        lists={mainBannerList}
      />
      <h1>
        <button
          onClick={() => {
            auth.signOut();
          }}
        >
          {" "}
          Log Out
        </button>
      </h1>
    </main>
  );
}

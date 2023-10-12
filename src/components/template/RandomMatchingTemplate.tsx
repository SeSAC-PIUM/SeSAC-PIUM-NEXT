import React from "react";
import PageTitle from "../atoms/label/PageTitle";
import AnyButtonGreen from "../atoms/button/AnyButtonGreen";
import Image from "next/image";
import randomMatching from "../../img/randomMatching.svg";
import RandomMatchingModal from "../atoms/modal/RandomMatchingModal";
import RandomMatchingModalSuccess from "../atoms/modal/RandomMatchingModalSuccess";

export default function RandomMatchingTemplate() {
  const classNameName = "pb-2";

  return (
    <>
      <section className=" max-w-[640px] w-full m-auto ">
        <PageTitle
          title1="랜덤매칭"
          title2=""
          PointTitle1=""
          PointTitle2=""
          border=""
        />
        <div className="pt-[40px] flex flex-col gap-12">
          <Image src={randomMatching} alt="loginLogo" className="w-full " />
          <div>
            <p className={classNameName}>
              랜덤매칭은 팀 선택이 어려운 분들을 위해 PIUM에서 랜덤으로 팀을
              매칭해주는 서비스입니다.
            </p>
            <p className={classNameName}>
              3일 내로 매칭이 성사되면 카카오톡 알림으로 알려드립니다!{" "}
            </p>
            <p> 가입시 입력하신 캠퍼스/직무 기준으로 매칭이 신청됩니다. </p>
            <p className={classNameName}>
              추가정보를 꼼꼼히 입력할수록 빠르게 매칭 가능합니다.
            </p>
            <p className={classNameName}>
              모든 정보는 우측상단 프로필 아이콘을 클릭해 마이페이지에서
              수정가능합니다.
            </p>
          </div>

          <AnyButtonGreen
            text="랜덤매칭 신청"
            addClassName="m-auto max-w-[400px] "
          />
        </div>

        {/* <RandomMatchingModal /> */}
        {/* <RandomMatchingModalSuccess /> */}
      </section>
    </>
  );
}

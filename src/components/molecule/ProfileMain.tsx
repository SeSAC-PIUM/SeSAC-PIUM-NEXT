import React from "react";
import DefaultLabel from "../atoms/label/DefaultLabel";
import LargeLabel from "../atoms/label/LargeLabel";
import DescriptionLabel from "../atoms/label/DescriptionLabel";
import GreenCard from "../atoms/card/GreenCard";
import DefaultButton from "../atoms/button/DefaultButton";

export default function ProfileMain() {
  return (
    <>
      <div className="flex justify-between">
        <div className="flex gap-10">
          <div className="bg-[--color-grayscale-100] w-[180px] h-[180px] rounded-full"></div>
          <div className="flex flex-col gap-8 justify-center w-[260px] ">
            <div>
              <LargeLabel title="홍길동" />
              <DefaultLabel title="프론트엔드" />
            </div>

            <DescriptionLabel title={"소개 입력란입니다"} />
            <div className="">
              <GreenCard text="멘토" />
              <GreenCard text="ESTJ" />
            </div>
          </div>
        </div>

        <DefaultButton>프로필 수정하기</DefaultButton>
      </div>
    </>
  );
}

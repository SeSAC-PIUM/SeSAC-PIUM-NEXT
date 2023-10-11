import React from "react";
import DefaultCard from "../atoms/card/DefaultCard";
import DefaultLabel from "../atoms/label/DefaultLabel";
import SectionCard from "../atoms/card/SectionCard";

export default function ProfileTabContent() {
  const addClassName = "inline-block mr-3 px-6 py-3";

  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8">
        <p className="font-semibold">🌱 저를 소개할게요! </p>

        <div className="flex flex-col gap-6">
          <div>
            <DefaultCard addClassName={addClassName}> 강동캠퍼스</DefaultCard>
            <span className="p-2 text-[--color-grayscale-600]"> 에서</span>
          </div>

          <div>
            <DefaultCard addClassName={addClassName}>
              모든 직무에 활용 가능한 퍼블리싱 과정
            </DefaultCard>
            <span className="p-2 text-[--color-grayscale-600]">
              {" "}
              를 듣고 있어요
            </span>
          </div>

          <div>
            <DefaultCard addClassName="inline-block text-[--color-main-green]">
              프론트엔드
            </DefaultCard>
            <span className="p-2 text-[--color-grayscale-600]"> 직무의 </span>
            <DefaultCard addClassName="inline-block text-[--color-main-green]">
              멘토
            </DefaultCard>
            <span className="p-2 text-[--color-grayscale-600]">
              역할을 희망하고 있어요
            </span>
          </div>
        </div>
      </SectionCard>
    </>
  );
}

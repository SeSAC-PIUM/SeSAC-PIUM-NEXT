import React from "react";
import DefaultCard from "../atoms/card/DefaultCard";
import DefaultLabel from "../atoms/label/DefaultLabel";
import SectionCard from "../atoms/card/SectionCard";
import basicInfo from "@/data/basicInfo";

interface ProfileTabContentProps {
  data: basicInfo;
}

export default function ProfileTabContent({ data }: ProfileTabContentProps) {
  const addClassName = "inline-block mr-3 px-6 py-3";
  console.log(data);
  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8">
        <DefaultLabel
          title="🌱 저를 소개할게요! "
          addClassName="font-semibold"
        />

        <div className="flex flex-col gap-6">
          <div>
            <DefaultCard addClassName={addClassName}>{data.campus}</DefaultCard>
            <span className=" text-[--color-grayscale-600]"> 에서</span>
          </div>

          <div>
            <DefaultCard addClassName={addClassName}>{data.class}</DefaultCard>
            <span className=" text-[--color-grayscale-600]">
              을 듣고 있어요
            </span>
          </div>

          <div>
            <DefaultCard addClassName="inline-block text-[--color-main-green]">
              {data.job}
            </DefaultCard>
            <span className="p-2 text-[--color-grayscale-600]"> 직무의 </span>
            <DefaultCard addClassName="inline-block text-[--color-main-green]">
              {data.mentoring === "mentor"
                ? "멘토"
                : data.mentoring === "mentee"
                ? "멘티"
                : ""}
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

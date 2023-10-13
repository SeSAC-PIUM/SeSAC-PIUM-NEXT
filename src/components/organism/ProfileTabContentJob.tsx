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

  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8">
        <DefaultLabel
          title="🌱 이런 일을 했었어요 "
          addClassName="font-semibold"
        />

        <div className="flex flex-col gap-6">
          <div>
            <DefaultCard addClassName={addClassName}>직장</DefaultCard>
            <DefaultCard addClassName={addClassName}>
              {data.history}
            </DefaultCard>
          </div>

          <div>
            <DefaultCard addClassName={addClassName}>깃허브</DefaultCard>
            <DefaultCard addClassName={addClassName}>{data.link}</DefaultCard>
          </div>
        </div>
      </SectionCard>
    </>
  );
}

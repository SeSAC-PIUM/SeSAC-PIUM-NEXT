import React from "react";
import DefaultCard from "../atoms/card/DefaultCard";
import DefaultLabel from "../atoms/label/DefaultLabel";
import SectionCard from "../atoms/card/SectionCard";

export default function ProfileTabContent() {
  const addClassName = "inline-block mr-3 px-6 py-3";

  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8">
        <p className="font-semibold">🌱 이런 일을 했었어요</p>

        <div className="flex flex-col gap-6">
          <div>
            <DefaultCard addClassName={addClassName}>직장</DefaultCard>
            <DefaultCard addClassName={addClassName}>
              경영전공, 프론트엔드 개발자
            </DefaultCard>
          </div>

          <div>
            <DefaultCard addClassName={addClassName}>깃허브</DefaultCard>
            <DefaultCard addClassName={addClassName}>https://</DefaultCard>
          </div>
        </div>
      </SectionCard>
    </>
  );
}

import React from "react";
import DefaultCard from "../atoms/card/DefaultCard";
import SectionCard from "../atoms/card/SectionCard";
import DefaultLabel from "../atoms/label/DefaultLabel";

export default function ProfileTabContent() {
  const addClassName = "inline-block mr-3 px-7";

  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8">
        <DefaultLabel title="🌱 MBTI " addClassName="font-semibold" />

        <div>
          <DefaultCard addClassName={addClassName}>E</DefaultCard>
          <DefaultCard addClassName={addClassName}>S</DefaultCard>
          <DefaultCard addClassName={addClassName}>T</DefaultCard>
          <DefaultCard addClassName={addClassName}>J</DefaultCard>
        </div>
      </SectionCard>
    </>
  );
}

import React from "react";
import DefaultCard from "../atoms/card/DefaultCard";
import SectionCard from "../atoms/card/SectionCard";

export default function ProfileTabContent() {
  const addClassName = "inline-block mr-3";

  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8">
        <p className="font-semibold">🌱 이런 팀이 좋아요</p>

        <div className="flex flex-col gap-3">
          <div>
            <DefaultCard addClassName={addClassName}>
              남아서 작업 OK
            </DefaultCard>
            <DefaultCard addClassName={addClassName}>칼퇴근</DefaultCard>
          </div>

          <div>
            <DefaultCard addClassName={addClassName}>만나서 작업</DefaultCard>
            <DefaultCard addClassName={addClassName}>빠르게! 열정!</DefaultCard>
          </div>
        </div>
      </SectionCard>
    </>
  );
}

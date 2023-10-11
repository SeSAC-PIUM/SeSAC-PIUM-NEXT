import React from "react";
import DefaultCard from "../atoms/card/DefaultCard";
import DefaultLabel from "../atoms/label/DefaultLabel";
import AnyButtonGreen from "../atoms/button/AnyButtonGreen";
import AnyButtonGray from "../atoms/button/AnyButtonGray";

export default function ProfileTabContentMyProject() {
  const addClassName = "inline-block mr-3 px-6 py-3";

  return (
    <>
      <DefaultLabel
        title="📌 프로젝트 지원자[n명] "
        addClassName="font-semibold"
      />

      <div className="flex gap-2">
        <AnyButtonGray text="거절" addClassName=" w-[80px] rounded-full" />
        <AnyButtonGreen text="승인" addClassName="w-[80px] rounded-full" />
      </div>
    </>
  );
}

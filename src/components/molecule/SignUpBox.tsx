import React from "react";
import DefaultButton from "../atoms/button/DefaultButton";

export default function DefaultCard() {
  return (
    <div className="border rounded-[4px] ring-0 ring-[#E9E9EE] p-[16px]  bg-white ">
      <DefaultButton item="기획" />
      <DefaultButton item="UX/XI 디자인" />
      <DefaultButton item="퍼블리싱" />
      <DefaultButton item="프론트엔드" />
      <DefaultButton item="백엔드" />
    </div>
  );
}
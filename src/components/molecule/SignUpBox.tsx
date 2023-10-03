import React from "react";
import DefaultButton from "../atoms/button/DefaultButton";

export default function DefaultCard() {
  return (
    <div className="border rounded-[4px] ring-0 ring-[#E9E9EE] p-[16px]  bg-white ">
      <DefaultButton text="기획" />
      <DefaultButton text="UX/XI 디자인" />
      <DefaultButton text="퍼블리싱" />
      <DefaultButton text="프론트엔드" />
      <DefaultButton text="백엔드" />
    </div>
  );
}

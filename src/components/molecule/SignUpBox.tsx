import React from "react";
import DefaultButton from "../atoms/button/DefaultButton";

export default function SignUpBox() {
  return (
    <div className="0border rounded-[4px] ring-0 ring-[#E9E9EE] p-[16px]  bg-white ">
      <DefaultButton>기획</DefaultButton>
      <DefaultButton>UX/UI디자인</DefaultButton>
      <DefaultButton>퍼블리싱</DefaultButton>
      <DefaultButton>프론트엔드</DefaultButton>
      <DefaultButton>백엔드</DefaultButton>
    </div>
  );
}

import React from "react";

interface DefaultButtonProps {
  text: string;
}
export default function DefaultButton({ text }: DefaultButtonProps) {
  return (
    <button className="border rounded-[4px] ring-1 ring-[#E9E9EE] py-[8px] px-[16px] mx-[8px] m-2">
      {text}
    </button>
  );
}

import { useState } from "react";

interface BannerMeueProps {
  text: any;
}

export default function BannerMeue({ text }: BannerMeueProps) {
  const [iscolor, setIscolor] = useState(true);
  return (
    <button
      onMouseOver={() => setIscolor(false)}
      onMouseOut={() => setIscolor(true)}
    >
      <div
        className={`${
          iscolor
            ? "text-[#464656]   rounded-[999px] border border-solid  border-[#E9E9EE]"
            : "text-[#2DA96E] border-[#2DA96E]  rounded-[999px] border border-solid"
        }`}
      >
        <div className=" w-auto h-auto px-4 py-3  text-[14px] font-semibold leading-[100%] tracking-[-0.14px]">
          {text}
        </div>
      </div>
    </button>
  );
}

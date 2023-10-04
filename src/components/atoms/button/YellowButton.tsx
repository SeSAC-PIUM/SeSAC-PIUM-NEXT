import React from "react";

// interface GreenButtonProps {
//   className: string;
// }

interface GreenButtonProps {
  text: string;
  className: string;
}

export default function GreenButton({ text, className }: GreenButtonProps) {
  return (
    <div className={className}>
      {/* [#391B1B] */}
      <button className="bg-[#FFE600] text-[--color-grayscale-600]   rounded-[4px]  py-4 px-16 w-full  font-semibold">
        {text}
      </button>
    </div>
  );
}

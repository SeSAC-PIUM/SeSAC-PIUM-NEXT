import React from "react";

// interface GreenButtonProps {
//   className: string;
// }

interface YellowButtonProps {
  text: string;
  className: string;
}

export default function GreenButton({ text, className }: YellowButtonProps) {
  return (
    <div className={className}>
      <button className="bg-[#FFE600] text-[--color-grayscale-600]   rounded  py-4 px-16 w-full  font-semibold">
        {text}
      </button>
    </div>
  );
}

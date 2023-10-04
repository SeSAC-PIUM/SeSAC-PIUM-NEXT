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
      <button className="bg-[--color-main-green] text-[--color-grayscale-100]  rounded-[4px] py-4 px-16 w-full font-bold">
        {text}
      </button>
    </div>
  );
}

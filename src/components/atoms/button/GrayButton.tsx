import React from "react";

interface GrayButtonProps {
  text: string;
  className: string;
}

export default function GrayButton({ text, className }: GrayButtonProps) {
  return (
    <div className={className}>
      <button className="bg-[#F5F5F9] text-[--color-grayscale-600]   rounded-[4px] py-4 px-16 w-full font-semibold">
        {text}
      </button>
    </div>
  );
}

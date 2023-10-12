import React from "react";

// interface GreenButtonProps {
//   className: string;
// }

interface AnyButtonGrayProps {
  text: string;
  className?: string;
  addClassName?: string;
}

export default function AnyButtonGray({
  text,
  className,
  addClassName,
}: AnyButtonGrayProps) {
  return (
    <div className={className}>
      <div
        className={`bg-[--color-grayscale-100] text-[--color-grayscale-600] border rounded p-2 px-2 w-full text-center cursor-pointer ${addClassName}`}
      >
        {text}
      </div>
    </div>
  );
}

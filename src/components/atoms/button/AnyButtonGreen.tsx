import React from "react";

// interface GreenButtonProps {
//   className: string;
// }

interface AnyButtonProps {
  text: string;
  className?: string;
  addClassName?: string;
}

export default function AnyButton({
  text,
  className,
  addClassName,
}: AnyButtonProps) {
  return (
    <div className={className}>
      <div
        className={`bg-[--color-main-green] text-[--color-grayscale-100]  rounded py-2 px-2 w-full text-center cursor-pointer ${addClassName}`}
      >
        {text}
      </div>
    </div>
  );
}

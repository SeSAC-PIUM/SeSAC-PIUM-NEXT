import React from "react";

interface AnyButtonDarkGrayProps {
  text: string;
  className?: string;
  addClassName?: string;
}

export default function AnyButtonDarkGray({
  text,
  className,
  addClassName,
}: AnyButtonDarkGrayProps) {
  return (
    <div className={className}>
      <div
        className={`bg-[--color-grayscale-600] text-[--color-grayscale-100] border rounded p-2 px-2 w-full text-center cursor-pointer ${addClassName}`}
      >
        {text}
      </div>
    </div>
  );
}

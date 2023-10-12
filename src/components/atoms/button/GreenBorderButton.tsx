import React from "react";

interface GreenBorderButtonProps {
  text: any;
  addClassName?: string;
}

export default function GreenBorderButton({
  text,
  addClassName,
}: GreenBorderButtonProps): React.ReactElement {
  return (
    <>
      <div
        className={`w-fit border-[1px] border-[--color-main-green] text-[--color-main-green] rounded text-center py-2 px-4 ${addClassName}`}
      >
        {text}
      </div>
    </>
  );
}

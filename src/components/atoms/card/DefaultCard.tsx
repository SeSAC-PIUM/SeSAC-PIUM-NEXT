import React from "react";
interface DefaultCardProps {
  children?: any;
  addClassName?: string;
}
export default function DefaultCard({
  children,
  addClassName,
}: DefaultCardProps) {
  return (
    <>
      <div
        className={`${addClassName} border rounded text-[--color-grayscale-600] border-[#E9E9EE] p-4 w-fit bg-white`}
      >
        {children && children}
      </div>
    </>
  );
}

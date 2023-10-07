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
        className={`${addClassName} border rounded border-[#E9E9EE] p-4 w-fit bg-white`}
      >

        {children && children}
      </div>
    </>
  );
}

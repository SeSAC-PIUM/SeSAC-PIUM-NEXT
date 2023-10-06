import React from "react";
interface DefaultCardProps {
  children?: any;
}
export default function DefaultCard({ children }: DefaultCardProps) {
  return (
    <>
      <div className="border rounded border-[#E9E9EE] p-4  bg-white">
        {children && children}
      </div>
      ;
    </>
  );
}

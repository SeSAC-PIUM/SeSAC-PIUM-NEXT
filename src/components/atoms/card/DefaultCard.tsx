import React from "react";
interface DefaultCardProps {
  children?: any;
}
export default function DefaultCard({ children }: DefaultCardProps) {
  return (
    <>
      <div className="border rounded ring-[#E9E9EE] p-4  bg-white">
        {children && children}
      </div>
      ;
    </>
  );
}

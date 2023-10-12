import React, { useState } from "react";
interface ChipButtonNameProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  clicked?: string;
  onClick?: any;
  // onChange: (value: string) => void;
}

export default function ChipButtonName({
  label,
  name,
  value,
  checked,
  clicked,
  onClick,
}: ChipButtonNameProps): React.ReactElement {
  return (
    <>
      <label
        className={`border-[1px]  border-[#e9e9ee] rounded flex justify-center items-center py-2 px-4 cursor-pointer ${
          clicked === value &&
          "bg-[--color-main-green] text-[--color-grayscale-100]"
        }`}
      >
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onClick={onClick}
          className="hidden"
        />
        {label}
      </label>
    </>
  );
}

import React, { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface ChipButtonNameProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  clicked?: string;
  onClick?: any;
  // onChange: (value: string) => void;
  register?: UseFormRegisterReturn;
}

export default function ChipButtonName({
  label,
  name,
  value,
  checked,
  clicked,
  onClick,
  register,
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
          {...register}
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

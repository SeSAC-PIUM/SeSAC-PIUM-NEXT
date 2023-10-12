import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
  addClassName?: string;
  register: UseFormRegisterReturn;
}

export default function RadioButton({
  label,
  name,
  value,
  addClassName,
  register,
}: RadioButtonProps): React.ReactElement {
  return (
    <>
      {/* addClassName="flex justify-center" */}
      <label className={`${addClassName} flex justify-center h-full p-0 mr-8 `}>
        <input
          {...register}
          type="radio"
          name={name}
          value={value}
          className="appearance-none  border-gray-200 border-[0.1em] rounded-full w-[1.25em] h-[1.25em] checked:border-[0.4em] checked:border-[--color-main-green]"
          checked
        />
        {label}
      </label>
    </>
  );
}

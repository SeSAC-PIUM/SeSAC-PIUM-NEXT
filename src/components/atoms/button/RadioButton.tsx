import React from "react";
interface RadioButtonProps {
  label: string;
  name: string;
  value: string;
}

export default function RadioButton({
  label,
  name,
  value,
}: RadioButtonProps): React.ReactElement {
  return (
    <>
      <label className="h-full p-0">
        <input
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

import React from "react";
interface CheckBoxButtonProps {
  label: string;
  name: string;
  value: string;
}

export default function RadioButton({
  label,
  name,
  value,
}: CheckBoxButtonProps): React.ReactElement {
  return (
    <>
      <label className="h-full p-0">
        <input
          type="checkbox"
          name={name}
          value={value}
          className="align-middle border-gray-200 border-[0.1em] rounded-[4px] w-[1.25em] h-[1.25em] text-green-600 mr-2"
        />
        {label}
      </label>
    </>
  );
}

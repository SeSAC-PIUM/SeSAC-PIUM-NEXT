import React, { MutableRefObject } from "react";
interface CheckBoxButtonProps {
  label: string;
  name: string;
  value: string;
  checkRef?: MutableRefObject<null>;
}

export default function RadioButton({
  label,
  name,
  value,
  checkRef,
}: CheckBoxButtonProps): React.ReactElement {
  return (
    <>
      <label className="h-full p-0">
        <input
          ref={checkRef}
          type="checkbox"
          name={name}
          value={value}
          className="rounded w-[1.25em] h-[1.25em] mr-2  accent-[--color-main-green] "
        />
        {label}
      </label>
    </>
  );
}

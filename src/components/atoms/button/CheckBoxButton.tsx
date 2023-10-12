import React, { Dispatch, MutableRefObject } from "react";
interface CheckBoxButtonProps {
  label: string;
  name: string;
  value: string;
  check?: Boolean;
  setCheck?: Dispatch<Boolean>;
}

export default function RadioButton({
  label,
  name,
  value,
  check,
  setCheck,
}: CheckBoxButtonProps): React.ReactElement {
  return (
    <>
      <label className="flex items-center h-full p-0">
        <input
          type="checkbox"
          name={name}
          value={value}
          className="rounded w-[1.25em] h-[1.25em] mr-2  accent-green-600  "
          checked={check?.valueOf()}
          onChange={() => {
            setCheck && setCheck(!check);
          }}
        />
        {label}
      </label>
    </>
  );
}

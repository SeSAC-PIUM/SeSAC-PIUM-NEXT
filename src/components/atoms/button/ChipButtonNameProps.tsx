import React from "react";
interface ChipButtonNameProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  // onClick: any;
  // check: string;
}

export default function ChipButtonName({
  label,
  name,
  value,
  checked,
}: // check,
// onClick,
ChipButtonNameProps): React.ReactElement {
  return (
    <>
      <label
        className={`border-[1px] bg-white border-[#e9e9ee] rounded flex justify-center py-2 px-4 cursor-pointer      }
        `}
      >
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          // className=" "
          // onChange={(e) => {
          //   onClick(e.target.checked, e.target.value);
          // }}
          // checked={check.indexOf(value) > -1 ? true : false}
        />
        {label}
      </label>
    </>
  );
}

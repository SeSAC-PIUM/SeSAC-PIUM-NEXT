import React from "react";
interface ChipButtonNameProps {
  label: string;
  name: string;
  value: string;
  checked?: boolean;
  onChange: (value: string) => void;
}

export default function ChipButtonName({
  label,
  name,
  value,
  checked,
  onChange,
}: ChipButtonNameProps): React.ReactElement {
  const handleClick = () => {
    if (!checked) {
      onChange(value);
    }
  };

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
          // className="hidden"
          // onChange={(e) => {
          //   onclick(e.target.checked, e.target.value);
          // }}
          // checked={check.indexOf(value) > -1 ? true : false}
        />
        {label}
      </label>
    </>
  );
}

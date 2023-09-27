import React from "react";
interface RadioButtonProps {
  label: any;
}

export default function RadioButton({ label }): RadioLabelProps {
  return (
    <>
      <div className="label_container">
        <label>
          <input
            type="radio"
            name="radio-group-1"
            className="radio-female"
            value="여자"
          />
          <span>{label}</span>
        </label>
      </div>
    </>
  );
}

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
      <label className="h-full">
        <input
          type="checkbox"
          name={name}
          value={value}
          className="align-middle border-gray-200 border-[0.1em] rounded-[4px] w-[1.25em] h-[1.25em] text-green-600 mr-2"
        />
        {label}
      </label>

      {/* <fieldset className="flex flex-wrap gap-3">
        <legend className="sr-only">Color</legend>

        <div>
          <input
            type="radio"
            name="ColorOption"
            value="ColorBlack"
            id="ColorBlack"
            className="peer hidden"
            checked
          />

          <label
            htmlFor="ColorBlack"
            className="block h-3 w-3 cursor-pointer rounded-full bg-white shadow-sm peer-checked:ring-4 peer-checked:ring-green peer-checked:ring-offset-3"
          >
            <span className="sr-only"> Texas Tea </span>
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="ColorOption"
            value="ColorRed"
            id="ColorRed"
            className="peer hidden"
          />

          <label
            htmlFor="ColorRed"
            className="block h-8 w-8 cursor-pointer rounded-full bg-red-500 shadow-sm peer-checked:ring-2 peer-checked:ring-red-500 peer-checked:ring-offset-2"
          >
            <span className="sr-only">Fiesta Red</span>
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="ColorOption"
            value="ColorBlue"
            id="ColorBlue"
            className="peer hidden"
          />

          <label
            htmlFor="ColorBlue"
            className="block h-8 w-8 cursor-pointer rounded-full bg-blue-500 shadow-sm peer-checked:ring-2 peer-checked:ring-blue-500 peer-checked:ring-offset-2"
          >
            <span className="sr-only">Cobalt Blue</span>
          </label>
        </div>

        <div>
          <input
            type="radio"
            name="ColorOption"
            value="ColorGold"
            id="ColorGold"
            className="peer hidden"
          />

          <label
            htmlFor="ColorGold"
            className="block h-8 w-8 cursor-pointer rounded-full bg-amber-500 shadow-sm peer-checked:ring-2 peer-checked:ring-amber-500 peer-checked:ring-offset-2"
          >
            <span className="sr-only">Goldtop</span>
          </label>
        </div>
      </fieldset> */}
    </>
  );
}

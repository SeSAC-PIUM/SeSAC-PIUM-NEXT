import { useState } from "react";
import DefaultCardP32 from "../atoms/card/DefaultCardP32";
import { FaMinus } from "../font-icon/MinusIcon";
import { FaPlus } from "../font-icon/PlusIcon";

export default function VariationBox({ children }) {
  const [count, setCount] = useState(1);
  const onButtonClick = (bb) => {
    bb
      ? setCount(count + 1 > 9 ? count : count + 1)
      : setCount(count - 1 < 0 ? count : count - 1);
  };

  return (
    <>
      <DefaultCardP32>
        <div className="flex gap-3 justify-center items-center">
          {children}
          <button
            className="flex"
            onClick={() => {
              onButtonClick(false);
            }}
          >
            <FaMinus></FaMinus>
          </button>
          {count}명
          <button
            className="flex"
            onClick={() => {
              onButtonClick(true);
            }}
          >
            <FaPlus></FaPlus>
          </button>
        </div>
      </DefaultCardP32>
    </>
  );
}

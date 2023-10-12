import { useState, useEffect } from "react";
import DefaultCardP32 from "../atoms/card/DefaultCardP32";
import { FaMinus } from "../font-icon/MinusIcon";
import { FaPlus } from "../font-icon/PlusIcon";

export default function VariationBox({ children, kind, onLifting }) {
  const [count, setCount] = useState(1);
  const onButtonClick = (IsClick) => {
    IsClick
      ? setCount(count + 1 > 9 ? count : count + 1)
      : setCount(count - 1 < 1 ? count : count - 1);
  };
  
  useEffect(() => {
    console.log(count)
    onLifting(kind, count)
  },[count]);

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

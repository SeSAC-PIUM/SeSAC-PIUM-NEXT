import { useState, useEffect } from "react";
import { XmarkIcon } from "../font-icon/XmarkIcon";

export default function FilterSelection({ text, length, onRemove }) {

  console.log(text)

  const handleClick = (innerText) => {
    onRemove(innerText);
  };


  //   const [count, setCount] = useState(text.length);
  //   // setCount((prev)=>[...prev, text])

  // useEffect(()=>{
  //   setCount(text.length)

  // })

  // const onButtonClick = (IsClick) => {
  //   IsClick
  //     ? setCount(count + 1 > 9 ? count : count + 1)
  //     : setCount(count - 1 < 1 ? count : count - 1);
  // };
  // (count)
  // if (text.length >= 5 && length) {
  //   const timer = setTimeout(() => {
  //     const b = "hidden";
  //     console.log(b);
  //     return b
  //   }, 1000);
  //   console.log(timer)
  // }

  return (
    <div className="relative ml-4">
      <p
        className={`absolute top-[-20px] text-[#ff6868] ${
          text.length >= 5 && length
            ? "animate-[alert_1s_ease-in-out_3s_alternate_forwards]"
            : "hidden"
        }`}
      >
        최대 5개까지 선택 가능합니다
      </p>
      <ul className="flex items-center">
        {text.map((ele, index) => {
          return (
            <li onClick={(e) => handleClick(e.target.parentElement.textContent)} key={index} className="mr-4">
              <button>
                {ele}
                <XmarkIcon></XmarkIcon>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

import { useState, useEffect } from "react";
import { XmarkIcon } from "../font-icon/XmarkIcon";

export default function FilterSelection({ text, length }) {
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
  // console.log(count)
  // const timer = setTimeout(() => "hidden", 1000);
  // console.log(timer);
  return (
    <>
      <p className={`${text.length >= 5 && length ? "" : "hidden"}`}>
        최대 5개까지 선택 가능합니다
      </p>
      <ul className="flex items-center">
        {text.map((ele, index) => {
          return (
            <li key={index} className="mr-4">
              <button>
                {ele}
                <XmarkIcon></XmarkIcon>
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

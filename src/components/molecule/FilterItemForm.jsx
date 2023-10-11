import ChipButton from "../atoms/button/ChipButton";
import { useState, useCallback, useEffect } from "react";

export default function FilterItemForm({text, wrapWidth, fontSize, width, onLifting}){
  
  console.log(onLifting)
  const [check, setCheck] = useState([]);

  const onClickEvent = (checked, item) => {
    console.log(check);
    console.log(checked);
    console.log(item);

    if (item ==="all") {
      setCheck([]);
    }
    if (item !== "all") {
      setCheck(
        check.filter((el) => {
          return el !== "all";
        })
      );
    }

    if (checked) {
      setCheck((prev) => [...prev, item]);
    } else if (!checked) {
      setCheck(
        check.filter((el) => {
          console.log("filter", el, item, el !== item);
          return el !== item;
        })
        );
      }

      // 나중에 호출하고 싶음
      // onLifting(check)


    };
    
    useEffect(() => {
      console.log(onLifting)
      // onLifting(check)
    }, [check]);
  
  

  return(
    <fieldset className={`flex flex-wrap gap-[12px] p-4 border-[1px] border-[#e9e9ee] rounded bg-white absolute mt-[9px] z-[100] ${wrapWidth}`}>
    {text.map((ele, index) => {
      return (
        <ChipButton
          val={ele.value}
          item={ele.item}
          key={index}
          check={check}
          onClick={onClickEvent}
          fontSize={fontSize}
          all={ele.all}
          width={width}
          onLifting={check}
        ></ChipButton>
      );
    })}
  </fieldset>
  )
}
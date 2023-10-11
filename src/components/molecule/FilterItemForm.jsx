import ChipButton from "../atoms/button/ChipButton";
import { useState, useCallback, useEffect } from "react";

export default function FilterItemForm({text, wrapWidth, fontSize, width, onLifting, onLifting2}){
  
  console.log(onLifting)
  const [check, setCheck] = useState([]);
  
  
  const onClickEvent = (checked, item, textContent) => {
    console.log(check.length);
    console.log(checked);
    console.log(item);
    console.log(textContent)
    
    // check.length < 5 && setCheck(check)
    
    //   IsClick
    //     ? setCount(count + 1 > 9 ? count : count + 1)
    //     : setCount(count - 1 < 1 ? count : count - 1);
    
    const isBoolean = check.length >= 5 ? true : false
    // if(check.length >= 5){
    //   const isBoolean = true
      onLifting2(isBoolean)
    //   // console.log('5개 이상')
    // }
    
    if (item ==="전체") {
      setCheck([]);
    }
    if (item !== "전체") {
      setCheck(
        check.filter((el) => {
          return el !== "전체";
        })
        );
      }
      
      if (checked && check.length < 5) {
      setCheck((prev) => [...prev, textContent]);
    } else if (!checked) {
      setCheck(
        check.filter((el) => {
          console.log("filter", el, textContent, el !== textContent);
          onLifting2(isBoolean)
          return el !== textContent;
        })
        );
      }

      
    };
    
    useEffect(() => {
      onLifting(check)
    }, [check]);
    
    
    
    return(
      <fieldset className={`flex flex-wrap gap-[12px] p-4 border-[1px] border-[#e9e9ee] rounded bg-white absolute mt-[9px] z-[100] ${wrapWidth}`}>
    {text.map((ele, index) => {
      return (
        <ChipButton
          val={ele.value}
          item={ele.item}
          borderGreen={ele.borderGreen}
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
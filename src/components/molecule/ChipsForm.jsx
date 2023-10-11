import ChipButton from "../atoms/button/ChipButton";
import { useState, useCallback, useEffect } from "react";

export default function ChipsForm(props) {
  const [check, setCheck] = useState([]);

  const onClickEvent = (checked, item) => {
    console.log(check);
    console.log(checked);
    console.log(item);

    if (item === "요일 미정") {
      setCheck([]);
    }
    if (item !== "요일 미정") {
      setCheck(
        check.filter((el) => {
          return el !== "요일 미정";
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
  };

  useEffect(() => {
    console.log(check);
  }, [check]);

  const items = props.text;
  return (
    <div className="flex flex-wrap gap-[12px] p-4 border-[1px] border-[#e9e9ee] rounded bg-white w-fit">
      {/* {items.map((data, index) => {
        return (<DefaultButton item={data.item} key={index}></DefaultButton>);
      })} */}

      {items.map((ele, index) => {
        return (
          <ChipButton
            val={ele.value}
            item={ele.item}
            key={index}
            check={check}
            onClick={onClickEvent}
            width={props.width}
          ></ChipButton>
        );
      })}
    </div>
  );
}

import DefaultButton from "../atoms/button/DefaultButton";
import { useState, useCallback, useEffect } from "react";

export default function ChipsForm(props) {
  const [check, setCheck] = useState([]);

  const onClickEvent = (checked, item) => {
    console.log(check);

    if (item === "undecided") {
      setCheck([]);
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
    <div className="flex flex-wrap gap-4 p-4 border-[1px] border-[#e9e9ee] rounded bg-white w-fit">
      {/* {items.map((data, index) => {
        return (<DefaultButton item={data.item} key={index}></DefaultButton>);
      })} */}

      {items.map((ele, index) => {
        return (
          <DefaultButton
            val={ele.value}
            item={ele.item}
            key={index}
            check={check}
            onClick={onClickEvent}
          ></DefaultButton>
        );
      })}
    </div>
  );
}

import { useState } from "react";
import { CheckIcon } from "../../font-icon/CheckIcon";

export default function RecruitCompleteButton() {
  const [check, setCheck] = useState(false);
  
  const onChangeIcon = (checked) => {
    console.log(check)
    setCheck(checked);

    // if (item === "undecided") {
    //   setCheck([]);
    // }
    // if (item !== "undecided") {
    //   setCheck(
    //     check.filter((el) => {
    //       return el !== "undecided";
    //     })
    //   );
    // }

    // if (checked) {
    //   setCheck((prev) => [...prev, item]);
    // } else if (!checked) {
    //   setCheck(
    //     check.filter((el) => {
    //       console.log("filter", el, item, el !== item);
    //       return el !== item;
    //     })
    //   );
    // }
  };
  return (
    <label className="w-[146px] py-3 border-[1px] border-[--color-grayscale-200] rounded bg-white text-center cursor-pointer">
      모집완료 포함
      <CheckIcon check={check}></CheckIcon>
      <input
        type="checkbox"
        onChange={(e) => {
          onChangeIcon(e.target.checked);
        }}
        className="hidden"
      />
    </label>
  );
}

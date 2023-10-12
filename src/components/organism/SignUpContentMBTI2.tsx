import React, { useState } from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import ChipButtonName from "../atoms/button/ChipButtonNameProps";
import DefaultCard from "../atoms/card/DefaultCard";

interface SignUpContentMbti2Props {
  className?: string;
}

export default function SignUpContentMbti2({
  className,
}: SignUpContentMbti2Props) {
  const [isClick, setIsClick] = useState<string>("비공개");

  const handleRadioClick = (value: string) => {
    setIsClick(value);
  };
  return (
    <div className={className}>
      <SignUpTitleBox title="MBTI" />

      <DefaultCard addClassName="flex items-center gap-5">
        <div className="grid gap-x-4 gap-y-4 grid-cols-4">
          <ChipButtonName
            label="I"
            name="IE"
            value="I"
            clicked={isClick}
            onClick={() => setIsClick("I")}
          />
          <ChipButtonName
            label="S"
            name="SN"
            value="S"
            clicked={isClick}
            onClick={() => setIsClick("S")}
          />
          <ChipButtonName
            label="F"
            name="FT"
            value="F"
            clicked={isClick}
            onClick={() => setIsClick("F")}
          />
          <ChipButtonName
            label="P"
            name="PJ"
            value="P"
            clicked={isClick}
            onClick={() => setIsClick("P")}
          />
          <ChipButtonName
            label="E"
            name="IE"
            value="E"
            clicked={isClick}
            onClick={() => setIsClick("E")}
          />
          <ChipButtonName
            label="N"
            name="SN"
            value="N"
            clicked={isClick}
            onClick={() => setIsClick("N")}
          />
          <ChipButtonName
            label="T"
            name="FT"
            value="T"
            clicked={isClick}
            onClick={() => setIsClick("T")}
          />
          <ChipButtonName
            label="J"
            name="PJ"
            value="J"
            clicked={isClick}
            onClick={() => setIsClick("J")}
          />
        </div>
        <ChipButtonName
          label="비공개"
          name="secrete"
          value="비공개"
          checked={true}
          clicked={isClick}
          // onClick={() => setIsClick("비공개")}
          onClick={() => handleRadioClick("비공개")}
          // style={isClick === "비공개" ? { backgroundColor: "black" } : {}}
        />
      </DefaultCard>
    </div>
  );
}

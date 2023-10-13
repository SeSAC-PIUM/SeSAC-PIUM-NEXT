import React, { useEffect, useState } from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import ChipButtonName from "../atoms/button/ChipButtonNameProps";
import DefaultCard from "../atoms/card/DefaultCard";
import { UseFormSetValue } from "react-hook-form";

interface SignUpContentMbti2Props {
  className?: string;
  setValue: UseFormSetValue<any>;
}

export default function SignUpContentMbti2({
  className,
  setValue,
}: SignUpContentMbti2Props) {
  const [isClick, setIsClick] = useState<string[]>(["비공개"]);

  useEffect(() => {
    const mbti = isClick.join("");
    if (mbti.length === 4 || mbti === "비공개") {
      setValue("mbti", mbti);
    }
  }, [isClick]);

  return (
    <div className={className}>
      <SignUpTitleBox title="MBTI" />

      <DefaultCard addClassName="flex items-center gap-5">
        <div className="grid gap-x-4 gap-y-4 grid-cols-4">
          <ChipButtonName
            label="I"
            name="IE"
            value="I"
            clicked={isClick[0]}
            onClick={() =>
              setIsClick((prev) => ["I", prev[1], prev[2], prev[3]])
            }
          />
          <ChipButtonName
            label="S"
            name="SN"
            value="S"
            clicked={isClick[1]}
            onClick={() =>
              setIsClick((prev) => [prev[0], "S", prev[2], prev[3]])
            }
          />
          <ChipButtonName
            label="F"
            name="FT"
            value="F"
            clicked={isClick[2]}
            onClick={() =>
              setIsClick((prev) => [prev[0], prev[1], "F", prev[3]])
            }
          />
          <ChipButtonName
            label="P"
            name="PJ"
            value="P"
            clicked={isClick[3]}
            onClick={() =>
              setIsClick((prev) => [prev[0], prev[1], prev[2], "P"])
            }
          />
          <ChipButtonName
            label="E"
            name="IE"
            value="E"
            clicked={isClick[0]}
            onClick={() =>
              setIsClick((prev) => ["E", prev[1], prev[2], prev[3]])
            }
          />
          <ChipButtonName
            label="N"
            name="SN"
            value="N"
            clicked={isClick[1]}
            onClick={() =>
              setIsClick((prev) => [prev[0], "N", prev[2], prev[3]])
            }
          />
          <ChipButtonName
            label="T"
            name="FT"
            value="T"
            clicked={isClick[2]}
            onClick={() =>
              setIsClick((prev) => [prev[0], prev[1], "T", prev[3]])
            }
          />
          <ChipButtonName
            label="J"
            name="PJ"
            value="J"
            clicked={isClick[3]}
            onClick={() =>
              setIsClick((prev) => [prev[0], prev[1], prev[2], "J"])
            }
          />
        </div>
        <ChipButtonName
          label="비공개"
          name="secrete"
          value="비공개"
          checked={true}
          clicked={isClick.length === 1 ? "비공개" : ""}
          onClick={() => setIsClick(["비공개"])}
        />
      </DefaultCard>
    </div>
  );
}

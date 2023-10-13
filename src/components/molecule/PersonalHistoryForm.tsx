import React, { useState } from "react";
import SignUpTitleBox from "./SignUpTitleBox";
import ChipButtonName from "../atoms/button/ChipButtonNameProps";
import DefaultCard from "../atoms/card/DefaultCard";
import { UseFormRegisterReturn } from "react-hook-form";

interface PersonalHistoryProps {
  className?: string;
  register: UseFormRegisterReturn;
}

export default function PersonalHistory({
  className,
  register,
}: PersonalHistoryProps) {
  const [isClick, setIsClick] = useState("비공개");
  return (
    <div className={className}>
      <DefaultCard addClassName="flex items-center gap-5">
        <div className="grid gap-x-4 gap-y-4 grid-cols-4">
          <ChipButtonName
            register={register}
            label="학생"
            name="PersonalHistory"
            value="학생"
            clicked={isClick}
            onClick={() => setIsClick("학생")}
          />
          <ChipButtonName
            register={register}
            label="직장"
            name="PersonalHistory"
            value="직장"
            clicked={isClick}
            onClick={() => setIsClick("직장")}
          />
          <ChipButtonName
            register={register}
            label="창업"
            name="PersonalHistory"
            value="창업"
            clicked={isClick}
            onClick={() => setIsClick("창업")}
          />
          <ChipButtonName
            register={register}
            label="비공개"
            name="PersonalHistory"
            value="비공개"
            checked={true}
            clicked={isClick}
            onClick={() => setIsClick("비공개")}
          />
        </div>
      </DefaultCard>
    </div>
  );
}

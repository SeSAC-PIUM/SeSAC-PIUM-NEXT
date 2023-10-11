import React from "react";
import SignUpTitleBox from "./SignUpTitleBox";
import ChipButtonName from "../atoms/button/ChipButtonNameProps";
import DefaultCard from "../atoms/card/DefaultCard";

interface PersonalHistoryProps {
  className?: string;
}

export default function PersonalHistory({ className }: PersonalHistoryProps) {
  return (
    <div className={className}>
      <DefaultCard addClassName="flex items-center gap-5">
        <div className="grid gap-x-4 gap-y-4 grid-cols-4">
          <ChipButtonName label="학생" name="PersonalHistory" value="학생" />
          <ChipButtonName label="직장" name="PersonalHistory" value="직장" />
          <ChipButtonName label="창업" name="PersonalHistory" value="창업" />
          <ChipButtonName
            label="비공개"
            name="PersonalHistory"
            value="비공개"
            checked={true}
          />
        </div>
      </DefaultCard>
    </div>
  );
}

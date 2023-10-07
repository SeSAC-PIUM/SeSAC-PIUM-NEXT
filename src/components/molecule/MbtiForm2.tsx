import React from "react";
import SignUpTitleBox from "./SignUpTitleBox";
import ChipButtonName from "../atoms/button/ChipButtonNameProps";
import DefaultCard from "../atoms/card/DefaultCard";

interface MbtiFormProps {
  className?: string;
}

export default function MbtiForm({ className }: MbtiFormProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="MBTI" />

      <DefaultCard addClassName="flex items-center gap-5">
        <div className="grid gap-x-4 gap-y-4 grid-cols-4">
          <ChipButtonName label="I" name="IE" value="I" />
          <ChipButtonName label="S" name="SN" value="S" />
          <ChipButtonName label="F" name="FT" value="F" />
          <ChipButtonName label="P" name="PJ" value="P" />
          <ChipButtonName label="E" name="IE" value="E" />
          <ChipButtonName label="N" name="SN" value="N" />
          <ChipButtonName label="T" name="FT" value="T" />
          <ChipButtonName label="J" name="PJ" value="J" />
        </div>
        <ChipButtonName
          label="비공개"
          name="secrete"
          value="비공개"
          checked={true}
        />
      </DefaultCard>
    </div>
  );
}

import React from "react";
import DefaultLabel from "../atoms/label/DefaultLabel";
import DefaultCard from "../atoms/card/DefaultCard";
import DefaultButton from "../atoms/button/DefaultButton";
import MBTIForm2 from "../molecule/MbtiForm2";

interface SignUpContentMBTIProps {
  className: string;
}

export default function SignUpContentMBTI({
  className,
}: SignUpContentMBTIProps) {
  return (
    <>
      <div className={className}>
        <DefaultLabel title="MBTI" />
        <DefaultCard>
          <DefaultButton>I</DefaultButton>
          <DefaultButton>E</DefaultButton>
        </DefaultCard>

        <MBTIForm2 />
      </div>
    </>
  );
}

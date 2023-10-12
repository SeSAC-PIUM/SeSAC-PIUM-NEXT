import React, { useState } from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import DefaultInput from "../atoms/input/DefaultInput";

import PersonalHistoryForm from "../molecule/PersonalHistoryForm";

interface SignUpContentHistoryProps {
  className: string;
}

export default function SignUpContentHistory({
  className,
}: SignUpContentHistoryProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="이런일을 했었어요!" />

      <div className="flex flex-col gap-3">
        <PersonalHistoryForm />
        <DefaultInput placeholder="전공, 취/창업 분야" />
        <div className="flex gap-3">
          <DefaultInput placeholder="링크 명칭(ex. 포트폴리오, github)" />
          <DefaultInput placeholder="개인 사이트, 깃허브, 포트폴리오, URL" />
        </div>
      </div>
    </div>
  );
}

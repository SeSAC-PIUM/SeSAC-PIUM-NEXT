import React, { useState } from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import DefaultInput from "../atoms/input/DefaultInput";

import PersonalHistoryForm from "../molecule/PersonalHistoryForm";
import { UseFormRegister } from "react-hook-form";

interface SignUpContentHistoryProps {
  className: string;
  register: UseFormRegister<any>;
}

export default function SignUpContentHistory({
  className,
  register,
}: SignUpContentHistoryProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="이런일을 했었어요!" />

      <div className="flex flex-col gap-3">
        <PersonalHistoryForm register={register("history")} />
        <DefaultInput
          register={register("field")}
          placeholder="전공, 취/창업 분야"
          autoComplete="autoComplete"
        />
        <div className="flex gap-3">
          <DefaultInput
            register={register("link")}
            autoComplete="autoComplete"
            placeholder="링크 명칭(ex. 포트폴리오, github)"
          />
          <DefaultInput
            register={register("url")}
            autoComplete="autoComplete"
            placeholder="개인 사이트, 깃허브, 포트폴리오, URL"
          />
        </div>
      </div>
    </div>
  );
}

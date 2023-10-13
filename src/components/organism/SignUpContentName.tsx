import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import SignUpInput from "../atoms/input/DefaultInput";
import WarningLabel from "../atoms/label/WarningLabel";
import Modal from "../atoms/modal/Modal";
import { FieldErrors, UseFormRegisterReturn } from "react-hook-form";

interface SignUpContentNameProps {
  className: string;
  register: UseFormRegisterReturn;
  errors: FieldErrors<any>;
}

export default function SignUpContentName({
  className,
  register,
  errors,
}: SignUpContentNameProps) {
  return (
    <div className={className}>
      <SignUpTitleBox
        title="이름"
        modal="SBA 가입 시 입력한 이름입니다. 만약 실명과 일치하지 않는다면 마이페이지 - 이름변경 신청을 통해 수정 가능합니다"
      />

      <div className="flex flex-col">
        <SignUpInput
          register={register}
          placeholder="한글로 실명을 입력해주세요"
          autoComplete="autoComplete"
        />
        {errors.name && <WarningLabel text={errors.name?.message as string} />}
      </div>
    </div>
  );
}

import React, { useEffect, useState } from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";

// import SignUpBox from "../molecule/SignUpBox";
import ChipsForm from "../molecule/ChipsForm";
import { UseFormRegisterReturn, UseFormWatch } from "react-hook-form";
import ChipButtonName from "../atoms/button/ChipButtonNameProps";
import DefaultCard from "../atoms/card/DefaultCard";
interface SignUpContentJobProps {
  className: string;
  register: UseFormRegisterReturn;
  watch: UseFormWatch<any>;
}

export default function SignUpContentJob({
  className,
  register,
  watch,
}: SignUpContentJobProps) {
  const [isClick, setIsClick] = useState("");
  const signUpContentJobWatch = watch("job");
  useEffect(() => {
    setIsClick(signUpContentJobWatch);
  }, [signUpContentJobWatch]);
  return (
    <div className={className}>
      <SignUpTitleBox
        title="희망직무"
        modal="프로젝트에 희망하는 직무를 선택해주세요"
      />

      <DefaultCard addClassName="">
        <div className="flex  gap-x-4 gap-y-4 flex-wrap">
          <ChipButtonName
            register={register}
            label="기획"
            name="job"
            value="기획"
            clicked={isClick}
            onClick={() => setIsClick("기획")}
          />
          <ChipButtonName
            register={register}
            label="UX/UI 디자인"
            name="job"
            value="UX/UI 디자인"
            clicked={isClick}
            onClick={() => setIsClick("UX/UI 디자인")}
          />
          <ChipButtonName
            register={register}
            label="퍼블리싱"
            name="job"
            value="퍼블리싱"
            clicked={isClick}
            onClick={() => setIsClick("퍼블리싱")}
          />
          <ChipButtonName
            register={register}
            label="프론트엔드"
            name="job"
            value="프론트엔드"
            clicked={isClick}
            onClick={() => setIsClick("프론트엔드")}
          />
          <ChipButtonName
            register={register}
            label="백엔드"
            name="job"
            value="백엔드"
            clicked={isClick}
            onClick={() => setIsClick("백엔드")}
          />
        </div>
      </DefaultCard>

      {/* <ChipsForm text={skills} /> */}
    </div>
  );
}

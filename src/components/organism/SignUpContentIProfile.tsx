import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import FileUpload from "../organism/FileUpload";
import GreenBorderButton from "../atoms/button/GreenBorderButton";

interface SignUpContentIProfileProps {
  className?: string;
}

export default function SignUpContentIProfile({
  className,
}: SignUpContentIProfileProps) {
  return (
    <>
      <div className={className}>
        <SignUpTitleBox title="프로필 사진" />
        <div className="flex flex-wrap ">
          <FileUpload />
          <div className="flex flex-col justify-center gap-3 my-4"></div>
        </div>
      </div>
    </>
  );
}

import React from "react";
import SignUpContentMBTI from "./SignUpContentMBTI";
import SignUpContentMBTI2 from "./SignUpContentMBTI2";
import SignUpContentLike from "./SignUpContentLike";
import SignUpContentIntroduce from "./SignUpContentIntroduce";
import SignUpContentIProfile from "./SignUpContentIProfile";
import SignUpContentHistory from "./SignUpContentHistory";

export default function SignUpContentSecond() {
  const className = "flex flex-col bg-amber-100 items-start py-6 w-full";

  return (
    <>
      <SignUpContentIProfile className={className} />
      <SignUpContentIntroduce className={className} />
      <SignUpContentMBTI2 className={className} />
      <SignUpContentHistory className={className} />
      <SignUpContentLike className={className} />
    </>
  );
}

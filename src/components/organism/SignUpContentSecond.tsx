import React from "react";
import SignUpContentMBTI from "./SignUpContentMBTI";
import SignUpContentMBTI2 from "./SignUpContentMBTI2";
import SignUpContentLike from "./SignUpContentLike";
import SignUpContentIntroduce from "./SignUpContentIntroduce";
import SignUpContentHistory from "./SignUpContentHistory";

export default function SignUpContentSecond() {
  const className = "flex flex-col bg-amber-100 items-start py-6 w-full";

  return (
    <>
      <SignUpContentIntroduce className={className} />
      {/* <SignUpContentMBTI /> */}
      <SignUpContentMBTI2 className={className} />
      <SignUpContentHistory className={className} />
      <SignUpContentLike className={className} />
    </>
  );
}

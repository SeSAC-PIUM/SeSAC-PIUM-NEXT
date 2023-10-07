import React from "react";
import SignUpTitleBox from "../molecule/SignUpTitleBox";
import ChipsForm from "../molecule/ChipsForm";

interface SignUpContentLikeProps {
  className: string;
}
const skills = [
  {
    item: "칼퇴근",
    value: "1",
  },
  {
    item: "남아서 작업 OK",
    value: "2",
  },
  {
    item: "온라인 재택작업",
    value: "3",
  },
  {
    item: "만나서 작업",
    value: "4",
  },
  {
    item: "천천히",
    value: "5",
  },
  {
    item: "빠르게! 열정!",
    value: "6",
  },
  {
    item: "상관없어요",
    value: "7",
  },
];

export default function SignUpContentLike({
  className,
}: SignUpContentLikeProps) {
  return (
    <div className={className}>
      <SignUpTitleBox title="이런팀이 좋아요!" />
      <ChipsForm text={skills} width="w-[160px] " />
    </div>
  );
}

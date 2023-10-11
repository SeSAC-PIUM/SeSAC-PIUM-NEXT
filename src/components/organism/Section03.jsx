import Card from "@/components/organism/Card";
import Image from "next/image";
import ProjectTitleLink from "@/components/atoms/link/ProjectTitleLink";
import CompletedCard from "@/components/atoms/card/CompletedCard";

export default function Section03() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1200px]">
        <div className="flex flex-col items-center  mb-[70px]">
          <ProjectTitleLink
            text1="곧 마감 프로젝트 🚨"
            text2="당신만 오면 바로 시작되는 프로젝트!"
            href="#"
          ></ProjectTitleLink>
          <div className="flex w-full justify-between">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>

        <div className="flex flex-col items-center  mb-[70px]">
          <ProjectTitleLink
            text1="최신 프로젝트 🎈"
            text2="새로운 프로젝트를 탐색해봐요!"
            href="#"
          ></ProjectTitleLink>
          <div className="flex w-full justify-between">
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mb-[70px]">
        <ProjectTitleLink
          text1="완성 프로젝트 ✨"
          text2="프움에서 완성된 프로젝트 모움"
          href="#"
        ></ProjectTitleLink>

        <CompletedCard></CompletedCard>
      </div>
    </div>
  );
}

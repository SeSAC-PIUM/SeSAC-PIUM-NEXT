import Card from "@/components/organism/Card";
import Image from "next/image";
import ProjectTitleLink from "@/components/atoms/link/ProjectTitleLink";
import CompletedCard from "@/components/atoms/card/CompletedCard";
import Card2 from "@/components/organism/Card2";
import Card3 from "@/components/organism/Card3";
import Card4 from "@/components/organism/Card4";
import Card5 from "@/components/organism/Card5";
import Card6 from "@/components/organism/Card6";
import Card7 from "@/components/organism/Card7";
import Card8 from "@/components/organism/Card8";

export default function Section03() {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[1200px] ">
        <div className="flex flex-col  mb-[70px]">
          <ProjectTitleLink
            text1="곧 마감 프로젝트 🚨"
            text2="당신만 오면 바로 시작되는 프로젝트!"
            href="/project_list"
          ></ProjectTitleLink>
          <div className="flex w-full  justify-between">
            <Card></Card>
            <Card2></Card2>
            <Card3></Card3>
            <Card4></Card4>
          </div>
        </div>

        <div className="flex flex-col items-start mb-[70px]">
          <ProjectTitleLink
            text1="최신 프로젝트 🎈"
            text2="새로운 프로젝트를 탐색해봐요!"
            href="/project_list"
          ></ProjectTitleLink>
          <div className="flex w-full justify-between">
            <Card5></Card5>
            <Card6></Card6>
            <Card7></Card7>
            <Card8></Card8>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start mb-[70px]">
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

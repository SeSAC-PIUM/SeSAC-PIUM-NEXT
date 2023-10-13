import React, { useEffect, useState } from "react";
import DefaultCard from "../atoms/card/DefaultCard";
import SectionCard from "../atoms/card/SectionCard";
import DefaultLabel from "../atoms/label/DefaultLabel";
import basicInfo from "@/data/basicInfo";

interface ProfileTabContentProps {
  data: basicInfo;
}

export default function ProfileTabContent({ data }: ProfileTabContentProps) {
  const addClassName = "inline-block mr-3 px-7";
  const [mbti, setMbti] = useState<string[]>([]);

  useEffect(() => {
    if (data.mbti === "비공개") setMbti(["비공개"]);
    else {
      if (!data.mbti) {
        setMbti(["비공개"]);
        return;
      }
      setMbti(data.mbti.split(""));
    }
  }, [data]);
  return (
    <>
      <SectionCard addClassName="flex flex-col gap-8">
        <DefaultLabel title="🌱 MBTI " addClassName="font-semibold" />

        <div>
          {mbti.map((value, index) => (
            <DefaultCard key={index} addClassName={addClassName}>
              {value}
            </DefaultCard>
          ))}
        </div>
      </SectionCard>
    </>
  );
}

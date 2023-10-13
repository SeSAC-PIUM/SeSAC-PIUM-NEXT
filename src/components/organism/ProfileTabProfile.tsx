import React from "react";
import ProfileTabContentIntroduce from "./ProfileTabContentIntroduce";
import ProfileTabContentJob from "./ProfileTabContentJob";
import ProfileTabContentMBTI from "./ProfileTabContentMBTI";
import ProfileTabContentLike from "./ProfileTabContentLike";
import basicInfo from "@/data/basicInfo";

interface ProfileTabProfileProps {
  data: basicInfo;
}

export default function ProfileTabProfile({ data }: ProfileTabProfileProps) {
  return (
    <>
      <section className="flex flex-col gap-6">
        <ProfileTabContentIntroduce data={data} />
        <ProfileTabContentJob data={data} />
        <ProfileTabContentMBTI data={data} />
        <ProfileTabContentLike data={data} />
      </section>
    </>
  );
}

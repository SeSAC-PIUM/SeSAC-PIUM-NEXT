import React from "react";
import SectionCard from "../atoms/card/SectionCard";
import ProfileTabContentMyProjectApplicant from "./ProfileTabContentMyProjectApplicant";
import ProfileTabContentMyProjectManagement from "./ProfileTabContentMyProjectManagement";

export default function ProfileTabContentMyProject() {
  // const addClassName = "inline-block mr-3 px-6 py-3";

  return (
    <>
      <SectionCard addClassName="flex flex-col gap-[20px]">
        <ProfileTabContentMyProjectManagement />
        <ProfileTabContentMyProjectApplicant />
      </SectionCard>
    </>
  );
}

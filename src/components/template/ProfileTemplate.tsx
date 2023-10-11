import React from "react";
import ProfileMain from "../molecule/ProfileMain";
import TemplateCard from "../atoms/card/TemplateCard";
import ProfileTab from "../molecule/ProfileTab";

export default function ProfileTemplate() {
  return (
    <>
      <TemplateCard>
        <ProfileMain />
        <ProfileTab />
      </TemplateCard>
    </>
  );
}

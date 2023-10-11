import React from "react";
import ProfileMain from "../molecule/ProfileMain";
import TemplateCard from "../atoms/card/TemplateCard";

export default function ProfileTemplate() {
  return (
    <>
      <TemplateCard>
        <ProfileMain />
        <div>프로필설정</div>
        <div>프로젝트 관리 링크 이동</div>
        <div>공간예약 링크 이동</div>
      </TemplateCard>
    </>
  );
}

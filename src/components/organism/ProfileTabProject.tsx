import React from "react";
import ProfileTabContentIntroduce from "./ProfileTabContentIntroduce";
import ProfileTabContentJob from "./ProfileTabContentJob";
import ProfileTabContentMBTI from "./ProfileTabContentMBTI";
import ProfileTabContentLike from "./ProfileTabContentLike";

export default function ProfileTabProfile() {
  return (
    <>
      <section className="grid">
        <ProfileTabContentIntroduce />
        <ProfileTabContentJob />
        <ProfileTabContentMBTI />
        <ProfileTabContentLike />
      </section>
    </>
  );
}

import React from "react";
import ProfileTabContentApply from "./ProfileTabContentApply";
import ProfileTabContentMyProject from "./ProfileTabContentMyProject";

export default function ProfileTabProfile() {
  return (
    <>
      <section className="flex flex-col gap-6">
        <ProfileTabContentApply />
        <ProfileTabContentMyProject />
      </section>
    </>
  );
}

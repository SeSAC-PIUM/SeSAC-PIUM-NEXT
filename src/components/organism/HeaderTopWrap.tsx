import { useState } from "react";

import LoginWrap from "./LoginWrap";
import AlarmButton from "../atoms/button/AlarmButton";
import ProfileButton from "../atoms/button/ProfileButton";
import LogoAndName from "../atoms/link/LogoAndName";

export default function HeaderTopWrap() {
  return (
    <div className={`flex justify-between items-center mb-[12px]`}>
      <LogoAndName />
      <LoginWrap />
    </div>
  );
}

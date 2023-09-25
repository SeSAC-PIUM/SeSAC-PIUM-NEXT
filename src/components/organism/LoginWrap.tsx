import { useState } from "react";

import HeaderSearchForm from "../molecule/HeaderSearchForm";
import AlarmButton from "../atoms/button/AlarmButton";
import ProfileButton from "../atoms/button/ProfileButton";
import LoginLink from "../atoms/link/LoginLink";

export default function LoginWrap() {
  const [check, setCheck] = useState(false);
  return (
    <div className="flex items-center gap-[24px]">
      {/* <button onClick={() => setCheck(!check)}> login test</button> */}
      <HeaderSearchForm />
      {check ? (
        <>
          <AlarmButton />
          <ProfileButton />
        </>
      ) : (
        <LoginLink />
      )}
    </div>
  );
}

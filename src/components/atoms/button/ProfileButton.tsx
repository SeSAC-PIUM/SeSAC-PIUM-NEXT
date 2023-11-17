import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../../img/profile.svg";
import ProfileModal from "@/components/organism/ProfileModal";
import { useState, useEffect } from "react";

export default function ProfileButton() {
  const [visible, setVisible] = useState(false);

  const visibleModal = () => {
    setVisible((prev) => !prev);
  };

  const hiddenModal = () => {
    setVisible(false);
  };

  return (
    <>
      <div className="cursor-pointer">
        <Image src={ProfileImage} alt="profile" onClick={visibleModal} />
      </div>
      {visible && <ProfileModal />}
    </>
  );
}

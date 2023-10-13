import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../../img/profile.svg";
import ProfileModal from "@/components/organism/ProfileModal";
import { useState, useEffect } from "react";

export default function ProfileButton() {

  const [visible, setVisible] = useState(false);

  const visibleModal = () => {
    setVisible(true)
  }
  const hiddenModal = () => {
    setVisible(false)
  }

  return (
    <>
    <Link href={"/profile"}>
      <Image src={ProfileImage} alt="profile" onMouseEnter={visibleModal} onMouseLeave={hiddenModal} />
    </Link>
    {visible && (<ProfileModal onMouseEnter={visibleModal} onMouseLeave={hiddenModal}/>)}
    </>
  );
}

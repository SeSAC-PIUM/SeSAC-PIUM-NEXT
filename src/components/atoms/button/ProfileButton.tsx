import Image from "next/image";
import Link from "next/link";
import ProfileImage from "../../../img/profile.svg";

export default function ProfileButton() {
  return (
    <Link href={"/profile"}>
      <Image src={ProfileImage} alt="profile" />
    </Link>
  );
}

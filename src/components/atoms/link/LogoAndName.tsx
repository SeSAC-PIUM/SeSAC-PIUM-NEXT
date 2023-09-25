import Link from "next/link";
import Logo from "../../../img/logo&name.svg";
import Image from "next/image";

export default function LogoAndName() {
  return (
    <Link href={"/"} className="h-[36px]">
      <Image src={Logo} alt="logo" />
    </Link>
  );
}

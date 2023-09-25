import Image from "next/image";
import Link from "next/link";
import AlarmImage from "../../../img/alarm.svg";

export default function AlarmButton() {
  return (
    <Link href={"#"}>
      <Image src={AlarmImage} alt="alarm" />
    </Link>
  );
}

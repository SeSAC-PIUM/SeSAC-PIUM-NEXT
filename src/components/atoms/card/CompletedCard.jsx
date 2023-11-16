import Image from "next/image";
import completed01 from "@/img/completed_pro1 (1).png";
import completed02 from "@/img/completed_pro2 (1).png";
import completed03 from "@/img/completed_pro3 (1).png";
import completed04 from "@/img/completed_pro4 (1).png";
import Link from "next/link";

export default function CompletedCard() {
  return (
    <div className="">
      <ul className="flex flex-row w-full h-full">
        <Link href="#">
          <Image
            className="w-[280px] mr-[24px]"
            src={completed01}
            alt="completed_pro1"
          ></Image>
        </Link>

        <Link href="#">
          <Image
            className="w-[280px] mr-[24px]"
            src={completed02}
            alt="completed_pro2"
          ></Image>
        </Link>

        <Link href="#">
          <Image
            className="w-[280px] mr-[24px] "
            src={completed03}
            alt="completed_pro3"
          ></Image>
        </Link>

        <Link href="#">
          <Image
            className="w-[280px] mr-[12px]"
            src={completed04}
            alt="completed_pro4"
          ></Image>
        </Link>
      </ul>
    </div>
  );
}

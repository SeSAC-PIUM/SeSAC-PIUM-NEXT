import Link from "next/link";
import Right from "../../../img/right.svg";
import Image from "next/image";

export default function FirstUserGuide() {
  return (
    <Link
      href={"#"}
      className="items-center tracking-[-0.4px] flex text-[--color-grayscale-600] text-[14px] font-semibold"
    >
      처음이신가요? &nbsp;
      <span className="text-[--color-main-green] text-[14px] font-semibold">
        이용가이드
      </span>
      <Image src={Right} alt="right-arrow" />
    </Link>
  );
}

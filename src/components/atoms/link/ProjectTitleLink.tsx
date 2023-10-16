import next from "@/img/next.png";
import Image from "next/image";
import Link from "next/link";

interface ProjectTitleLinkProps {
  text1: any;
  text2: string;
  href: any;
}

export default function ProjectTitleLink({
  text1,
  text2,
  href,
}: ProjectTitleLinkProps) {
  return (
    <div className="flex  flex-col">
      <p className=" p-0 w-fit">
        <Link
          href={href}
          className="flex text-[#30303] text-[24px] font-semibold pt-[16px] pb-[12px] leading-[24px]"
        >
          {text1}
          <Image
            className="w-[24px] h-[24px] overline "
            src={next}
            alt="next"
          />
        </Link>
      </p>
      <div className="flex justify-between mb-[24px] ">
        <Link href={href}>
          <p className="text-[14px] font-semibold pb-[16px] text-[#626273] h-[16px]">
            {text2}
          </p>
        </Link>
        <Link href={href}>
          <p className="text-[14px] font-normal text-[#626273]">더보기</p>
        </Link>
      </div>
    </div>
  );
}

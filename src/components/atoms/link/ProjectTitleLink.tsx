import next from "@/img/next.png";
import Image from "next/image";

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
    <div className="flex  flex-col justify-center  w-[1200px]  ">
      <p className=" p-0">
        <a
          href={href}
          className="flex text-[#30303] text-[24px] font-semibold pt-[16px] pb-[12px] leading-[24px]"
        >
          {text1}
          <Image
            className="w-[24px] h-[24px] overline "
            src={next}
            alt="next"
          />
        </a>
      </p>
      <div className="flex justify-between mb-[24px] ">
        <p className="text-[14px] font-semibold pb-[16px] text-[#626273] h-[16px]">
          {text2}
        </p>
        <a href={href}>
          <p className="text-[14px] font-normal text-[#626273]">더보기</p>
        </a>
      </div>
    </div>
  );
}

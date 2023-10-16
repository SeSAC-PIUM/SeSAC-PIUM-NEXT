import Link from "next/link";

interface BannerNavLinkProps {
  text1: any;
  text2: any;
  href: any;
}

export default function BannerNavLink({
  text1,
  text2,
  href,
}: BannerNavLinkProps) {
  return (
    <>
      <Link href={href} className="block ">
        <div className="w-[282px] h-[124px] bg-[#2da96e] rounded-[8px] text-right pt-[40px] pr-[32px] gap=[8px]">
          <p className="font-[400] text-[14px] text-[#ffc927]">{text1}</p>
          <p className="font-[500] text-[20px] text-[#f5f5f9] ">{text2} </p>
        </div>
      </Link>
    </>
  );
}

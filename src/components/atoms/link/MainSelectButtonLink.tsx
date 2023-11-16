import Link from "next/link";
interface MainSelectButtonLinkProps {
  text: string;
  href: any;
}

export default function MainSelectButtonLink({
  text,
  href,
}: MainSelectButtonLinkProps) {
  return (
    <>
      <Link href={href}>
        <div className="w-[180px] h-[65px] bg-[#4f4f4f] rounded-[4px] shaodw-[2px_2px_4px_0_rgba(223,223,223,0.25) flex items-center justify-center text-[#fff] text-[14px] cursor-pointer">
          {text}
        </div>
      </Link>
    </>
  );
}

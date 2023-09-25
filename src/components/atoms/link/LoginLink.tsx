import Link from "next/link";

export default function LoginLink() {
  return (
    <Link
      href={"#"}
      className={`w-fit h-[36px] flex items-center py-[8px] px-[16px] rounded-[4px] border-[--color-main-green] border-[1px] bg-[#fff] text-[--color-main-green] text-[14px]`}
    >
      로그인/회원가입
    </Link>
  );
}

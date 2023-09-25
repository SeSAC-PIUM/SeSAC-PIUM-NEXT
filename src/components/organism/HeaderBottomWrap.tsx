import Link from "next/link";
import NavLink from "../atoms/link/NavLink";
import FirstUserGuide from "../atoms/link/FirstUserGuide";

export default function HeaderBottomWrap() {
  return (
    <div className="flex justify-between items-center">
      <ul className="flex gap-[12px]">
        <NavLink text="프로젝트" href="#" />
        <NavLink text="멤버" href="#" />
        <NavLink text="공간 예약" href="#" />
        <li className="text-[#c6c6d0] py-[8px] px-0">|</li>
        <NavLink text="커뮤니티" href="#" />
        <NavLink text="완성 프로젝트" href="#" />
        <NavLink text="About PIUM" href="#" />
      </ul>
      <FirstUserGuide />
    </div>
  );
}

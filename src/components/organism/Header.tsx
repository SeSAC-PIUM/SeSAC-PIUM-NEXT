import HeaderBottomWrap from "./HeaderBottomWrap";
import HeaderTopWrap from "./HeaderTopWrap";

export default function Header() {
  return (
    <header>
      <div className="my-0 mx-auto max-w-[1200px]">
        <HeaderTopWrap />
        <HeaderBottomWrap />
      </div>
    </header>
  );
}

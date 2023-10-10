import {SearchIcon} from "../font-icon/SearchIcon";

export default function MainSearchForm() {
  return (
    <form className="flex gap-[10px] max-w-[443px] w-full my-0 mx-auto border-b-2 border-black pb-3">
      <input type="text" className="flex-1 text-[24px] font-semibold border-none outline-none h-[28px] text-center"/>
      <SearchIcon></SearchIcon>
    </form>
  );
}

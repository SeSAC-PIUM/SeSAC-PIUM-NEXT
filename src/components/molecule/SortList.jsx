export default function SortList() {
  return (
    <ul className="flex flex-col w-[146px] absolute mt-[9px] text-center rounded border-[1px] border-[#e9e9ee] p-4 gap-[12px] bg-white z-[100]">
      <li className="h-[40px] leading-[40px] rounded cursor-pointer hover:bg-[#2da96d7f]">
        최신순
      </li>
      <li className="h-[40px] leading-[40px] rounded cursor-pointer hover:bg-[#2da96d7f]">
        인기순
      </li>
      <li className="h-[40px] leading-[40px] rounded cursor-pointer hover:bg-[#2da96d7f]">
        빠른시작
      </li>
    </ul>
  );
}

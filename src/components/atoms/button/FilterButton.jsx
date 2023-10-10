import { AngleDown } from "../../font-icon/AngleDown";

export default function FilterButton({ children }) {
  return (
    <>
      <button className="w-[146px] py-3 border-[1px] border-[--color-grayscale-200] rounded text-center bg-white">
        {children}
        <AngleDown></AngleDown>
      </button>
    </>
  );
}

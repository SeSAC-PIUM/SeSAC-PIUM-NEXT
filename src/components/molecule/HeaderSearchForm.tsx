import SubmitButton from "../atoms/button/SubmitButton";
import HeaderInput from "../atoms/input/HeaderInput";

export default function HeaderSearchForm() {
  return (
    <div className="h-[36px] w-[210px] py-[8px] px-[24px] rounded-full bg-[--gy-1,#f5f5f9]">
      <form className="flex h-full gap-[10px] ">
        <HeaderInput />
        <SubmitButton />
      </form>
    </div>
  );
}

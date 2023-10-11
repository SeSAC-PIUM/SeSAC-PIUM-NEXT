import MainSelectButtonLink from "../link/MainSelectButtonLink";

export default function MainSelectButton() {
  return (
    <div className="flex justify-center gap-[12px]">
      <MainSelectButtonLink text="전체보기" href="#"></MainSelectButtonLink>
      <MainSelectButtonLink text="기획" href="#"></MainSelectButtonLink>
      <MainSelectButtonLink text="UX/UI디자인" href="#"></MainSelectButtonLink>
      <MainSelectButtonLink text="퍼블리싱" href="#"></MainSelectButtonLink>
      <MainSelectButtonLink text="프론트엔드" href="#"></MainSelectButtonLink>
      <MainSelectButtonLink text="백엔드" href="#"></MainSelectButtonLink>
    </div>
  );
}

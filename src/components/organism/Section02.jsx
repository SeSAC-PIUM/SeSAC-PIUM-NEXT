import MainSelectButton from "../atoms/button/MainSelectButton";

export default function Section02() {
  return (
    <div className="mb-[80px]">
      <div className="mb-[24px]">
        <div className="mb-[12px] font-semibold text-center text-[14px] tracking-[-1px] text-[#464656]">
          프로젝트의 시작🌱
        </div>
        <div className="text-[32px] text-center tracking-[-1px] font-semibold text-[#2da96e]">
          직무별 <span className="text-[#464656]">프로젝트 둘러보기</span>
        </div>
      </div>
      <MainSelectButton></MainSelectButton>
    </div>
  );
}

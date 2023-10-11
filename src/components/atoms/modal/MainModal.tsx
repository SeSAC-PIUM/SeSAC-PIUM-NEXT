import MainModalLink from "../link/MainModalLink";

export default function MainModal() {
  return (
    <div className="w-[234px] h-auto p-[24px] z-50 rounded border border-solid border-[#e9e9ee] bg-[#fff] shadow-[2px_2px_4px_0px_rgba(211, 211, 211, 0.25)]">
      <div className="pt-0 pb-2  border-b-[1px] border-solid border-[#e9e9ee] ">
        <MainModalLink
          text1="기획"
          text2="멘토 1명"
          text3="멘티 1명"
        ></MainModalLink>
      </div>
      <div className="py-2  border-b-[1px] border-solid border-[#e9e9ee] ">
        <MainModalLink
          text1="UX/UI"
          text2="멘토 1명"
          text3="멘티 1명"
        ></MainModalLink>
      </div>
      <div className="py-2  border-b-[1px] border-solid border-[#e9e9ee] ">
        <MainModalLink
          text1="퍼블리싱"
          text2="멘토 1명"
          text3="멘티 1명"
        ></MainModalLink>
      </div>
      <div className="py-2  border-b-[1px] border-solid border-[#e9e9ee] ">
        <MainModalLink
          text1="프론트엔드"
          text2="멘토 1명"
          text3="멘티 1명"
        ></MainModalLink>
      </div>
      <div className="pt-2 pb-0  border-b-[1px] border-solid border-[#e9e9ee] ">
        <MainModalLink
          text1="백엔드"
          text2="멘토 1명"
          text3="멘티 1명"
        ></MainModalLink>
      </div>
    </div>
  );
}

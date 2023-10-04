// import SubmitButton from "../components/atoms/button/SubmitButton";
// import MainMakingProjectButton from "../components/atoms/button/MainMakingProjectButton";
// import ProfileButton from "../components/atoms/button/ProfileButton";
// import DefaultButton from "../components/atoms/button/DefaultButton";
import ChipsForm from "../components/molecule/ChipsForm";
import CardTitle from "../components/atoms/text/CardTitle";
import SignUpInput from "../components/atoms/input/SignUpInput"
import { skiils } from "../data/skill";

export default function CreateProject() {
  const days = [
    {
      item: "요일 미정",
    },
    {
      item: "월요일",
    },
    {
      item: "화요일",
    },
    {
      item: "수요일",
    },
    {
      item: "목요일",
    },
    {
      item: "금요일",
    },
    {
      item: "토요일",
    },
    {
      item: "일요일",
    },
  ];


  return (
    <div className="container">
      <main>
        <p className="page_title"><span className="page_title_point">프로젝트</span> 생성</p>
        <section>
          <p>프로젝트 기본 정보를 입력해주세요.</p>
          <p></p>
          <div className="flex flex-col gap-12">
            <div className="flex flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <CardTitle>캠퍼스</CardTitle>
                <SignUpInput placeholder="캠퍼스를 선택해주세요"></SignUpInput>
              </div>
              <div className="flex-1">
                <CardTitle>진행 기간</CardTitle>
                <div className="flex gap-[10px]">
                  <SignUpInput placeholder="시작 날짜"></SignUpInput>
                  <SignUpInput placeholder="마감 날짜"></SignUpInput>
                </div>
              </div>
            </div>
            <div>
              <CardTitle>작업 요일</CardTitle>
              <ChipsForm text={days}></ChipsForm>
            </div>
            <div>
              <CardTitle>모집 기술</CardTitle>
              <ChipsForm text={skiils}></ChipsForm>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

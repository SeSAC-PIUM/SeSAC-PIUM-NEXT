// import SubmitButton from "../components/atoms/button/SubmitButton";
// import MainMakingProjectButton from "../components/atoms/button/MainMakingProjectButton";
// import ProfileButton from "../components/atoms/button/ProfileButton";
// import DefaultButton from "../components/atoms/button/DefaultButton";
import ChipsForm from "../components/molecule/ChipsForm";

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
    <>
      {/* <SubmitButton></SubmitButton>
      <MainMakingProjectButton></MainMakingProjectButton>
      <ProfileButton></ProfileButton> */}
      {/* <DefaultButton text1 = '뿡1'></DefaultButton> */}
      <ChipsForm text={days}></ChipsForm>
      <h1>메롱</h1>
    </>
  );
}

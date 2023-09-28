import SubmitButton from "../components/atoms/button/SubmitButton";
import MainMakingProjectButton from "../components/atoms/button/MainMakingProjectButton";
import ProfileButton from "../components/atoms/button/ProfileButton";
import DefaultButton from "../components/atoms/button/DefaultButton";
import ChipsForm from "../components/molecule/ChipsForm";

export default function CreateProject() {
  return (
    <>
      <SubmitButton></SubmitButton>
      <MainMakingProjectButton></MainMakingProjectButton>
      <ProfileButton></ProfileButton>
      <DefaultButton></DefaultButton>
      <ChipsForm />
      <h1>메롱</h1>
    </>
  );
}

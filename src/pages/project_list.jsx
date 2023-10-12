import MainSearchForm from "../components/molecule/MainSearchForm";
import ProjectListFilter from "../components/organism/ProjectListFilter";
import CustomHook from "../components/molecule/CustomHook"

export default function ProjectList() {
  return (
    <div className="my-0 mx-auto max-w-[1200px]">
      <main className="pt-16">
        <MainSearchForm></MainSearchForm>
        <ProjectListFilter></ProjectListFilter>
        <CustomHook></CustomHook>
      </main>
    </div>
  );
}

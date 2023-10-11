import FilterButton from "../atoms/button/FilterButton";
import RecruitCompleteButton from "../atoms/button/RecruitCompleteButton";
import SortList from "./SortList";

export default function ProjectListFilterRight() {
  return (
    <div className="flex items-center gap-5">
      <RecruitCompleteButton></RecruitCompleteButton>
      <div>
        <FilterButton>최신순</FilterButton>
        <SortList></SortList>
      </div>
    </div>
  );
}

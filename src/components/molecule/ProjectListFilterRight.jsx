import FilterButton from "../atoms/button/FilterButton";
import RecruitCompleteButton from "../atoms/button/RecruitCompleteButton";

export default function ProjectListFilterRight(){
  return(
    <div className="flex items-center gap-5">
      <RecruitCompleteButton></RecruitCompleteButton>
      <FilterButton>최신순</FilterButton>
    </div>
  )
}
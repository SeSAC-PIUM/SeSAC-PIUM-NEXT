import ProjectListFilterLeft from "../molecule/ProjectListFilterLeft"
import ProjectListFilterRight from "../molecule/ProjectListFilterRight"

export default function ProjectListFilter(){
  return(
    <div className="flex mt-[84px] mb-[23px] justify-between">
      <ProjectListFilterLeft></ProjectListFilterLeft>
      <ProjectListFilterRight></ProjectListFilterRight>
    </div>
  )
}
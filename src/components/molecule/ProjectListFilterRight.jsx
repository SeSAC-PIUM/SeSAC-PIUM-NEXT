import FilterButton from "../atoms/button/FilterButton";
import RecruitCompleteButton from "../atoms/button/RecruitCompleteButton";
import SortList from "./SortList";
import { useState, useEffect } from "react";

export default function ProjectListFilterRight() {
  //////////// 바깥 클릭 시 리스트 사라지게 하는 기능 (시작) ///////////////
  const [visible, setVisible] = useState(false);

  const handleClickOutside = (event) => {
    // if (!event.target.closest("#visebleHidden")) {
    setVisible(false); // 외부를 클릭하면 컴포넌트를 숨깁니다.
    // }
  };
  const handleButtonClick = (event) => {
    console.log(event);
    event.stopPropagation(); // 버튼 클릭 이벤트가 문서 전체로 전파되지 않도록 중지합니다.

    setVisible(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [visible]);

  //////////// 바깥 클릭 시 리스트 사라지게 하는 기능 (끝) ///////////////

  return (
    <div className="flex items-center gap-5">
      <RecruitCompleteButton></RecruitCompleteButton>
      <div>
        <div onClick={handleButtonClick}>
          <FilterButton>최신순</FilterButton>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {visible && <SortList></SortList>}
        </div>
      </div>
    </div>
  );
}

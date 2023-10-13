import FilterButton from "../atoms/button/FilterButton";
import FilterItemForm from "./FilterItemForm";
import FilterSelection from "./FilterSelection";
import { useState, useEffect } from "react";

export default function ProjectListFilterLeft() {
  //////////// 바깥 클릭 시 리스트 사라지게 하는 기능 (시작) ///////////////
  const [visible, setVisible] = useState([false, false]);

  const handleClickOutside = (event) => {
    if (!event.target.closest("#visebleHidden")) {
      setVisible(false); // 외부를 클릭하면 컴포넌트를 숨깁니다.
    }
  };
  const handleButtonClick = (event) => {
    console.log(event);
    event.stopPropagation(); // 버튼 클릭 이벤트가 문서 전체로 전파되지 않도록 중지합니다.

    if (event.target.closest("#role")) {
      setVisible((prev) => [true, prev[1]]); // 버튼 클릭 시 컴포넌트를 토글합니다.
    } else if (event.target.closest("#campus")) {
      setVisible((prev) => [prev[0], true]); // 버튼 클릭 시 컴포넌트를 토글합니다.
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [visible]);

  //////////// 바깥 클릭 시 리스트 사라지게 하는 기능 (끝) ///////////////

  const [select, setSelect] = useState([]);
  const [length, setLength] = useState();

  const removeElement = (innerText) => {
    console.log(select);
    setSelect(select.filter((select) => select !== innerText));
  };

  // const [count, setCount] = useState(text.length);
  // setCount((prev)=>[...prev, text])

  // useEffect(()=>{
  //   setCount(text.length)

  // })

  const selectionCampus = (check) => {
    // console.log(check);
    setSelect(check);
    
    // console.log(select);
  };

  const isBoolean2 = (isb) => {
    setLength(isb);
  };

  const empty = () => {};

  // useEffect(() => {
  //   selectionCampus()
  // }, [select]);

  const role = [
    {
      item: "전체",
      value: "all",
      all: "bg-[--color-main-green] text-white",
    },
    {
      item: "기획",
      value: "PM",
      borderGreen: true,
    },
    {
      item: "UX/UI디자인",
      value: "uxui",
      borderGreen: true,
    },
    {
      item: "퍼블리셔",
      value: "publisher",
      borderGreen: true,
    },
    {
      item: "프론트엔드",
      value: "frontend",
      borderGreen: true,
    },
    {
      item: "백엔드",
      value: "backend",
      borderGreen: true,
    },
  ];

  const campus = [
    {
      item: "전체",
      value: "all",
      all: "bg-[--color-main-green] text-white",
      borderGreen: true,
    },
    {
      item: "강동",
      value: "Gangdong",
      borderGreen: true,
    },
    {
      item: "강서",
      value: "Gangseo",
      borderGreen: true,
    },
    {
      item: "광진",
      value: "Gwangjin",
      borderGreen: true,
    },
    {
      item: "금천",
      value: "Geumcheon",
      borderGreen: true,
    },
    {
      item: "동작",
      value: "Dongjak",
      borderGreen: true,
    },
    {
      item: "마포",
      value: "Mapo",
      borderGreen: true,
    },
    {
      item: "서대문",
      value: "Seodaemun",
      borderGreen: true,
    },
    {
      item: "용산",
      value: "Yongsan",
      borderGreen: true,
    },
    {
      item: "종로",
      value: "Jongno",
      borderGreen: true,
    },
    {
      item: "중구",
      value: "Junggu",
      borderGreen: true,
    },
  ];

  return (
    <div className="flex items-center">
      <div className="mr-2">
        <div id="role">
          <div onClick={handleButtonClick}>
            <FilterButton>직무 선택</FilterButton>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {visible[0] && (
            <FilterItemForm
              text={role}
              wrapWidth={"w-[304px]"}
              fontSize={"text-[14px]"}
              width={""}
              onLifting={empty}
              onLifting2={empty}
            ></FilterItemForm>
          )}
        </div>
      </div>
      <div>
        <div id="campus">
          <div onClick={handleButtonClick}>
            <FilterButton>캠퍼스 선택</FilterButton>
          </div>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {visible[1] && (
            <FilterItemForm
              text={campus}
              wrapWidth={"w-[510px]"}
              fontSize={"text-[14px]"}
              width={"w-[69px]"}
              onLifting={selectionCampus}
              onLifting2={isBoolean2}
            ></FilterItemForm>
          )}
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <FilterSelection
          text={select}
          length={length}
          onRemove={removeElement}
        ></FilterSelection>
      </div>
      <button className="bg-[--color-main-green] text-white py-1 px-3 rounded-[20px] text-[14px]">
        완료
      </button>
    </div>
  );
}

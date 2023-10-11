import FilterButton from "../atoms/button/FilterButton";
import FilterItemForm from "./FilterItemForm";
import FilterSelection from "./FilterSelection";
import { useState, useCallback, useEffect } from "react";

export default function ProjectListFilterLeft() {
  
  const [select, setSelect] = useState([]);
  
  const selectionCampus = (check) =>{
    console.log(check)
    setSelect(check)
    console.log(select)
  }

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
    },
    {
      item: "UX/UI디자인",
      value: "uxui",
    },
    {
      item: "퍼블리셔",
      value: "publisher",
    },
    {
      item: "프론트엔드",
      value: "frontend",
    },
    {
      item: "백엔드",
      value: "backend",
    },
  ];

  const campus = [
    {
      item: "전체",
      value: "all",
      all: "bg-[--color-main-green] text-white",
    },
    {
      item: "강동",
      value: "Gangdong",
    },
    {
      item: "강서",
      value: "Gangseo",
    },
    {
      item: "광진",
      value: "Gwangjin",
    },
    {
      item: "금천",
      value: "Geumcheon",
    },
    {
      item: "동작",
      value: "Dongjak",
    },
    {
      item: "마포",
      value: "Mapo",
    },
    {
      item: "서대문",
      value: "Seodaemun",
    },
    {
      item: "용산",
      value: "Yongsan",
    },
    {
      item: "종로",
      value: "Jongno",
    },
    {
      item: "중구",
      value: "Junggu",
    },
  ];


  return (
    <div className="flex items-center">
      <div className="mr-2">
        <FilterButton>직무 선택</FilterButton>
        <FilterItemForm
          text={role}
          wrapWidth={"w-[304px]"}
          fontSize={"text-[14px]"}
        ></FilterItemForm>
      </div>
      <div>
        <FilterButton>캠퍼스 선택</FilterButton>
        <FilterItemForm
          text={campus}
          wrapWidth={"w-[510px]"}
          fontSize={"text-[14px]"}
          width={"w-[69px]"}
          onLifting={selectionCampus}
        ></FilterItemForm>
      </div>
      <FilterSelection text={select}></FilterSelection>
      <button className="bg-[--color-main-green] text-white py-1 px-3 rounded-[20px] text-[14px]">완료</button>
    </div>
  );
}

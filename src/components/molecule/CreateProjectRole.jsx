import { useEffect, useMemo, useState } from "react";
import UseAutocomplete from "../molecule/DropDown";
import VariationBox from "../molecule/VariationBox";
import CardTitle from "../atoms/label/CardTitle";

export default function CreateProjectRole() {
  const [select, setSelect] = useState([null, 1, 1]);
  const [button, setButton] = useState([]);

  const selectionCampus = (kind, data) => {
      if (kind == "role") {
        // console.log(select[0]=data)
        setSelect((prev) => [data, prev[1], prev[2]]);
      } else if (kind == "mentor") {
        setSelect((prev) => [prev[0], data, prev[2]]);
      } else if (kind == "mentee") {
        setSelect((prev) => [prev[0], prev[1], data]);
      }
  };

  const selectedList = () => {
    setButton((prev) => [...prev, select]);
  };

  const role = ["기획", "UX/UI디자인", "퍼블리셔", "프론트엔드", "백엔드"];


  return (
    <div>
      <CardTitle
        title1="모집 포지션"
        PointTitle1=""
        title2=""
        PointTitle2=""
      ></CardTitle>
      <ul>
        {button.map((ele, index) => {
          return (
            <li
              key={index}
              className="py-[16px] px-[32px] w-fit border-[1px] border-[#e9e9ee] rounded mb-[12px]"
            >{`${ele[0]} / 멘토 ${ele[1]} / 멘티 ${ele[2]}`}</li>
          );
        })}
      </ul>
      <div className="flex gap-3">
        <UseAutocomplete
          kind={"role"}
          onLifting={selectionCampus}
          item={role}
          placeholder='포지션을 선택해주세요'
        ></UseAutocomplete>
        <VariationBox kind={"mentor"} onLifting={selectionCampus}>
          멘토
        </VariationBox>
        {/* <VariationBox onLifting={()=>{selectionCampus('mentee')}}>멘티</VariationBox> */}
        <VariationBox kind={"mentee"} onLifting={selectionCampus}>
          멘티
        </VariationBox>
        <button
          onClick={selectedList}
          className="bg-[--color-main-green] border-[1px] border-[#e9e9ee] text-white rounded w-fit py-[12px] px-8 h-fit"
        >
          추가
        </button>
      </div>
    </div>
  );
}

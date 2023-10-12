import { useEffect, useMemo, useState } from "react";
import UseAutocomplete from "../molecule/DropDown";
import VariationBox from "../molecule/VariationBox";
import CardTitle from "../atoms/label/CardTitle";

export default function CreateProjectRole() {
  const [select, setSelect] = useState([null, 1, 1]);
  const [button, setButton] = useState([]);

  const selectionCampus = (kind, data) => {
    // if () {
    if (kind == "role") {
      // console.log(select[0]=data)
      setSelect([(select[0] = data), select[1], select[2]]);
    } else if (kind == "mentor") {
      setSelect([select[0], (select[1] = data), select[2]]);
    } else if (kind == "mentee") {
      setSelect([select[0], select[1], (select[2] = data)]);
    }

    // console.log(kind);
    // console.log(data);
    // setSelect(data);
    console.log(select);
  };

  const selectedList = () => {
    setButton((prev)=>[...prev, select])
  };
  
  console.log(button)

  const role = [
    {
      item: "기획",
    },
    {
      item: "UX/UI디자인",
    },
    {
      item: "퍼블리셔",
    },
    {
      item: "프론트엔드",
    },
    {
      item: "백엔드",
    },
  ];

  console.log();

  return (
    <div>
      <CardTitle
        title1="모집 포지션"
        PointTitle1=""
        title2=""
        PointTitle2=""
      ></CardTitle>
      <ul>{button.map((ele, index)=>{
        console.log(ele)
        return(
          <li key={index} className="py-[16px] px-[32px] w-fit border-[1px] border-[#e9e9ee] rounded mb-[12px]">{`${ele[0]} / 멘토 ${ele[1]} / 멘티 ${ele[2]}`}</li>
        )
      })}</ul>
      <div className="flex gap-3">
        <UseAutocomplete
          kind={"role"}
          onLifting={selectionCampus}
          item={role}
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
          // className="bg-[--color-main-green] border-[1px] border-[#e9e9ee] text-white rounded w-fit py-[12px] px-8 h-fit"
          className="bg-white border-[1px] border-[#e9e9ee] text-[--color-main-green] rounded w-fit py-[12px] px-8 h-fit active:bg-[--color-main-green] active:text-white"
        >
          추가
        </button>
      </div>
    </div>
  );
}

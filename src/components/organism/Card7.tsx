import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="대학생 국제교류 소모임 서비스"
        text2="[종로] 대학생 국제교류 소모임 서비스"
        text3="한국인, 외국인 대학생이 함께 교류할 수 있는 모임 플랫폼"
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="수의사 상담 플랫폼"
        text2="[용산] 수의사 상담 플랫폼"
        text3="반려동물 관리를 위한 수의사 온라인 상담 서비스"
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

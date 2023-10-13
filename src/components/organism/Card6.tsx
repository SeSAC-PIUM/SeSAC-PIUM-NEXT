import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="가티"
        text2="[금천] 레저 스포츠 매칭 서비스 '가티'"
        text3="이용자 특성에 맞춘 레저 스포츠 매칭 및 스포츠 특화 심화 중고거래 서비스"
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

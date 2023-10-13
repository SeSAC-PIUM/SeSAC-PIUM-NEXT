import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="빅데이터 기반 꽃집 예약 솔루션"
        text2="[마포] 빅데이터 기반 꽃집 예약 솔루션"
        text3="빅데이터 기반 맞춤 꽃상품 가격 측정 및 소비자 예약 수령 서비스"
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

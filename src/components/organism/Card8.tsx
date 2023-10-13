import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="수제케이크"
        text2="[서대문] 수제케이크 정보제공 앱"
        text3="개인 취향에 따라 흩어져있는 수제 케이크 가게 정보 제공 및 예약 앱"
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

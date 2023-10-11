import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="PIUM"
        text2="[강동] 새싹 프로젝트 매칭 플랫폼"
        text3="푸시알람 관심제품 추천 및 핫딜 공유 서비스"
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

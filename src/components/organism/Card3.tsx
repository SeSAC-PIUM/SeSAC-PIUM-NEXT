import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="기깔나는 사람들"
        text2="[강서] 온라인 공간 서비스"
        text3="
        포트폴리오, 구인/구직, 사이드 프로젝트를 통합하는 온라인
        공간 서비스
      "
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

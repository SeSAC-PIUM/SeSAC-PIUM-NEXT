import CardHeader from "../atoms/card/CardHeader";
import CardFooter from "../atoms/card/CardFooter";

export default function CardLink() {
  return (
    <div className=" relative w-[282px] flex flex-col rounded-[4px] border border-solid border-[#f5f5f9]">
      <CardHeader
        text1="myfolio"
        text2="[강동] 마오폴리오 myfolio"
        text3="입시컨설팅의 대중화를 목표로 하는 생활기록부 원스톱 서비스"
        href=""
      ></CardHeader>
      <CardFooter data={"4/5"}></CardFooter>
    </div>
  );
}

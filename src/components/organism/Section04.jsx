import Image from "next/image";
import gd0 from "@/img/gd_0.jpg";
import gd1 from "@/img/gd_1.jpg";
import gd2 from "@/img/gd_2.jpg";
import gd3 from "@/img/gd_3.jpg";
import gd4 from "@/img/gd_4.jpg";
import gd5 from "@/img/gd_5.jpg";
export default function Section() {
  return (
    <div className="mx-[96px] text-center">
      <a href="#">
        <span className="pt-[12px] tracking-[-0.56px] text-[32px] font-semibold leading-[1.4] text-[#303030]">
          캠퍼스&nbsp;
          <span className="text-[32px] font-semibold leading-[1.4] text-[#2da96e]">
            공간예약
          </span>
        </span>
      </a>
      <div className="text-[14px] font-medium text-[#464656] pt-[12px] tracking-[-0.56px]">
        서울 전역 13개의 새싹 캠퍼스,편하게 모여 작업하세요!
      </div>
      <div className="w-full pt-[48px] overflow-hidden whitespace-nowrap flex">
        <ul className="animate-[loop_20s_linear_infinite flex">
          <li>
            <a href="#">
              <Image
                className="w-[384px] h-[240px] mt-0 mr-[24px] mb-0 ml-0"
                src={gd0}
                alt="캠퍼스"
              ></Image>
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className="w-[384px] h-[240px] mt-0 mr-[24px] mb-0 ml-0"
                src={gd1}
                alt="캠퍼스"
              ></Image>
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className="w-[384px] h-[240px] mt-0 mr-[24px] mb-0 ml-0"
                src={gd2}
                alt="캠퍼스"
              ></Image>
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className="w-[384px] h-[240px] mt-0 mr-[24px] mb-0 ml-0"
                src={gd3}
                alt="캠퍼스"
              ></Image>
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className="w-[384px] h-[240px] mt-0 mr-[24px] mb-0 ml-0"
                src={gd4}
                alt="캠퍼스"
              ></Image>
            </a>
          </li>
          <li>
            <a href="#">
              <Image
                className="w-[384px] h-[240px] mt-0 mr-[24px] mb-0 ml-0"
                src={gd5}
                alt="캠퍼스"
              ></Image>
            </a>
          </li>
        </ul>
        <ul></ul>
      </div>
    </div>
  );
}

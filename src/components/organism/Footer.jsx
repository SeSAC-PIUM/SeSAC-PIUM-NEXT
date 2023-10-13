import Image from "next/image";
import PIUMLOGO2 from "@/img/PIUM_logo2 .png";
import PIUMLOGO from "../../img/SeSAC logo .png";
import DropDown from "@/img/dropDown.png";

export default function Footer() {
  return (
    <div className="w-full h-[44px] fixed bottom-0 z-[999] bg-[#fff]">
      <div className=" flex justify-between py-[12px] px-[16px]">
        <div>
          <span>
            <Image
              className=" inline mr-[8px]"
              src={PIUMLOGO2}
              alt="PIUMlog"
            ></Image>
          </span>
          <span className="footer_text2 mr-[5px] ">PIUM</span>
          <span className="text-[12px] font-semibold text-[#626273]">
            추가정보
          </span>
          <span>
            <Image className="inline" src={DropDown} alt="dropDown"></Image>
          </span>
          <span className="text-[12px] font-semibold leading-[0.96px] text-[#626273] mx-[16px] my-[0px]">
            |
          </span>
          <span>
            <a
              href="#"
              className="ml-[0px] text-[12px] font-semibold leading-[0.96px] text-[#626273] mx-[0px] my-[16px]"
            >
              사용약관
            </a>
          </span>
          <span>
            <a
              href="#"
              className="ml-[16px] text-[12px] font-semibold leading-[0.96px] text-[#626273] mx-[0px] my-[16px]"
            >
              개인정보처리방침
            </a>
          </span>
          <span>
            <a
              href="#"
              className="ml-[16px] text-[12px] font-semibold leading-[0.96px] text-[#626273] mx-[0px] my-[16px]"
            >
              도움말
            </a>
          </span>
          <span>
            <a
              href="#"
              className="ml-[16px] text-[12px] font-semibold leading-[0.96px] text-[#626273] mx-[0px] my-[16px]"
            >
              문의하기
            </a>
          </span>
        </div>
        <div class="">
          <a href="#">
            <Image
              className="inline mr-[8px]"
              src={PIUMLOGO}
              alt="SeSAC log"
            ></Image>
          </a>
          <a
            href="#"
            target="_blank"
            className="text-[12px] font-semibold leading-[0.96px] text-[#626273]"
          >
            SeSAC
          </a>
          <span className="text-[12px] font-semibold leading-[0.96px] text-[#626273] my-0 mx-[12px]">
            |
          </span>
          <a href="#">
            <Image
              className="inline mr-[8px]"
              src={PIUMLOGO2}
              alt="PIUMlog"
            ></Image>
          </a>
          <a
            href="/index_sub.html"
            className="text-[12px] font-semibold leading-[0.96px] text-[#626273]"
          >
            PIUM
          </a>
        </div>
      </div>
    </div>
  );
}

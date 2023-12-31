import Image from "next/image";
import Link from "next/link";

import AdvBooking from "@/components/organism/AdvBooking";

export default function Section() {
  return (
    <div className="text-center block mt-[96px] mb-[52px]">
      <Link href="#">
        <span className="pt-[12px] tracking-[-0.56px] text-[32px] font-semibold leading-[1.4] text-[#303030]">
          캠퍼스&nbsp;
          <span className="text-[32px] font-semibold leading-[1.4] text-[#2da96e]">
            공간예약
          </span>
        </span>
      </Link>
      <div className="text-[14px] font-medium text-[#464656] pt-[12px] tracking-[-0.56px]">
        서울 전역 13개의 새싹 캠퍼스,편하게 모여 작업하세요!
      </div>
      <div>
        <AdvBooking></AdvBooking>
      </div>
    </div>
  );
}

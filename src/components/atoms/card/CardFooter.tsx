import Image from "next/image";
import Group from "@/img/Group 629971.png";
import { useState } from "react";
import MainModal from "../modal/MainModal";
interface CardFooterProps {
  data: any;
}

export default function CardFooter({ data }: CardFooterProps) {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="p-[16px] flex justify-between items-center border-t border-solid border-[#f5f5f9] relative text-[14px] font-normal text-[#626273] z-50">
      <div className="flex gap-[4px] leading-[16px]">
        <span className="text-[14px] font-normal text-[#626273]">모집중</span>
        <span className="text-[14px] font-normal text-[#626273]">{data}</span>
        <div
          className="w-full"
          onMouseOver={() => setIsHover(true)}
          onMouseOut={() => setIsHover(false)}
        >
          <Image src={Group} alt="모집현황"></Image>
          <div className={`${isHover ? "block" : "hidden"}`}>
            <div className="absolute bottom-[10px]">
              <MainModal></MainModal>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div class="card_footer">
// <div class="recruiting_wrap flex_box_row">
//   <span class="card_footer_text">모집중</span>
//   <span class="card_footer_text">4/5</span>
//   <img src="/src/img/Group 629971.png" />
// </div>
// <ul class="modal">
//   <li>
//     <div class="group_position modal_text_L">기획</div>
//     <div class="modal_text_S flex_box_column">
//       <div class="mentor">멘토 1명</div>
//       <div class="mentee">멘티 1명</div>
//     </div>
//   </li>
//   <li>
//     <div class="group_position modal_text_L">UX/UI디자인</div>
//     <div class="modal_text_S flex_box_column">
//       <div class="mentor">멘토 1명</div>
//       <div class="mentee">멘티 1명</div>
//     </div>
//   </li>
//   <li>
//     <div class="group_position modal_text_L">퍼블리싱</div>
//     <div class="modal_text_S flex_box_column">
//       <div class="mentor">멘토 1명</div>
//       <div class="mentee">멘티 1명</div>
//     </div>
//   </li>
//   <li>
//     <div class="group_position modal_text_L">프론트엔드</div>
//     <div class="modal_text_S flex_box_column">
//       <div class="mentor">멘토 1명</div>
//       <div class="mentee">멘티 1명</div>
//     </div>
//   </li>
//   <li style="border-bottom: none">
//     <div class="group_position modal_text_L">백엔드</div>
//     <div class="modal_text_S flex_box_column">
//       <div class="mentor">멘토 1명</div>
//       <div class="mentee">멘티 1명</div>
//     </div>
//   </li>
// </ul>
// <div class="card_footer_like">
//   <span>❤</span>
//   <span class="like_count">0</span>
// </div>
// </div>

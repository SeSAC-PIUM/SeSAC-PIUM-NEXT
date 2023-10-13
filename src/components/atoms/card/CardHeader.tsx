import LikeButton from "../button/LikeButton";
import Image from "next/image";
import thumbanil from "@/img/thumbnail.png";

interface CardHeaderProps {
  text1: any;
  text2: any;
  text3: any;
  href: any;
}

export default function CardHeader({
  text1,
  text2,
  text3,
  href,
}: CardHeaderProps) {
  return (
    <div className="flex w-full h-full ">
      <div>
        <div className="absolute top-[10px] right-[10px] cursor-pointer text-[#fff] z-10">
          <LikeButton></LikeButton>
        </div>
        <a href="#">
          <div className="h-[150px] relative flex justify-center items-center">
            <p className="absolute text-[16px] font-semibold text-[#fff] text-center leading-[1.4]">
              {text1}
            </p>
            <Image
              className="h-full object-cover"
              src={thumbanil}
              alt="프로젝트 사진"
            ></Image>
          </div>
        </a>
        <a href="#">
          <div className="h-[130px] p-[16px]">
            <p className="text-[16px] font-medium pb-[16px] text-[#303030]">
              {text2}
            </p>
            <p className="text-[14px] font-normal text-[#626273]">{text3}</p>
          </div>
        </a>
      </div>
    </div>
  );
}

//   <span class="like_button"></span>
// <a href="/project_detail/project_detail.html">
//   <div class="thumb">
//     <p class="thumb_text">PIUM</p>
//     <img src="./src/img/thumbnail.png" alt="프로젝트 사진" />
//   </div>
// </a>
// <a href="/project_detail/project_detail.html">
//   <div class="card_body">
//     <p class="card_title">[강동] 새싹 프로젝트 매칭 플랫폼</p>
//     <p class="card_desc">
//       푸시알림 관심제품 추천 및 핫딜 공유 서비스
//     </p>
//   </div>
// </a>

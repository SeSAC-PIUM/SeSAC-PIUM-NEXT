import Image from "next/image";

import AdLeft from "../../img/ad_left.png";
import AdRight from "../../img/ad_right.png";
import { MutableRefObject } from "react";

interface SwiperButtonProps {
  position: string;
  buttonRef: MutableRefObject<null>;
}

export default function SwiperButton({
  position,
  buttonRef,
}: SwiperButtonProps): React.ReactElement {
  return (
    <div
      className={`absolute hidden group-hover:block top-[50%] ${
        position === "left" ? "left-[16px]" : ""
      } ${position === "right" ? "right-[16px]" : ""} z-10 cursor-pointer `}
      ref={buttonRef}
    >
      {position === "left" && <Image src={AdLeft} alt="ad_left" />}
      {position === "right" && <Image src={AdRight} alt="ad_right" />}
    </div>
  );
}

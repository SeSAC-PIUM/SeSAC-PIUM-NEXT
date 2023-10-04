import React from "react";

import Image, { StaticImageData } from "next/image";

// interface GreenButtonProps {
//   className: string;
// }

interface LoginButtonProps {
  text: string;
  className: string;
  bgColor: string;
  textColor: string;
  image?: StaticImageData;
}

export default function LoginButton({
  text,
  className,
  bgColor,
  textColor,
  image,
}: // image,
LoginButtonProps) {
  return (
    <div className={className}>
      <button
        className={`bg-${bgColor}  text-[${textColor}] rounded  py-4  w-full flex justify-center items-center font-semibold`}
      >
        {image && (
          <Image
            src={image}
            alt="loginLogo"
            className=" w-auto h-[24px] mr-3"
          />
        )}

        <span className=" h-[30px] whitespace-nowrap flex justify-center items-center ">
          {text}
        </span>
      </button>
    </div>
  );
}

import React from "react";
import Image, { StaticImageData } from "next/image";

interface LoginButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  image?: StaticImageData;
  border: string;
}

export default function LoginButton({
  text,
  bgColor,
  textColor,
  image,
  border,
}: LoginButtonProps) {
  return (
    <button
      className={`${bgColor}  ${textColor} rounded border-solid  ${border} py-4  w-full flex justify-center items-center font-semibold`}
    >
      {image && (
        <Image src={image} alt="loginLogo" className=" w-auto h-[16px] mr-3" />
      )}

      <span className=" h-[30px] whitespace-nowrap flex justify-center items-center ">
        {text}
      </span>
    </button>
  );
}

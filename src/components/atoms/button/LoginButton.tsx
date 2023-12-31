import React from "react";
import Image, { StaticImageData } from "next/image";

interface LoginButtonProps {
  text: string;
  bgColor: string;
  textColor: string;
  image?: StaticImageData;
  // form?: string | undefined;
  border: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

export default function LoginButton({
  text,
  bgColor,
  textColor,
  image,
  // form = undefined,
  border,
  onClick,
}: // image,
LoginButtonProps) {
  return (
    <div
      className={`${bgColor}  ${textColor} rounded border-solid  ${border} py-4  w-full flex justify-center items-center font-semibold cursor-pointer`}
      // type={form === undefined ? undefined : "submit"}
      // form={form}
      onClick={onClick}
    >
      {image && (
        <Image src={image} alt="loginLogo" className=" w-auto h-[16px] mr-3" />
      )}

      <span className=" h-[30px] whitespace-nowrap flex justify-center items-center ">
        {text}
      </span>
    </div>
  );
}

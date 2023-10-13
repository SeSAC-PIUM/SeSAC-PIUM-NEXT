import Image from "next/image";
import React, { useRef, useState } from "react";
import profile from "../../img/profile_img.svg";

export default function FileUpload({ onFileChange }) {
  const [imgFile, setImgFile] = useState(null);
  const imgRef = useRef();

  // 이미지 업로드 input의 onChange
  const saveImgFile = () => {
    const file = imgRef.current.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgFile(reader.result);
    };
  };
  return (
    <>
      {/* 업로드 된 이미지 미리보기 */}
      {/* <img
        src={imgFile ? imgFile : `/img/icon/user.png`}
        alt="프로필 이미지"
        className="bg-[--color-grayscale-100] w-[150px] h-[150px] rounded-full mr-[40px]"
      /> */}
      <div className="relative w-[150px] h-[150px] mr-[40px] ">
        <Image
          src={imgFile ? imgFile : profile}
          alt="프로필 이미지"
          layout="fill"
          className="bg-[--color-grayscale-100]  rounded-full "
        />
      </div>

      {/* 이미지 업로드 input */}
      <form>
        <input
          type="file"
          accept="image/*"
          id="profileImg"
          onChange={(e) => {
            onFileChange(e);
            saveImgFile();
          }}
          ref={imgRef}
          style={{ display: "none" }}
        />
        <div className="flex flex-col justify-center gap-3 my-4">
          <label
            className="w-fit border-[1px] border-[--color-main-green] text-[--color-main-green] rounded text-center py-2 px-4 cursor-pointer"
            htmlFor="profileImg"
          >
            이미지 첨부
          </label>
          <span className=" text-gray-400 ">
            이미지 권장 사이즈는 300x300 입니다.
          </span>
        </div>
      </form>
    </>
  );
}

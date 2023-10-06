// import Image from "next/image";
// import InitPreviewImg from "../../img/init_preview.png";
import SelectedButton from "../atoms/button/SelectedButton";
import { useEffect, useRef, useState } from "react";

export default function ThumbnailMaker() {
  const [color, setColor] = useState([
    // "from-[#2DA96E]",
    // "to-[#2DA96E]",
    "bg-[#2DA96E]",
    "text-[#2DA96E]",
    "w-[282px]"
  ]);
  const [text, setText] = useState("텍스트를 입력해주세요");
  const inputValue = useRef();
  const onInputChange = (e) => {
    setText(inputValue.current.value);
  };

  const onBgChange = () => {};

  useEffect(() => {
    console.log("⌨ 인풋 입력 시에만 실행되는 useEffect");
  }, [text]);

  const randomRGB = function () {
    let rgb = "";
    rgb += (Math.floor(Math.random() * 90 + 1) + 150)
      .toString(16)
      .padStart(2, "0");
    rgb += (Math.floor(Math.random() * 90 + 1) + 150)
      .toString(16)
      .padStart(2, "0");
    rgb += (Math.floor(Math.random() * 90 + 1) + 150)
      .toString(16)
      .padStart(2, "0");

    console.log(rgb);
    return `#${rgb}`;
  };

  const randomColor = () => {
    console.log([randomRGB(), randomRGB()]);
    setColor([
      // "from-[" + randomRGB() + "]",
      // "to-[" + randomRGB() + "]",
      "bg-[" + randomRGB() + "]",
      "text-[" + randomRGB() + "]",
      "w-[100px]"
    ]);
  };

  // bg-gradient-to-r from-[#2DA96E] to-[#2DA96E] 
  // bg-gradient-to-r from-[#b2abe4] to-[#a3b9eb]

  return (
    <>
      <div
        // class="preview"
        // style={`backgroundImage: url('${InitPreviewImg}')`}
        // background: var(--3, linear-gradient(107deg, #CABEFF 0%, #C9EEFF 101.87%));

        className={`${color[0]} ${color[1]} 
        ${color[2]}  h-[150px] rounded border-[1px] border-[--color-grayscale-200] mb-3 flex justify-center items-center p-5`} /* class="preview" */
      >
        <p className="preview_tit text-black">{text}</p>
      </div>
      <input
        ref={inputValue}
        onChange={onInputChange}
        type="text"
        // class="input__title box"
        placeholder="텍스트를 입력해주세요"
        className="focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm flex-1 w-[282px] mb-3"
      />
      <div
        // class="preview_btn_wrap flex_box_row"
        className="flex w-[282px] h-[46px] justify-center gap-3"
      >
        <label
          // class="file_upload_btn"
          className="inline-block mr-0 pb-0 flex-1 rounded border-[1px] border-[--color-main-green] text-[--color-main-green] leading-[46px] text-center"
        >
          이미지 첨부
          <input
            type="file"
            // class="file_upload_input"
            accept="image/*"
            className="hidden"
          />
        </label>
        {/* <SelectedButton>랜덤 배경 변경</SelectedButton> */}
        <button
          // class="random__gradient"
          className="flex-1 bg-[--color-main-green] border-[1px] border-[#e9e9ee] text-white rounded"
          //onClick={onBgChange}
          onClick={randomColor}
        >
          랜덤 배경 변경
        </button>
      </div>
    </>
  );
}

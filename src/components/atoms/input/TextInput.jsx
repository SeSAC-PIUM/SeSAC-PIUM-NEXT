import React, { useState } from "react";

export default function TextInput() {
  let [inputCount, setInputCount] = useState(0);
  const onInputHandler = (e) => {
    setInputCount(e.target.value.length);
  };
  const onTextareaHandler = (e) => {
    setInputCount(
      e.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, "$&$1$2").length
    );
  };
  return (
    <>
      <div className="flex relative">
        <form>
          <textarea
            style={{ overflow: "hidden" }}
            // cols="40"
            // rows="10"
            className="w-[470px] h-[100px] focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none  leading-4 text-slate-700 text-[14px] placeholder-[#9090A0] rounded p-6 border"
            onChange={onInputHandler}
            maxLength="200"
            placeholder="소개"
          ></textarea>
        </form>

        <div className="absolute top-full flex end-0 text-gray-400 font pt-1">
          <span>{inputCount} </span>
          <span> /200자</span>
        </div>
      </div>
    </>
  );
}

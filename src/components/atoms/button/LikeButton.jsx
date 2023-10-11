import { useState } from "react";

export default function LikeButton() {
  let [like, setLike] = useState(0);
  let [color, setColor] = useState(false);

  return (
    <div>
      <button
        onClick={() => {
          setColor(!color);
          console.log(color);
        }}
      >
        {color ? (
          <div className="text-[#ff5454]">❤</div>
        ) : (
          <div className="text-[#fff]">❤</div>
        )}
      </button>

      <div className="absolute top-[287.5px] text-[14px] text-[#626273] cursor-default flex right-2 leading-[16px]">
        <span className="absolute  right-[10px]">❤</span>
        <span>{color ? <div>{like + 1}</div> : <div>{like}</div>}</span>
      </div>
    </div>
  );
}

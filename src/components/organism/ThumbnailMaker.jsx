// import Image from "next/image";
import InitPreviewImg from "../../img/init_preview.png";

export default function ThumbnailMaker() {

  
  return (
    <>
      <div /* style={`backgroundImage: url('${InitPreviewImg}')`}  */className="w-[282px] h-[150px] rounded border-[1px] border-[--color-grayscale-200] mb-3 flex justify-center items-center p-5" /* class="preview" */>
        <p class="preview_tit">텍스트를 입력해주세요</p>
      </div>
      <input
        type="text"
        class="input__title box"
        placeholder="텍스트를 입력해주세요"
      />
      <div class="preview_btn_wrap flex_box_row">
        <label class="file_upload_btn">
          이미지 첨부
          <input type="file" class="file_upload_input" accept="image/*" />
        </label>
        <div class="random__gradient">랜덤 배경 변경</div>
      </div>
    </>
  );
}

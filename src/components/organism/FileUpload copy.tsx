// import { useState } from "react";

// const Preview = () => {
//   const [imageSrc, setImageSrc]: any = useState(null);

//   const onUpload = (e: any) => {
//     const file = e.target.files[0];
//     const reader = new FileReader();
//     reader.readAsDataURL(file);

//     return new Promise<void>((resolve) => {
//       reader.onload = () => {
//         setImageSrc(reader.result || null); // 파일의 컨텐츠
//         resolve();
//       };
//     });
//   };
//   return (
//     <>
//       <form>
//         <label className="signup-profileImg-label" htmlFor="profileImg">
//           프로필 이미지 추가
//         </label>
//         <input
//           className=" bg-[--color-grayscale-100] w-[150px] h-[150px] rounded-full mr-[40px]"
//           type="file"
//           accept="image/*"
//           id="profileImg"
//           style={{ display: "none" }}
//         />
//       </form>

//       <input
//         accept="image/*"
//         multiple
//         type="file"
//         onChange={(e) => onUpload(e)}
//         className={`w-fit border-[1px] border-[--color-main-green] text-[--color-main-green] rounded text-center py-2 px-4`}
//       />
//       <img
//         width={"100%"}
//         src={imageSrc}
//         className="bg-[--color-grayscale-100] w-[150px] h-[150px] rounded-full mr-[40px]"
//       />
//     </>
//   );
// };

// export default Preview;

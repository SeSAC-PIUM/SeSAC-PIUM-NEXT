import React, { useEffect, useRef, useState } from "react";
import GreenButton from "../atoms/button/GreenButton";
import PageTitle from "../atoms/label/PageTitle";
import BorderBottom from "../atoms/label/BorderBottom";
import { useForm } from "react-hook-form";
import SignUpContentName from "../organism/SignUpContentName";
import SignUpContentCurriculum from "../organism/SignUpContentCurriculum";
import SignUpContentJob from "../organism/SignUpContentJob";
import SignUpContentGender from "../organism/SignUpContentGender";
import SignUpContentMentoring from "../organism/SignUpContentMentoring";
import SignUpContentIProfile from "../organism/SignUpContentIProfile";
import SignUpContentIntroduce from "../organism/SignUpContentIntroduce";
import SignUpContentMbti2 from "../organism/SignUpContentMBTI2";
import SignUpContentHistory from "../organism/SignUpContentHistory";
import SignUpContentLike from "../organism/SignUpContentLike";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import db from "@/firebase/db";
import auth from "@/firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import storage from "@/firebase/storage";
import Image from "next/image";
import basicInfo from "@/data/basicInfo";

const basicRegex = {
  name: /^[가-힣]+$/,
};

export default function SignUpTemplate({}) {
  // const className = "flex flex-wrap  bg-slate-100 items-start py-6 w-full";
  const className = "flex flex-col items-start py-8  ";

  const {
    register,
    formState: { errors },
    handleSubmit,
    watch,
    setValue,
    getValues,
  } = useForm<basicInfo>({
    mode: "onChange",
  });

  const [file, setFile] = useState<File | null>(null);

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;
    if (files && files.length === 1) {
      setFile(files[0]);
    }
  };

  const onValid = async (data: basicInfo) => {
    if (!auth.currentUser) {
      alert("문제 발생!");
      return;
    }

    const user = auth.currentUser;

    if (file) {
      const locationRef = ref(storage, `user/profile/${user.uid}`);

      const extractMimeType = (dataUrl: any) => {
        const match = dataUrl.match(
          /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/
        );
        if (match && match.length > 1) {
          return match[1];
        }
        return null; // MIME 타입을 찾지 못했을 때
      };

      const result = await uploadBytes(locationRef, file);
      const url = await getDownloadURL(result.ref);
      data.profile = url;
    }

    const docRef = doc(db, "user", auth.currentUser?.uid);
    await updateDoc(docRef, data);

    alert("수정이 완료되었습니다.");
  };

  const inVaild = () => {
    console.log("실패");
  };

  const init = async () => {
    if (auth.currentUser) {
      const docRef = doc(db, "user", auth.currentUser.uid);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
        const data = docSnapshot.data();
        for (const key in data) {
          setValue(key, data[key]);
        }
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  console.log(watch());
  const watchProfile = watch("profile");
  return (
    <>
      <section className=" max-w-[800px] w-full m-auto ">
        <form onSubmit={handleSubmit(onValid, inVaild)}>
          <PageTitle
            title1="프로젝트를 위한"
            PointTitle1="기본정보"
            title2="입력"
            PointTitle2=""
            border="border-b-[1px] border-[--color-grayscale-200]"
          />
          {/* <SignUpContentFirst register={register} error /> */}

          <SignUpContentName
            className={className}
            register={register("name", {
              required: true,
              validate: {
                name: (value) =>
                  basicRegex.name.test(value) || "한글로 실명을 입력해주세요.",
              },
            })}
            errors={errors}
          />

          <SignUpContentCurriculum
            className={className}
            register={register}
            setValue={setValue}
            watch={watch}
          />
          <SignUpContentGender
            className={className}
            register={register("gender", { required: true })}
          />
          <SignUpContentJob
            className={className}
            watch={watch}
            register={register("job", { required: true })}
          />
          <SignUpContentMentoring
            className={className}
            register={register("mentoring", { required: true })}
          />

          <BorderBottom marginTop={"mt-[64px]"} marginBottom={"mb-[120px]"} />

          {/* <SignUpContentSecond /> */}
          <SignUpContentIProfile
            className={className}
            onFileChange={onFileChange}
            watch={watch}
          />
          <SignUpContentIntroduce
            register={register("introduce", { required: true })}
            className={className}
          />
          <SignUpContentMbti2
            setValue={setValue}
            className={className}
            watch={watch}
          />
          <SignUpContentHistory register={register} className={className} />
          <SignUpContentLike
            setValue={setValue}
            watch={watch}
            className={className}
          />

          <BorderBottom marginTop={"mt-[64px]"} marginBottom={"mb-2"} />

          <button className="flex justify-center w-full">
            <GreenButton
              // className={className}
              className="flex justify-center items-center w-full max-w-[400px]  mt-12 m-auto"
              text="완료"
            />
          </button>
        </form>
      </section>
    </>
  );
}

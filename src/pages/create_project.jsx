import ChipsForm from "../components/molecule/ChipsForm";
import CardTitle from "../components/atoms/label/CardTitle";
import PageTitle from "../components/atoms/label/PageTitle";
import SectionTitle from "../components/atoms/label/SectionTitle";
import DefaultCardP32 from "../components/atoms/card/DefaultCardP32";
import ThumbnailMaker from "../components/organism/ThumbnailMaker";
import BorderBottom from "../components/atoms/label/BorderBottom";
import DatePickerComponent from "../components/organism/DatePicker";
import UseAutocomplete from "../components/molecule/DropDown";
import CreateProjectRole from "../components/molecule/CreateProjectRole";

export default function CreateProject() {
  const empty = () => {};
  const campus = [
    "장소 미정",
    "강동캠퍼스",
    "강서캠퍼스",
    "광진캠퍼스",
    "금천캠퍼스",
    "동작캠퍼스",
    "마포캠퍼스",
    "서대문캠퍼스",
    "용산캠퍼스",
    "종로캠퍼스",
    "중구캠퍼스",
  ];

  const days = [
    {
      item: "요일 미정",
      value: "undecided",
    },
    {
      item: "월요일",
      value: "monday",
    },
    {
      item: "화요일",
      value: "tuesday",
    },
    {
      item: "수요일",
      value: "wednesday",
    },
    {
      item: "목요일",
      value: "thursday",
    },
    {
      item: "금요일",
      value: "friday",
    },
    {
      item: "토요일",
      value: "saturday",
    },
    {
      item: "일요일",
      value: "sunday",
    },
  ];

  const skills = [
    {
      item: "Javascript",
      value: "Javascript",
    },
    {
      item: "Typescript",
      value: "Typescript",
    },
    {
      item: "Nextjs",
      value: "Nextjs",
    },
    {
      item: "Java",
      value: "Java",
    },
    {
      item: "Spring",
      value: "Spring",
    },
    {
      item: "Nodejs",
      value: "Nodejs",
    },
    {
      item: "Mongodb",
      value: "Mongodb",
    },
    {
      item: "Python",
      value: "Python",
    },
    {
      item: "Figma",
      value: "Figma",
    },
    {
      item: "Zeplin",
      value: "Zeplin",
    },
  ];

  return (
    <div className="my-0 mx-auto max-w-[1200px] px-5">
      <main>
        <PageTitle
          title1=""
          PointTitle1="프로젝트"
          title2=" 생성"
          PointTitle2=""
        ></PageTitle>
        <section className="mb-40">
          <SectionTitle
            title1="프로젝트 기본 정보를 입력해주세요"
            PointTitle1=""
            title2=""
            PointTitle2=""
          ></SectionTitle>
          <BorderBottom
            marginTop={"mt-4"}
            marginBottom={"mb-12"}
          ></BorderBottom>
          <div className="flex flex-col gap-12">
            <div className="flex flex-row gap-6">
              <div className="flex-1 flex flex-col">
                <CardTitle
                  title1="캠퍼스"
                  PointTitle1=""
                  title2=""
                  PointTitle2=""
                ></CardTitle>
                <UseAutocomplete
                  kind={"campus"}
                  onLifting={empty}
                  item={campus}
                  placeholder='캠퍼스를 선택해주세요'
                ></UseAutocomplete>
              </div>
              <div className="flex-1">
                <CardTitle
                  title1="진행기간"
                  PointTitle1=""
                  title2=""
                  PointTitle2=""
                ></CardTitle>
                <div>
                  <DatePickerComponent></DatePickerComponent>
                </div>
              </div>
            </div>
            <div>
              <CardTitle
                title1="작업요일"
                PointTitle1=""
                title2=""
                PointTitle2=""
              ></CardTitle>
              <ChipsForm text={days}></ChipsForm>
            </div>
            <div>
              <CardTitle
                title1="모집 기술"
                PointTitle1=""
                title2=""
                PointTitle2=""
              ></CardTitle>
              <ChipsForm text={skills}></ChipsForm>
            </div>
            <div>
              <CardTitle
                title1="나의 포지션"
                PointTitle1=""
                title2=""
                PointTitle2=""
              ></CardTitle>
              <DefaultCardP32>
                {/* 데이터 받아와야 함 */}프론트엔드 / 멘토
              </DefaultCardP32>
            </div>
            <CreateProjectRole></CreateProjectRole>
          </div>
        </section>
        <section className="mb-40">
          <SectionTitle
            title1="프로젝트 대표 이미지를 설정해주세요"
            PointTitle1=""
            title2=""
            PointTitle2=""
          ></SectionTitle>
          <BorderBottom
            marginTop={"mt-4"}
            marginBottom={"mb-12"}
          ></BorderBottom>
          <ThumbnailMaker></ThumbnailMaker>
        </section>
        <section className="mb-40">
          <SectionTitle
            title1="프로젝트에 대해 소개해주세요"
            PointTitle1=""
            title2=""
            PointTitle2=""
          ></SectionTitle>
          <BorderBottom
            marginTop={"mt-4"}
            marginBottom={"mb-12"}
          ></BorderBottom>
          <input
            type="text"
            placeholder="12글자 이내로 작성"
            maxLength="12"
            className="py-4 px-5 w-full max-w-[500px] rounded border-[1px] border-[--color-grayscale-200] focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none placeholder-[#9090A0] text-[14px]"
          />
        </section>
      </main>
    </div>
  );
}
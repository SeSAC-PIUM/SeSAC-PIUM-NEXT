interface PageTitleProps {
  title1: string;
  title2: string;
  PointTitle1: string;
  PointTitle2: string;
}

export default function PageTitle({
  title1,
  title2,
  PointTitle1,
  PointTitle2,
}: PageTitleProps) {
  return (
    <>
      <div className="font-bold text-[32px] m-auto border-b-2 pt-16 pb-10 text-center">
        <span className="text-[--color-grayscale-600] mr-[8px] ">{title1}</span>
        <span className="text-[--color-main-green] mr-[8px]">
          {PointTitle1}
        </span>
        <span className="text-[--color-grayscale-600] mr-[8px] ">{title2}</span>
        <span className="text-[--color-main-green] mr-[8px]">
          {PointTitle2}
        </span>
      </div>
    </>
  );
}

interface PageTitleProps {
  title1: string;
  title2: string;
  PointTitle1: string;
  PointTitle2: string;
  border: string;
}

export default function PageTitle({
  title1,
  title2,
  PointTitle1,
  PointTitle2,
  border,
}: PageTitleProps) {
  return (
    <>
      <div
        className={`font-bold text-[32px] m-auto ${border}  mt-16 mb-2 pb-10 text-center`}
      >
        <span className="text-[--color-grayscale-600] mr-2 ">{title1}</span>
        <span className="text-[--color-main-green] mr-2">{PointTitle1}</span>
        <span className="text-[--color-grayscale-600] mr-2 ">{title2}</span>
        <span className="text-[--color-main-green] mr-2">{PointTitle2}</span>
      </div>
    </>
  );
}

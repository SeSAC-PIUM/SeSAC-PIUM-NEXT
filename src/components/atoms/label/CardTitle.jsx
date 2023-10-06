export default function CardTitle({
  title1,
  title2,
  PointTitle1,
  PointTitle2,
}) {
  return (
    <>
      <p className="text-[16px] font-medium pb-4">
        <span className="text-[--color-grayscale-600]">{title1}</span>
        <span className="text-[--color-main-green]">
          {PointTitle1}
        </span>
        <span className="text-[--color-grayscale-600]">{title2}</span>
        <span className="text-[--color-main-green]">
          {PointTitle2}
        </span>
      </p>
    </>
  );
}

export default function SectionTitle({
  title1,
  title2,
  PointTitle1,
  PointTitle2,
}) {
  return (
    <>
      <p className="font-semibold text-[24px] pl-3 border-l-4 border-[--color-main-green] leading-none">
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

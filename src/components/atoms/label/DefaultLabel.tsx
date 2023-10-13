interface DefaultLabelProps {
  title: string;
  addClassName?: string;
}

export default function DefaultLabel({
  title,
  addClassName,
}: DefaultLabelProps) {
  return (
    <>
      <span className={`${addClassName} text-[--color-grayscale-600] mr-2 `}>
        {title}
      </span>
    </>
  );
}

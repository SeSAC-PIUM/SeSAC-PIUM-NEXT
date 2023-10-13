interface DescripstionLabelProps {
  title: string;
}

export default function DefaultLabel({ title }: DescripstionLabelProps) {
  return (
    <>
      <span className="text-[14px] text-[--color-grayscale-600] break-words">
        {title}
      </span>
    </>
  );
}

interface DefaultLabelProps {
  title: string;
}

export default function DefaultLabel({ title }: DefaultLabelProps) {
  return (
    <>
      <span className="text-[--color-grayscale-600] mr-2 ">{title}</span>
    </>
  );
}

interface WarningLabelProps {
  text: string | undefined;
  addClassName?: string;
}

export default function WarningLabel({
  text,
  addClassName,
}: WarningLabelProps) {
  return (
    <>
      <div className={`${addClassName} pl-8 text-[#FF6565] `}>{text}</div>
    </>
  );
}

interface WarningLabelProps {
  text: string | undefined;
}

export default function WarningLabel({ text }: WarningLabelProps) {
  return (
    <>
      <div className="pl-8 text-[#FF6565] ">{text}</div>
    </>
  );
}

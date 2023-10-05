interface WarningLabelProps {
  text: string;
}

export default function WarningLabel({ text }: WarningLabelProps) {
  return (
    <>
      <span className=" pl-8 pt-2 text-[#FF6565] ">{text}</span>
    </>
  );
}

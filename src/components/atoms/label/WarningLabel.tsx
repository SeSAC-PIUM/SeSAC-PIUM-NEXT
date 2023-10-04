interface WarningLabelProps {
  text: string;
}

export default function SignUpLabel({ text }: WarningLabelProps) {
  return (
    <>
      <span className=" px-8 pt-2  text-[#FF6565] mr-[8px]">{text}</span>
    </>
  );
}

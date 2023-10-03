interface SignUpLabelProps {
  title: string;
}

export default function SignUpLabel({ title }: SignUpLabelProps) {
  return (
    <>
      <span className=" py- pl- text-[#464656] mr-[8px]">{title}</span>
    </>
  );
}

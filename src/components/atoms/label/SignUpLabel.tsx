interface SignUpLabelProps {
  title: string;
}

export default function SignUpLabel({ title }: SignUpLabelProps) {
  return (
    <>
      <span className=" py-2 pl-8 text-[#464656] mr-[8px]">{title}</span>
    </>
  );
}

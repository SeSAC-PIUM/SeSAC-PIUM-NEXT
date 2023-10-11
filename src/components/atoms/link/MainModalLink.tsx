interface MainModalLinkProps {
  text1: any;
  text2: any;
  text3: any;
}

export default function MainModal({ text1, text2, text3 }: MainModalLinkProps) {
  return (
    <div className="flex justify-between">
      <div className="text-[14px] font-normal  text-[#626273]">{text1}</div>
      <div className="flex flex-col text-[12px] font-normal gap-[8px] text-[#626273] ">
        <div>{text2}</div>
        <div>{text3}</div>
      </div>
    </div>
  );
}

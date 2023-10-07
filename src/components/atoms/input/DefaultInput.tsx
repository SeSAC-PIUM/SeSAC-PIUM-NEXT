interface SignUpInputProps {
  placeholder?: string;
  children?: any;
}

export default function SignUpInput({
  placeholder,
  children,
}: SignUpInputProps) {
  return (
    <div className=" relative flex  items-center ">
      <input
        className="focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none  leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm flex-1"
        type="text"
        aria-label="Filter projects"
        placeholder={placeholder}
      />
      {children && children}
    </div>
  );
}

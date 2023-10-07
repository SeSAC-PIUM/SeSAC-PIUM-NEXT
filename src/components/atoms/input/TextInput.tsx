interface TextInputProps {
  placeholder?: string;
  children?: any;
}

export default function TextInput({ placeholder, children }: TextInputProps) {
  return (
    <div className=" relative flex  items-center ">
      <input
        className="focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none  leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded p-8 ring-1 ring-[#E9E9EE] "
        type="text"
        aria-label="Filter projects"
        placeholder={placeholder}
      />
      {children && children}
    </div>
  );
}

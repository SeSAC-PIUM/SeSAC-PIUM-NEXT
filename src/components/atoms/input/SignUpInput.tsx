interface SignUpInputProps {
  placeholder?: string;
}

export default function SignUpInput({ placeholder }: SignUpInputProps) {
  return (
    <>
      <input
        className="focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none w-full leading-8 text-slate-700 placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm "
        type="text"
        aria-label="Filter projects"
        placeholder={placeholder}
      />
    </>
  );
}

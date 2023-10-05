import { UseFormRegisterReturn } from "react-hook-form";

interface SignUpInputProps {
  register: UseFormRegisterReturn;
  placeholder?: string;
  type?: string;
}

export default function SignUpInput({
  register,
  placeholder,
  type = "text",
}: SignUpInputProps) {
  return (
    <>
      <input
        {...register}
        className="focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none  leading-8 text-slate-700 placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm "
        type={type}
        aria-label="Filter projects"
        placeholder={placeholder}
      />
    </>
  );
}

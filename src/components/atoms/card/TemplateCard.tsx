import { UseFormRegisterReturn } from "react-hook-form";

interface TemplateCardProps {
  children?: any;
}

export default function TemplateCard({ children }: TemplateCardProps) {
  return (
    <section className=" max-w-[800px] w-full m-auto ">
      {children && children}
    </section>
    // <div className="relative flex items-center flex-1">
    //   <input

    //     {...register}
    //     className="focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none  leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm w-full"
    //     type={type}

    //     aria-label="Filter projects"
    //     placeholder={placeholder}
    //   />
    // </div>
  );
}

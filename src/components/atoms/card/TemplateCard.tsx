import { UseFormRegisterReturn } from "react-hook-form";

interface TemplateCardProps {
  children?: any;
}

export default function TemplateCard({ children }: TemplateCardProps) {
  return (
    <section className=" max-w-[800px] w-full m-auto ">
      {children && children}
    </section>
  );
}

interface SectionCardProps {
  children?: any;
  addClassName?: string;
}

export default function SectionCard({
  children,
  addClassName,
}: SectionCardProps) {
  return (
    <section
      className={`${addClassName} border rounded-[20px] border-[#E9E9EE] p-8 w-full bg-white`}
    >
      {children && children}
    </section>
  );
}

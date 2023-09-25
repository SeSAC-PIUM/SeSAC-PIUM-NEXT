import Link from "next/link";

interface NavLinkProps {
  text: string;
  href: string;
}

export default function NavLink({ text, href }: NavLinkProps) {
  return (
    <>
      <li className="p-[8px] tracking-[-0.4px]">
        <Link
          href={href}
          className="text-[--color-grayscale-600] text-[16px] font-semibold"
        >
          {text}
        </Link>
      </li>
    </>
  );
}

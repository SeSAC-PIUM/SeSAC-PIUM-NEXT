interface GreenCardProps {
  text: string;
}

export default function GreenCard({
  text,
}: GreenCardProps): React.ReactElement {
  return (
    <span className=" rounded-full w-fit py-2 px-5 text-white bg-[--color-main-green]">
      {text}
    </span>
  );
}

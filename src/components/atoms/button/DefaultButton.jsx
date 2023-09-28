export default function DefaultButton({ text }) {
  console.log({ text });
  return (
    <div
      className={`border-[1px] border-[rgb(233,233,238)] rounded w-fit py-2 px-4`}
    >
      {text}
    </div>
  );
}

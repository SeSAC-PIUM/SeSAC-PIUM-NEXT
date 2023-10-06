export default function DefaultButton({ children }) {
  return (
    <button className="border-[1px] border-[--color-grayscale-200] rounded w-fit py-4 px-8 ">
      {children}
    </button>
  );
}

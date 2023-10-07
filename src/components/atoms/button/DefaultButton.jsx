export default function DefaultButton({ children }) {
  return (
    <button className="border-[1px] border-[--color-grayscale-200] rounded w-fit py-2 px-4 ">
      {children}
    </button>
  );
}

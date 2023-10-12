export default function SelectedButton({ children }) {
  return (
    <button className="bg-[--color-main-green] border-[1px] border-[#e9e9ee] text-white rounded w-full py-4 px-8">
      {children}
    </button>
  );
}

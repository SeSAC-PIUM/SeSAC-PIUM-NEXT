export default function DefaultCard({ children }) {
  return (
    <div className="border rounded-[4px] ring-1 ring-[#E9E9EE] p-[16px] mx-2 bg-white w-fit">
      {children}
    </div>
  );
}

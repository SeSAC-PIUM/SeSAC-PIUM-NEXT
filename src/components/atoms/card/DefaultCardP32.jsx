export default function DefaultCard({ children }) {
  return (
    <>
      <div className="border rounded border-[#E9E9EE] py-[12px] px-8 bg-white w-fit h-fit">
        {children && children}
      </div>
    </>
  );
}

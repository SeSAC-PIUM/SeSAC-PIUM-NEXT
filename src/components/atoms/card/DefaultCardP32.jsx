export default function DefaultCard({ children }) {
  return (
    <>
      <div className="border rounded border-[#E9E9EE] py-4 px-8 bg-white w-fit">
        {children && children}
      </div>
    </>
  );
}

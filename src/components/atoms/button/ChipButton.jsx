export default function ChipButton({
  val,
  item,
  key,
  check,
  onClick,
  width = "w-fit",
}) {
  return (
    <>
      <label
        className={`border-[1px] border-[#e9e9ee] rounded ${width} flex justify-center py-2 px-4 cursor-pointer ${
          check.indexOf(val) > -1 ? "bg-[#2da96e] text-[#fff]" : "bg-white"
        }`}
      >
        <input
          key={key}
          type="checkbox"
          name="skill"
          id={val}
          value={val}
          onChange={(e) => {
            onClick(e.target.checked, e.target.value);
          }}
          checked={check.indexOf(val) > -1 ? true : false}
        />
        {item}
      </label>
    </>
  );
}

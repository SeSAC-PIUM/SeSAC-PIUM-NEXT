export default function ChipButton({
  val,
  item,
  key,
  check,
  onClick,
  width = "w-fit",
  fontSize,
  all,
}) {
  return (
    <>
      <label
        className={`border-[1px] ${all} rounded ${width} flex justify-center py-2 px-4 cursor-pointer ${fontSize} ${
          check.indexOf(val) > -1
            ? "border-[--color-main-green] text-[--color-main-green]"
            : "border-[--color-grayscale-200]"
        }`}
      >
        <input
          // className="hidden"
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

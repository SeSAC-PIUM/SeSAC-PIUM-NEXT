export default function ChipButton(props) {
  // const [check, setCheck] = useState([]);

  const { val, item, key, check, onClick } = props;

  return (
    <>
      <label
        className={`border-[1px] border-[#e9e9ee] rounded w-fit py-2 px-4 cursor-pointer ${
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

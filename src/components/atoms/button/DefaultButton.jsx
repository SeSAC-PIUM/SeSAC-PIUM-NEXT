export default function DefaultButton(props) {
  const {item} = props
  return (
    <label className={'border-[1px] border-[#e9e9ee] bg-white rounded w-fit py-2 px-4 cursor-pointer'}>
      <input type="checkbox" className="hidden"/>
        {item}
    </label>

  );
}

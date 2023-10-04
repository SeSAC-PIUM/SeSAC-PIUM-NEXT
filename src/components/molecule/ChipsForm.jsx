import DefaultButton from "../atoms/button/DefaultButton";

export default function ChipsForm(props) {
  console.log(props)
  console.log(props.text)
  const items = props.text
  return (
    <div className="flex flex-wrap gap-4 p-4 border-[1px] border-[#e9e9ee] rounded bg-white w-fit">
      {items.map((data, index) => {
        return (<DefaultButton item={data.item} key={index}></DefaultButton>);
      })}
    </div>

  );
}

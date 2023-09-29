export default function SelectedButton(props) {
  // console.log(props, 'Qhd');
  const {item} = props
  return (
    <li
      className={`border-[1px] border-[green] rounded w-fit py-2 px-4`}
    >
      {item}
    </li>
  );
}

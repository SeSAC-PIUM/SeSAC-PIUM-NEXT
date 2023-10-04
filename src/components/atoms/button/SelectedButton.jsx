export default function SelectedButton(props) {
  const {item} = props
  return (
    <li
      className={`selected_button`}
    >
      {item}
    </li>
  );
}

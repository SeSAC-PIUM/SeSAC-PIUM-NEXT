export default function DefaultButton(props) {
  const {item} = props
  return (
    <li
      className={'default_button'}
    >
      {item}
    </li>
  );
}

export default function DefaultButton(props) {
  // console.log(props, 'Qhd');
  const {item} = props
  return (
    <li
      className={'default_button'}
    >
      {item}
    </li>
  );
}

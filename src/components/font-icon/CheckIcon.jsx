import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export function CheckIcon({check}) {
  console.log(check);
  return (
    <FontAwesomeIcon
      // check={check}
      icon={faCheck}
      className={`text-[12px] text-white w-3 h-3 text-center rounded-sm ml-2 border-[1px] border-[--color-main-green] ${
        check ? "bg-[--color-main-green]" : "bg-white"
      }`}
    />
  );
}

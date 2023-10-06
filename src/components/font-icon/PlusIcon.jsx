import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function FaPlus() {
  return (
    <FontAwesomeIcon icon={faPlus} className="rounded-full bg-[--color-main-green] text-white w-4 h-4 text-[50px] text-center leading-4 cursor-pointer" />
  );
}

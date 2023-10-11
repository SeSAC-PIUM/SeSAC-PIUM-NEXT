import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchIcon() {
  return (
    <button className="h-fit">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="text-[24px] pr-[10px]"
      />
    </button>
  );
}

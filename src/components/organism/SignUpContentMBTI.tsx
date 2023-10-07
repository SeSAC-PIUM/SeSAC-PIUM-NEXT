import React, { useState } from "react";

const MBTIForm: React.FC = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const mbtiOptions = ["I", "E", "S", "N", "F", "T", "P", "J"];

  const handleCheckboxChange = (option: string) => {
    // 만약 선택된 옵션이 이미 있는 경우, 선택 해제
    if (selected.includes(option)) {
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item !== option)
      );
    } else {
      // 선택되지 않은 경우, 선택 추가 (동일한 name 그룹 내에서 하나만 선택 가능)
      const sameGroupOption =
        option === "I"
          ? "E"
          : option === "E"
          ? "I"
          : option === "S"
          ? "N"
          : option === "N"
          ? "S"
          : option === "F"
          ? "T"
          : option === "T"
          ? "F"
          : option === "P"
          ? "J"
          : "P";
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item !== sameGroupOption).concat(option)
      );
    }
  };

  const handlePrivateButtonClick = () => {
    // 비공개 버튼을 클릭하면 모든 선택을 해제
    setSelected([]);
  };

  const handleSubmit = () => {
    // 모든 MBTI 옵션이 선택되었는지 확인
    if (selected.length !== 4) {
      alert("MBTI를 모두 채워주세요.");
    } else {
      // 다음 페이지로 이동 또는 필요한 작업 수행
      // 여기에서는 alert을 사용하여 확인합니다.
      alert("MBTI가 완료되었습니다!");
    }
  };

  return (
    <div>
      <h2>MBTI 선택</h2>
      <div>
        {mbtiOptions.map((option) => (
          <label key={option}>
            <input
              type="checkbox"
              name="mbti"
              value={option}
              checked={selected.includes(option)}
              onChange={() => handleCheckboxChange(option)}
            />
            {option}
          </label>
        ))}
      </div>
      <button onClick={handlePrivateButtonClick}> - 비공개 - </button>
      <button onClick={handleSubmit}> - - 다음 페이지로 - - </button>
    </div>
  );
};

export default MBTIForm;

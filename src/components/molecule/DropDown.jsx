export default function DropDown({}) {
  return (
    <fieldset>
      <input
        autocomplete="off"
        role="combobox"
        list=""
        id="input"
        name="browsers"
        placeholder="캠퍼스 선택"
        type="text"
        className="focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none  leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm w-full"
      />

      <datalist id="browsers" role="listbox">
        <option value="강동캠퍼스">강동캠퍼스</option>
        <option value="강서캠퍼스">강서캠퍼스</option>
        <option value="광진캠퍼스">광진캠퍼스</option>
        <option value="금천캠퍼스">금천캠퍼스</option>
        <option value="동작캠퍼스">동작캠퍼스</option>
        <option value="마포캠퍼스">마포캠퍼스</option>
        <option value="서대문캠퍼스">서대문캠퍼스</option>
        <option value="용산캠퍼스">용산캠퍼스</option>
        <option value="종로캠퍼스">종로캠퍼스</option>
        <option value="중구캠퍼스">중구캠퍼스</option>
      </datalist>
    </fieldset>
  );
}

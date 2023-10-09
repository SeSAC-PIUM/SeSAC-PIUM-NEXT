import { useState, forwardRef } from "react";
// import ReactDatePicker from "react-datepicker";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../Calender/calendar.module.scss";

export default function DatePickerComponent() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  // const [startDate, setStartDate] = useState(new Date());
  // const ExampleCustomInput = forwardRef(({ children, onClick }, ref) => (
  //   <button className="example-custom-input" onClick={onClick} ref={ref}>
  //     {children}
  //   </button>
  // ));

  // const [selectedDate, setSelectedDate] = useState();

  const YEARS = Array.from(
    { length: new Date().getYear() + 1 - 2000 },
    (_, i) => new Date().getYear() - i
  );
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return (
    <div className={styles.datePickerWrapper}>
      <DatePicker
        WrapperClassName={styles.datePicker}
        className="flex-1 focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm w-full"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        dateFormat="yyyy.MM.dd" // 날짜 형태
        // 요일이 Su Mo Tu가 아닌 S M T 형태로 나타냄
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        // showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        placeholderText={'시작 날짜'}
        // renderCustomHeader={({
        //   date,
        //   changeYear,
        //   decreaseMonth,
        //   increaseMonth,
        //   prevMonthButtonDisabled,
        //   nextMonthButtonDisabled,
        // }) => (
        //   <div className={styles.customHeaderContainer}>
        //     <div>
        //       <span className={styles.month}>{MONTHS[date.getMonth()]}</span>
        //       <select
        //         value={date.getYear()}
        //         className={styles.year}
        //         onChange={({ target: { value } }) => changeYear(+value)}
        //       >
        //         {YEARS.map((option) => (
        //           <option key={option} value={option}>
        //             {option}
        //           </option>
        //         ))}
        //       </select>
        //     </div>
        //     <div>
        //       <button
        //         type='button'
        //         onClick={decreaseMonth}
        //         className={styles.monthButton}
        //         disabled={prevMonthButtonDisabled}
        //       >
        //         {/* <LeftArrow fill='#ffffff' /> */}
        //       </button>
        //       <button
        //         type='button'
        //         onClick={increaseMonth}
        //         className={styles.monthButton}
        //         disabled={nextMonthButtonDisabled}
        //       >
        //         {/* <RightArrow fill='#ffffff' /> */}
        //       </button>
        //     </div>
        //   </div>
        // )}
      />
      <DatePicker
        WrapperClassName={styles.datePicker}
        className="flex-1 focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm w-full"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        dateFormat="yyyy.MM.dd" // 날짜 형태
        // 요일이 Su Mo Tu가 아닌 S M T 형태로 나타냄
        formatWeekDay={(nameOfDay) => nameOfDay.substring(0, 1)}
        // showYearDropdown
        scrollableYearDropdown
        yearDropdownItemNumber={100}
        placeholderText={'마감 날짜'}
        // renderCustomHeader={({
        //   date,
        //   changeYear,
        //   decreaseMonth,
        //   increaseMonth,
        //   prevMonthButtonDisabled,
        //   nextMonthButtonDisabled,
        // }) => (
        //   <div className={styles.customHeaderContainer}>
        //     <div>
        //       <span className={styles.month}>{MONTHS[date.getMonth()]}</span>
        //       <select
        //         value={date.getYear()}
        //         className={styles.year}
        //         onChange={({ target: { value } }) => changeYear(+value)}
        //       >
        //         {YEARS.map((option) => (
        //           <option key={option} value={option}>
        //             {option}
        //           </option>
        //         ))}
        //       </select>
        //     </div>
        //     <div>
        //       <button
        //         type='button'
        //         onClick={decreaseMonth}
        //         className={styles.monthButton}
        //         disabled={prevMonthButtonDisabled}
        //       >
        //         {/* <LeftArrow fill='#ffffff' /> */}
        //       </button>
        //       <button
        //         type='button'
        //         onClick={increaseMonth}
        //         className={styles.monthButton}
        //         disabled={nextMonthButtonDisabled}
        //       >
        //         {/* <RightArrow fill='#ffffff' /> */}
        //       </button>
        //     </div>
        //   </div>
        // )}
      />
    </div>

    // 이걸로 결정
    // <>
    //   <DatePicker
    //     WrapperClassName={styles.datePicker}
    //     className="flex-1 focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm w-full"
    //     selected={startDate}
    //     onChange={(date) => setStartDate(date)}
    //     selectsStart
    //     startDate={startDate}
    //     endDate={endDate}
    //   />
    //   <DatePicker
    //     WrapperClassName={styles.datePicker}
    //     className="flex-1 focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm w-full"
    //     selected={endDate}
    //     onChange={(date) => setEndDate(date)}
    //     selectsEnd
    //     startDate={startDate}
    //     endDate={endDate}
    //     minDate={startDate}
    //   />
    // </>

    // <div className={styles.datePickerWrapper}>
    // <DatePicker
    //   WrapperClassName={styles.datePicker}
    //   className="flex-1 focus:ring-2 focus:ring-[#2DA96E] focus:outline-none appearance-none leading-8 text-slate-700 text-[14px] placeholder-[#9090A0] rounded py-2 px-8 ring-1 ring-[#E9E9EE] shadow-sm w-full"
    //   minDate={new Date('2000-01-01')} // minDate 이전 날짜 선택 불가
    //   maxDate={new Date()} // maxDate 이후 날짜 선택 불가
    //   dateFormat='yyyy.MM.dd' // 날짜 형태
    //   shouldCloseOnSelect // 날짜를 선택하면 datepicker가 자동으로 닫힘
    //   selected={selectedDate}
    //   onChange={(date) => setSelectedDate(date)}
    //   placeholderText={children}
    //   popperClassName={styles.displayblock}
    //   // customInput={<ExampleCustomInput></ExampleCustomInput>}

    // />
    // </div>
  );
}

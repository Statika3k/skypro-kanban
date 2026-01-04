import { useState } from "react";
import {
  CalendarWrapper,
  CalendarTitle,
  CalendarBlock,
  CalendarNav,
  CalendarMonth,
  NavActions,
  NavAction,
  CalendarContent,
  DaysNames,
  DayName,
  Cells,
  Cell,
  CalendarPeriod,
  PeriodText,
} from "./Calendar.styled";

function Calendar({ onDateSelect, initialDate }) {
  const [currentDate, setCurrentDate] = useState(initialDate || new Date());
  const [selectedDate, setSelectedDate] = useState(initialDate || new Date());
  const [hoveredDate, setHoveredDate] = useState(null);

  // Генерируем массив дней для календаря
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);

    const daysInMonth = lastDay.getDate();
    const firstDayOfWeek = (firstDay.getDay() + 6) % 7; // Понедельник = 0

    const days = [];

    // Дни предыдущего месяца
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push({
        day: prevMonthLastDay - firstDayOfWeek + i + 1,
        month: month - 1,
        year,
        isCurrentMonth: false,
      });
    }

    // Дни текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({
        day: i,
        month,
        year,
        isCurrentMonth: true,
        date: new Date(year, month, i),
      });
    }

    // Дни следующего месяца
    const totalCells = 42; // 6 недель × 7 дней
    const remainingCells = totalCells - days.length;
    for (let i = 1; i <= remainingCells; i++) {
      days.push({
        day: i,
        month: month + 1,
        year,
        isCurrentMonth: false,
      });
    }

    return days;
  };

  // Форматирование месяца и года
  const formatMonthYear = (date) => {
    const months = [
      "Январь",
      "Февраль",
      "Март",
      "Апрель",
      "Май",
      "Июнь",
      "Июль",
      "Август",
      "Сентябрь",
      "Октябрь",
      "Ноябрь",
      "Декабрь",
    ];
    return `${months[date.getMonth()]} ${date.getFullYear()}`;
  };

  // Навигация по месяцам
  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  // Клик по дате
  const handleDateClick = (dayObj) => {
    if (dayObj.date) {
      setSelectedDate(dayObj.date);
      if (onDateSelect) {
        onDateSelect(dayObj.date);
      }
    }
  };

  // Ховер по дате
  const handleDateHover = (dayObj) => {
    if (dayObj.date) {
      setHoveredDate(dayObj.date);
    }
  };

  // Сброс ховера
  const handleDateLeave = () => {
    setHoveredDate(null);
  };

  // Проверка - сегодняшний день
  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Проверка - выбранная дата
  const isSelected = (date) => {
    if (!date || !selectedDate) return false;
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    );
  };

  // Проверка - дата под ховером
  const isHovered = (date) => {
    if (!date || !hoveredDate) return false;
    return (
      date.getDate() === hoveredDate.getDate() &&
      date.getMonth() === hoveredDate.getMonth() &&
      date.getFullYear() === hoveredDate.getFullYear()
    );
  };

  // Проверка - выходной
  const isWeekend = (date) => {
    if (!date) return false;
    const day = date.getDay();
    return day === 0 || day === 6; // 0 = воскресенье, 6 = суббота
  };

  const days = generateCalendarDays();
  return (
    <CalendarWrapper>
      <CalendarTitle>Даты</CalendarTitle>
      <CalendarBlock>
        <CalendarNav>
          <CalendarMonth>{formatMonthYear(currentDate)}</CalendarMonth>
          <NavActions>
            <NavAction onClick={handlePrevMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </NavAction>
            <NavAction onClick={handleNextMonth}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="6"
                height="11"
                viewBox="0 0 6 11"
              >
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </NavAction>
          </NavActions>
        </CalendarNav>

        <CalendarContent>
          <DaysNames>
            <DayName>пн</DayName>
            <DayName>вт</DayName>
            <DayName>ср</DayName>
            <DayName>чт</DayName>
            <DayName>пт</DayName>
            <DayName className="-weekend-">сб</DayName>
            <DayName className="-weekend-">вс</DayName>
          </DaysNames>

          <Cells>
            {days.map((dayObj, index) => {
              const today = dayObj.date && isToday(dayObj.date);
              const selected = dayObj.date && isSelected(dayObj.date);
              const hovered = dayObj.date && isHovered(dayObj.date);
              const weekend = dayObj.date && isWeekend(dayObj.date);

              return (
                <Cell
                  key={index}
                  className={`
                    ${dayObj.isCurrentMonth ? "_cell-day" : "_other-month"}
                    ${weekend ? "_weekend" : ""}
                    ${today ? "_current" : ""}
                    ${selected ? "_selected" : ""}
                    ${hovered ? "_hovered" : ""}
                  `}
                  onClick={() => handleDateClick(dayObj)}
                  onMouseEnter={() => handleDateHover(dayObj)}
                  onMouseLeave={handleDateLeave}
                  title={
                    dayObj.date ? dayObj.date.toLocaleDateString("ru-RU") : ""
                  }
                >
                  {dayObj.day}
                </Cell>
              );
            })}
          </Cells>
        </CalendarContent>

        <CalendarPeriod>
          <PeriodText>
            Выберите срок исполнения{" "}
            <span className="date-control">
              {selectedDate.toLocaleDateString("ru-RU")}
            </span>
          </PeriodText>
        </CalendarPeriod>
      </CalendarBlock>
    </CalendarWrapper>
  );
}

export default Calendar;

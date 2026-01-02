import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;
`;

export const CalendarTitle = styled.p`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;

  &.-weekend- {
    color: #94a6be;
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

export const Cell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;

  /* Дни других месяцев */
  &._other-month {
    opacity: 0;
    pointer-events: none;
  }

  /* Дни текущего месяца */
  &._cell-day {
    color: #94a6be;
    
    &:hover {
      color: #94a6be;
    }
  }

  /* Выходные дни */
  &._weekend {
    color: #94a6be;
  }

  /* Сегодняшний день - жирный */
  &._current {
    font-weight: bold;
    color: #000000;
  }

  /* Ховер - светло-серый кружок */
  &._hovered::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #F0F0F0; /* светло-серый */
    z-index: -1;
  }

  /* Выбранная дата - серый кружок */
  &._selected::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background-color: #EAEEF6; /* серый */
    z-index: -1;
  }

  /* Приоритет выбранной даты над ховером */
  &._selected._hovered::before {
    background-color: #EAEEF6; /* оставляем серый при клике */
  }

  /* Цвет текста на выделенном фоне */
  &._selected, &._hovered, &._selected._hovered {
    color: #000000;
  }
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const PeriodText = styled.p`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  span {
    color: #000000;
  }
`;

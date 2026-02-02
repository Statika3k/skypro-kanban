import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 182px;
  margin-bottom: 20px;

  @media (max-width: 376px) {
    width: 100%;
    margin-top: 20px;
  }
`;

export const CalendarTitle = styled.p`
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
  padding: 0 7px;
  transition: color 0.3s ease;
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

  @media (max-width: 376px) {
    margin-bottom: 14px;
  }
`;

export const DaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;

  @media (max-width: 376px) {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
    width: 100%;
    padding: 0 9px;
  }
`;

export const DayName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
  width: calc(100% / 7);
  text-align: center;
  display: flex;
  justify-content: space-around;

  &.-weekend- {
    color: #94a6be;
  }

  @media (max-width: 376px) {
    font-size: 12px;
    width: 30px;
    justify-content: space-between;
  }
`;

export const Cells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 376px) {
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    gap: 7px;
    padding: 0;
  }
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
  position: relative;
  flex: 0 0 auto;
  box-sizing: border-box;

  @media (max-width: 376px) {
    width: 30px;
    height: 30px;
    font-size: 12px;
    margin: 2px;
  }

  /* Дни других месяцев */
  &._other-month {
    opacity: 0;
  }

  /* Дни текущего месяца */
  &._cell-day:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }

  &._active-day {
    background-color: #94a6be;
    color: #ffffff;
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

  /* Цвет текста на выделенном фоне */
  &._selected,
  &._hovered,
  &._selected._hovered {
    color: #ffffff;
    background-color: #94a6be;
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
    color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, *:before, *:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

a, a:visited {
  text-decoration: none;
  cursor: pointer;
}

button, ._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

html, body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: #000000;
}

.wrapper {
  max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
}

/* Hover-эффекты */
._hover03:hover {
  background-color: #33399b;
  color: #FFFFFF;
}
._hover03:hover a {
  color: #FFFFFF;
}

._hover01:hover {
    background-color: #33399b;
  }

/* Цветовые классы */
._orange {
  background-color: #FFE4C2;
  color: #FF6D00;
}

._green {
  background-color: #B4FDD1;
  color: #06B16E;
}

._purple {
  background-color: #E9D4FF;
  color: #9A48F1;
}

._gray {
  background: #94A6BE;
  color: #FFFFFF;
}

._active-category {
  opacity: 1 !important;
}

.pop-wrap {
  position: relative;
  top: 0;
  left: 0;
}

._hide, ._dark {
  display: none;
}

.card__date svg {
  width: 13px;
}

/* Адаптив */
@media screen and (max-width: 1200px) {
  .cards {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
  .cards__card {
    width: 220px;
    height: 130px;
    background-color: #FFFFFF;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: stretch;
    padding: 15px 13px 19px;
  }
}

@media screen and (max-width: 660px) {   
  .calendar {
    max-width: 340px;
    width: 100%;
  }
  .calendar__ttl, .calendar__nav, .calendar__period {
    padding: 0;
  }
  .calendar .date-create {
    display: none;
    margin-bottom: 7px;
  }
  .calendar__p {
    font-size: 14px;
  }
  .calendar__day-name {
    font-size: 14px;
  }
  .calendar__cells {
    width: 344px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
  .calendar__cell {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }  
}
@media screen and (max-width: 495px) {
  .container {
    width: 100%;
    padding: 0 16px;
  } 
  
  .pop-new-card__calendar {
    width: 100%;
  }  
  
  .pop-browse__calendar {
    width: 100%;
  }
  
  .pop-browse__btn-browse .btn-group, .pop-browse__btn-edit .btn-group {
    width: 100%;
  }
  .pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
    margin-right: 0px;
  }
 
}
@media only screen and (max-width: 375px) {
  .pop-exit__block {
    padding: 50px 20px;
  }
  .pop-exit__exit-yes {
    width: 100%;
    height: 40px;
    margin-right: 0;
    margin-bottom: 10px;
  }
  .pop-exit__exit-no {
    width: 100%;
    height: 40px;
  }
  .pop-exit__form-group {
    display: block;
  }
}
`;

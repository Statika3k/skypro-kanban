import Column from "../Column/Column";
import { cardList } from "../../data";
import { useEffect, useState } from "react";
import {
  MainWrapper,
  Container,
  MainBlock,
  SMainContent,
  Loading,
} from "./MainContent.styled";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";

function MainContent() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  // Имитация загрузки
  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const columnTitles = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <MainWrapper>
      <Header />
      <Container>
        <MainBlock>
          {loading ? (
            <Loading>Данные загружаются...</Loading>
          ) : (
            <SMainContent>
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  cards={cards.filter((card) => card.status === title)}                  
                />
              ))}
            </SMainContent>
          )}
        </MainBlock>        
      </Container>      
      <Outlet />
    </MainWrapper>
  );
}

export default MainContent;

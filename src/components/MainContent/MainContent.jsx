import Column from "../Column/Column";
import { cardList } from "../../data";
import { useEffect, useState } from "react";
import {
  MainWrapper,
  Container,
  MainBlock,
  SMainContent,
  Loading,
} from './MainContent.styled';

function MainContent() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  // Имитация загрузки
  useEffect(() => {
    const timer = setTimeout(() => {
      setCards(cardList);
      setLoading(false);
    }, 2000);
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
    </MainWrapper>
  );
}

export default MainContent;

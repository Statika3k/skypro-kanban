import Column from "../Column/Column";
import { useCallback, useEffect, useState } from "react";
import {
  MainWrapper,
  Container,
  MainBlock,
  SMainContent,
  Loading,
} from "./MainContent.styled";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { fetchCards } from "../../services/api";

function MainContent() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");

  const getCards = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchCards({
        token: "bgc0b8awbwas6g5g5k5o5s5w606g37w3cc3bo3b83k39s3co3c83c03ck",
      });
      if (data) setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  // Имитация загрузки
  useEffect(() => {
    getCards();
  }, [getCards]);

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
      <Container error={error} cards={cards} loading={loading}>
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

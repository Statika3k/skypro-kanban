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
import { fetchTasks } from "../../services/api";
import { getToken } from "../../services/auth";

function MainContent() {
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  const getCards = useCallback(async () => {
    try {
      setLoading(true);
      const token = getToken(); // Получаем токен из localStorage

      if (!token) {
        console.error("Токен не найден");
        return;
      }

      const data = await fetchTasks({ token });
      if (data) setCards(data);
    } catch (err) {
      console.error("Ошибка загрузки задач:", err);
    } finally {
      setLoading(false);
    }
  }, []);

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
                  cards={cards
                    .filter((card) => card.status === title)
                    .map((card) => ({
                      id: card._id,
                      theme: card.topic,
                      title: card.title,
                      date: new Date(card.date).toLocaleDateString("ru-RU"),
                    }))}
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

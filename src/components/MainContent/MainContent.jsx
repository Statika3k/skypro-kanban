import Column from "../Column/Column";
import { useContext } from "react";
import {
  MainWrapper,
  Container,
  MainBlock,
  SMainContent,
  Loading,
} from "./MainContent.styled";
import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import { TaskContext } from "../../context/TaskContext";

function MainContent() {
  const { tasks, loading, error } = useContext(TaskContext);

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
          ) : error ? (
            <Loading style={{ color: "red" }}>Ошибка: {error}</Loading>
          ) : (
            <SMainContent>
              {columnTitles.map((title) => (
                <Column
                  key={title}
                  title={title}
                  cards={tasks
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

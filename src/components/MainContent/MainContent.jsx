import Column from "../Column/Column";
import { cardList } from "../../data";
import { useEffect, useState } from "react";

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
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {loading ? (
              <div className="loading">Данные загружаются...</div>
            ) : (
              <>
                {columnTitles.map(title => (
                  <Column
                    key={title}
                    title={title}
                    cards={cards.filter(card => card.status === title)}
                  />
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;

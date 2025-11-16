import Column from "../Column/Column";
import Card from "../Card/Card";
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

  const groupsCards = {
    "Без статуса": cards.filter((card) => card.status === "Без статуса"),
    "Нужно сделать": cards.filter((card) => card.status === "Нужно сделать"),
    "В работе": cards.filter((card) => card.status === "В работе"),
    Тестирование: cards.filter((card) => card.status === "Тестирование"),
    Готово: cards.filter((card) => card.status === "Готово"),
  };

  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {loading ? (
              <div className="loading">Данные загружаются...</div>
            ) : (
              <>
                <Column title="Без статуса">
                  {groupsCards["Без статуса"].map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      theme={card.theme}
                      title={card.title}
                      date={card.date}
                    />
                  ))}
                </Column>

                <Column title="Нужно сделать">
                  {groupsCards["Нужно сделать"].map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      theme={card.theme}
                      title={card.title}
                      date={card.date}
                    />
                  ))}
                </Column>

                <Column title="В работе">
                  {groupsCards["В работе"].map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      theme={card.theme}
                      title={card.title}
                      date={card.date}
                    />
                  ))}
                </Column>

                <Column title="Тестирование">
                  {groupsCards["Тестирование"].map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      theme={card.theme}
                      title={card.title}
                      date={card.date}
                    />
                  ))}
                </Column>

                <Column title="Готово">
                  {groupsCards["Готово"].map((card) => (
                    <Card
                      key={card.id}
                      id={card.id}
                      theme={card.theme}
                      title={card.title}
                      date={card.date}
                    />
                  ))}
                </Column>
              </>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;

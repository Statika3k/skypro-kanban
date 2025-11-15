import Column from "../Column/Column";
import Card from "../Card/Card";

function MainContent() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса">
              <Card color={"_orange"} title={"Web Design"}></Card>
              <Card color={"_green"} title={"Research"}></Card>
              <Card color={"_orange"} title={"Web Design"}></Card>
              <Card color={"_purple"} title={"Copywriting"}></Card>
              <Card color={"_orange"} title={"Web Design"}></Card>
            </Column>

            <Column title="Нужно сделать">
              <Card color={"_green"} title={"Research"}></Card>
            </Column>

            <Column title="В работе">
              <Card color={"_green"} title={"Research"}></Card>
              <Card color={"_purple"} title={"Copywriting"}></Card>
              <Card color={"_orange"} title={"Web Design"}></Card>
            </Column>

            <Column title="Тестирование">
              <Card color={"_green"} title={"Research"}></Card>
            </Column>

            <Column title="Готово">
              <Card color={"_green"} title={"Research"}></Card>
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;

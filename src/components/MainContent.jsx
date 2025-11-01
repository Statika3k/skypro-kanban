import Column from "./Column";
import WebDesign from "./Cards/WebDesign";
import Research from "./Cards/Research";
import Copywriting from "./Cards/Copywriting";

function MainContent() {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            <Column title="Без статуса">
              <WebDesign />
              <Research />
              <WebDesign />
              <Copywriting />
              <WebDesign />
            </Column>

            <Column title="Нужно сделать">
              <Research />
            </Column>

            <Column title="В работе">
              <Research />
              <Copywriting />
              <WebDesign />
            </Column>

            <Column title="Тестирование">
              <Research />
            </Column>

            <Column title="Готово">
              <Research />
            </Column>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainContent;

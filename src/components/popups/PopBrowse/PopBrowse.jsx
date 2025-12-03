import { useNavigate, useParams } from "react-router-dom";
import Calendar from "../../Calendar/Calendar";
import {
  BtnGroup,
  CloseButton,
  EditButton,
  FormBrowseArea,
  PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseForm,
  PopBrowseTitle,
  PopBrowseTopBlock,
  PopBrowseWrap,
  StyledPopBrowse,
  Status,
  StatusTheme,
  StatusThemes,
  StatusTitle,
  PopBrowseFormBlock,
  BtnBrowse,
  Label,
} from "./PopBrowse.styled";

function PopBrowse({ taskId }) {
  const params = useParams();
  const id = taskId || params.id;

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <StyledPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>
                {id ? `Задача №${id}` : "Новая задача"}{" "}
              </PopBrowseTitle>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </PopBrowseTopBlock>

            <Status>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                <StatusTheme className="_hide">
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme className="_gray">
                  <p className="_gray">Нужно сделать</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme className="_hide">
                  <p>Готово</p>
                </StatusTheme>
              </StatusThemes>
            </Status>

            <PopBrowseWrap>
              <PopBrowseForm id="formBrowseCard" action="#">
                <PopBrowseFormBlock>
                  <Label htmlFor="textArea01">Описание задачи</Label>
                  <FormBrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></FormBrowseArea>
                </PopBrowseFormBlock>
              </PopBrowseForm>

              <Calendar />
            </PopBrowseWrap>

            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>

            <BtnBrowse>
              <BtnGroup>
                <EditButton className="_btn-bor _hover03" onClick={handleClick}>
                  Редактировать задачу
                </EditButton>
                <EditButton className="_btn-bor _hover03" onClick={handleClick}>
                  Удалить задачу
                </EditButton>
              </BtnGroup>
              <CloseButton className="_btn-bg _hover01" onClick={handleClick}>
                Закрыть
              </CloseButton>
            </BtnBrowse>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}

export default PopBrowse;

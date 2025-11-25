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

function PopBrowse() {
  return (
    <StyledPopBrowse id="popBrowse">
      <PopBrowseContainer>
        <PopBrowseBlock>
          <PopBrowseContent>
            <PopBrowseTopBlock>
              <PopBrowseTitle>Название задачи</PopBrowseTitle>
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
                <EditButton className="_btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </EditButton>
                <EditButton className="_btn-bor _hover03">
                  <a href="#">Удалить задачу</a>
                </EditButton>
              </BtnGroup>
              <CloseButton className="_btn-bg _hover01">
                <a href="#">Закрыть</a>
              </CloseButton>
            </BtnBrowse>

            <div className="pop-browse__btn-edit _hide">
              <BtnGroup>
                <CloseButton className="_btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </CloseButton>
                <EditButton className="_btn-bor _hover03">
                  <a href="#">Отменить</a>
                </EditButton>
                <EditButton className="_btn-bor _hover03" id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </EditButton>
              </BtnGroup>
              <CloseButton className="_btn-bg _hover01">
                <a href="#">Закрыть</a>
              </CloseButton>
            </div>
          </PopBrowseContent>
        </PopBrowseBlock>
      </PopBrowseContainer>
    </StyledPopBrowse>
  );
}

export default PopBrowse;

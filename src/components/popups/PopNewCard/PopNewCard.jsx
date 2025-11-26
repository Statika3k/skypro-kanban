import Calendar from "../../Calendar/Calendar";
import {
  CategoriesTheme,
  CategoriesThemes,
  FormInput,
  FormLabel,
  FormNewArea,
  FormNewBlock,
  FormNewCreateButton,
  PopNewCardBlock,
  PopNewCardCategories,
  PopNewCardCategoriesText,
  PopNewCardCloseButton,
  PopNewCardContainer,
  PopNewCardContent,
  PopNewCardForm,
  PopNewCardTitle,
  PopNewCardWrap,
  StyledPopNewCard,
} from "./PopNewCard.styled";

function PopNewCard() {
  return (
    <StyledPopNewCard id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardCloseButton href="#" className="pop-new-card__close">
              &#10006;
            </PopNewCardCloseButton>

            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <FormLabel htmlFor="formTitle">Название задачи</FormLabel>
                  <FormInput
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </FormNewBlock>

                <FormNewBlock>
                  <FormLabel htmlFor="textArea">Описание задачи</FormLabel>
                  <FormNewArea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar />
            </PopNewCardWrap>

            <PopNewCardCategories>
              <PopNewCardCategoriesText>Категория</PopNewCardCategoriesText>
              <CategoriesThemes>
                <CategoriesTheme className="_orange _active-category">
                  <p className="_orange">Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme className="_green">
                  <p className="_green">Research</p>
                </CategoriesTheme>
                <CategoriesTheme className="_purple">
                  <p className="_purple">Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>

            <FormNewCreateButton className="_hover01" id="btnCreate">
              Создать задачу
            </FormNewCreateButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </StyledPopNewCard>
  );
}

export default PopNewCard;

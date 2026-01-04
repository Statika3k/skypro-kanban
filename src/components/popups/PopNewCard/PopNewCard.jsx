import { useNavigate } from "react-router-dom";
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
import { useContext, useState } from "react";
import { ErrorMessage } from "../../../styles/GlobalStyles";
import { TaskContext } from "../../../context/TaskContext";

function PopNewCard() {
  const navigate = useNavigate();
  const { addTask, loading: taskLoading } = useContext(TaskContext);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Состояние для формы
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    topic: "Research",
    status: "Без статуса",
    date: new Date().toISOString(),
  });

  const handleClose = () => {
    navigate("/");
  };
  // Обработчик изменения полей формы
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  // Обработчик выбора темы
  const handleTopicSelect = (topic) => {
    setFormData((prev) => ({ ...prev, topic }));
  };

  // Обработчик выбора даты из календаря
  const handleDateSelect = (date) => {
    setFormData((prev) => ({ ...prev, date: date.toISOString() }));
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Валидация
    if (!formData.title.trim()) {
      setError("Введите название задачи");
      return;
    }

    setIsSubmitting(true);
    setError("");

    try {
      await addTask(formData);
      navigate("/", { replace: true });
    } catch (error) {
      setError(error.message || "Не удалось создать задачу");
      console.error("Ошибка создания задачи:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const isLoading = taskLoading || isSubmitting;

  return (
    <StyledPopNewCard id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardBlock>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardCloseButton
              onClick={handleClose}
              className="pop-new-card__close"
            >
              &#10006;
            </PopNewCardCloseButton>

            <PopNewCardWrap>
              <PopNewCardForm id="formNewCard" action="#">
                <FormNewBlock>
                  <FormLabel htmlFor="formTitle">Название задачи</FormLabel>
                  <FormInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    value={formData.title}
                    onChange={handleInputChange}
                    disabled={isLoading}
                    autoFocus
                  />
                </FormNewBlock>

                <FormNewBlock>
                  <FormLabel htmlFor="textArea">Описание задачи</FormLabel>
                  <FormNewArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={formData.description}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  ></FormNewArea>
                </FormNewBlock>
              </PopNewCardForm>
              <Calendar onDateSelect={handleDateSelect} />
            </PopNewCardWrap>

            <PopNewCardCategories>
              <PopNewCardCategoriesText>Категория</PopNewCardCategoriesText>
              <CategoriesThemes>
                <CategoriesTheme
                  className={
                    formData.topic === "Web Design"
                      ? "_orange _active-category"
                      : "_orange"
                  }
                  onClick={() => handleTopicSelect("Web Design")}
                >
                  <p className="_orange">Web Design</p>
                </CategoriesTheme>
                <CategoriesTheme
                  className={
                    formData.topic === "Research"
                      ? "_green _active-category"
                      : "_green"
                  }
                  onClick={() => handleTopicSelect("Research")}
                >
                  <p className="_green">Research</p>
                </CategoriesTheme>
                <CategoriesTheme
                  className={
                    formData.topic === "Copywriting"
                      ? "_purple _active-category"
                      : "_purple"
                  }
                  onClick={() => handleTopicSelect("Copywriting")}
                >
                  <p className="_purple">Copywriting</p>
                </CategoriesTheme>
              </CategoriesThemes>
            </PopNewCardCategories>

            {error && <ErrorMessage>{error}</ErrorMessage>}

            <FormNewCreateButton
              className="_hover01"
              id="btnCreate"
              onClick={handleSubmit}
              disabled={isLoading}
            >
              {isLoading ? "Создание..." : "Создать задачу"}
            </FormNewCreateButton>
          </PopNewCardContent>
        </PopNewCardBlock>
      </PopNewCardContainer>
    </StyledPopNewCard>
  );
}

export default PopNewCard;

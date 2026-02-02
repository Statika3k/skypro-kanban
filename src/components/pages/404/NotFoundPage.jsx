import {
  NotFoundContainer,
  NotFoundLink,
  NotFoundText,
} from "./NotFoundPage.styled";

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <h1>404</h1>
      <NotFoundText>Страница не найдена</NotFoundText>
      <NotFoundLink to="/">← На главную</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFoundPage;

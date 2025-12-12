import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  AuthFormBlock,
  AuthFormBtnEnter,
  AuthFormConteiner,
  AuthFormGroup,
  AuthFormHeader,
  AuthFormInput,
  AuthFormLogin,
  AuthFormSignIn,
} from "./AuthForm.styled";
import { setToken, signIn, signUp } from "../../services/auth";
import { ErrorMessage } from "../../styles/GlobalStyles";

export const AuthForm = ({ isSignUp = false, setIsAuth }) => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError("");
  };

  const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  try {
    let result;

    if (isSignUp) {
      result = await signUp({
        name: formData.name,
        login: formData.login,
        password: formData.password,
      });
    } else {
      result = await signIn({
        login: formData.login,
        password: formData.password,
      });
    }

    console.log("API RESPONSE:", result);

    // возвращает токен в корне объекта!
    if (result.token) {
      // Сохраняем токен
      setToken(result.token);

      // Сохраняем информацию о пользователе
      const userInfo = {
        id: result._id,
        name: result.name,
        email: result.login,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));

      // Устанавливаем авторизацию
      setIsAuth(true);
      localStorage.setItem("isAuth", "true");

      // Переходим на главную
      navigate("/", { replace: true });
    } else {
      throw new Error("Токен не найден в ответе сервера");
    }
  } catch (error) {
    setError(error.message || "Произошла ошибка");
    console.error("Auth error details:", error);
  } finally {
    setIsLoading(false);
  }
};

  return (
    <AuthFormConteiner>
      <AuthFormSignIn>
        <AuthFormBlock>
          <AuthFormHeader>
            <h2>{isSignUp ? "Регистрация" : "Вход"}</h2>
          </AuthFormHeader>
          <AuthFormLogin onSubmit={handleSubmit}>
            {isSignUp && (
              <AuthFormInput
                type="text"
                name="name"
                placeholder="Имя"
                value={formData.name}
                onChange={handleChange}
                required
                disabled={isLoading}
              />
            )}
            <AuthFormInput
              type="email"
              name="login"
              placeholder="Эл. почта"
              value={formData.login}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            <AuthFormInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <AuthFormBtnEnter type="submit" disabled={isLoading}>
              <p>
                {isLoading
                  ? "Загрузка..."
                  : isSignUp
                  ? "Зарегистрироваться"
                  : "Войти"}
              </p>
            </AuthFormBtnEnter>
            <AuthFormGroup>
              <p>
                {isSignUp ? "Уже есть аккаунт? " : "Нужно зарегистрироваться? "}
              </p>
              {isSignUp ? (
                <Link to="/sign-in">Войдите здесь</Link>
              ) : (
                <Link to="/sign-up">Регистрируйтесь здесь</Link>
              )}
            </AuthFormGroup>
          </AuthFormLogin>
        </AuthFormBlock>
      </AuthFormSignIn>
    </AuthFormConteiner>
  );
};

export default AuthForm;

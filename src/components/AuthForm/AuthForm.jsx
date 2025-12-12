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
import { signIn, signUp } from "../../services/auth";
import { ErrorMessage } from "../../styles/GlobalStyles";

export const AuthForm = ({ isSignUp, setIsAuth }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    login: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: false,
    login: false,
    password: false,
  });

  const [error, setError] = useState("");

  // функция валидации
  const validateForm = () => {
    const newErrors = { name: "", login: "", password: "" };
    let isValid = true;

    if (isSignUp && !formData.name.trim()) {
      newErrors.name = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
      isValid = false;
    }

    if (!formData.login.trim()) {
      newErrors.login = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = true;
      setError(
        "Введенные вами данные не корректны. Чтобы завершить регистрацию, введите данные корректно и повторите попытку."
      );
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  // функция, которая отслеживает в полях изменения
  // и меняет состояние компонента
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: false });
    setError("");
  };

  // функция отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      // если у нас форма не прошла валидацию, то дальше не продолжаем
      return;
    }
    try {
      // чтобы не писать две разных функции, выберем нужный запрос через
      // тернарный оператор
      const data = !isSignUp
        ? await signIn({ login: formData.login, password: formData.password })
        : await signUp(formData);

      if (data) {
        setIsAuth(true);
        localStorage.setItem("userInfo", JSON.stringify(data));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
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
              />
            )}
            <AuthFormInput
              type="email"
              name="login"
              placeholder="Эл. почта"
              value={formData.login}
              onChange={handleChange}
            />
            <AuthFormInput
              type="password"
              name="password"
              placeholder="Пароль"
              value={formData.password}
              onChange={handleChange}
            />
            <ErrorMessage>{error}</ErrorMessage>
            <AuthFormBtnEnter type="submit">
              <p>{isSignUp ? "Зарегистрироваться" : "Войти"}</p>
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

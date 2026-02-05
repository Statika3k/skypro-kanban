import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SHeader,
  Container,
  HeaderBlock,
  HeaderLogo,
  HeaderNav,
  TaskButton,
  UserButton,
  PopUserSet,
  UserName,
  UserEmail,
  ThemeToggle,
  ThemeCheckbox,
  ExitButton,
} from "./Header.styled";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";

function Header() {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { isDark, toggleTheme } = useContext(ThemeContext);

  const handleUserClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
  };

  const handleThemeChange = () => {
    toggleTheme();
  };

  return (
    <SHeader>
      <Container>
        <HeaderBlock>
          <HeaderLogo className="_show _light">
            <a href="#" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </HeaderLogo>
          <HeaderLogo className="_dark">
            <a href="#" target="_self">
              <img src="/images/logo_dark.png" alt="logo" />
            </a>
          </HeaderLogo>

          <HeaderNav>
            <TaskButton
              as="button"
              type="button"
              onClick={() => navigate("/card/new")}
            >
              Создать новую задачу
            </TaskButton>

            <UserButton onClick={handleUserClick}>
              {user?.name || "Пользователь"}
            </UserButton>

            {isPopUserOpen && (
              <PopUserSet>
                <UserName>{user?.name || "Пользователь"}</UserName>
                <UserEmail>{user?.email || ""}</UserEmail>
                <ThemeToggle>
                  <p>Темная тема</p>
                  <ThemeCheckbox
                    checked={isDark}
                    onChange={handleThemeChange}
                  />
                </ThemeToggle>
                <ExitButton
                  as="button"
                  type="button"
                  onClick={() => navigate("/exit")}
                >
                  Выйти
                </ExitButton>
              </PopUserSet>
            )}
          </HeaderNav>
        </HeaderBlock>
      </Container>
    </SHeader>
  );
}

export default Header;

import { useState } from "react";
import PopUser from "../popups/PopUser/PopUser";
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

function Header() {
  const [isPopUserOpen, setIsPopUserOpen] = useState(false);
  const navigate = useNavigate();

  const handleUserClick = () => {
    setIsPopUserOpen(!isPopUserOpen);
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
            <TaskButton as="button" type="button" onClick={() => navigate("/card/new")}>
              Создать новую задачу
            </TaskButton>

            <UserButton onClick={handleUserClick}>Ivan Ivanov</UserButton>

            {isPopUserOpen && (
              <PopUserSet>
                <UserName>Ivan Ivanov</UserName>
                <UserEmail>ivan.ivanov@gmail.com</UserEmail>
                <ThemeToggle>
                  <p>Темная тема</p>
                  <ThemeCheckbox />
                </ThemeToggle>
                <ExitButton as="button" type="button" onClick={() => navigate("/exit")}>
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

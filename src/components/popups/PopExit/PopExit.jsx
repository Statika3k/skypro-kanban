import { useNavigate } from "react-router-dom";
import {
  ExitNoButton,
  ExitYesButton,
  PopExitBlock,
  PopExitContainer,
  PopExitForm,
  PopExitFormGroup,
  PopExitTitle,
  StyledPopExit,
} from "./PopExit.styled";

function PopExit({ setIsAuth }) {
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuth(false);
    localStorage.removeItem('isAuth');
    navigate("/sign-in", { replace: true });
  };

  const handleStay = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit">
            <PopExitFormGroup>
              <ExitYesButton className="yes" onClick={handleExit}>
                Да, выйти
              </ExitYesButton>
              <ExitNoButton className="no" onClick={handleStay}>
                Нет, остаться
              </ExitNoButton>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
}

export default PopExit;

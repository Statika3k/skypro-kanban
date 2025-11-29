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
    navigate('/login', { replace: true });
  };

  const handleStay = () => {
    navigate(-1);
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

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

function PopExit({ onLogout, onStay }) {
  const handleExit = () => {    
    if (onLogout) {
      onLogout();
    } else {
      console.error("onLogout prop is missing!");
    }
  };

  const handleStay = (e) => {
    e.preventDefault();
    
    if (onStay) {
      onStay();
    } else {
      console.error("onStay prop is missing!");
    }
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

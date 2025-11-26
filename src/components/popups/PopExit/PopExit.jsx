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

function PopExit() {
  return (
    <StyledPopExit id="popExit">
      <PopExitContainer>
        <PopExitBlock>
          <PopExitTitle>
            <h2>Выйти из аккаунта?</h2>
          </PopExitTitle>
          <PopExitForm id="formExit">
            <PopExitFormGroup>
              <ExitYesButton id="exitYes">
                <a href="modal/signin.html">Да, выйти</a>
              </ExitYesButton>
              <ExitNoButton id="exitNo">
                <a href="main.html">Нет, остаться</a>
              </ExitNoButton>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitBlock>
      </PopExitContainer>
    </StyledPopExit>
  );
}

export default PopExit;

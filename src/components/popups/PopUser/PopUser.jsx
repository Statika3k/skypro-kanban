import {
  PopUserEmail,
  PopUserName,
  PopUserSet,
  PopUserTheme,
  SetButton,
  ThemeCheckbox,
} from "./PopUser.styled";

function PopUser() {
  return (
    <PopUserSet id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserEmail>ivan.ivanov@gmail.com</PopUserEmail>
      <PopUserTheme>
        <p>Темная тема</p>
        <ThemeCheckbox />
      </PopUserTheme>
      <SetButton type="button">
        <a href="#popExit">Выйти</a>
      </SetButton>
    </PopUserSet>
  );
}

export default PopUser;

import { useNavigate } from "react-router-dom";
import {
  PopUserEmail,
  PopUserName,
  PopUserSet,
  PopUserTheme,
  SetButton,
  ThemeCheckbox,
} from "./PopUser.styled";

function PopUser() {
  const navigate = useNavigate();

  const handleExit = () => {    
    navigate("/exit");
  };

  return (
    <PopUserSet id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserEmail>ivan.ivanov@gmail.com</PopUserEmail>
      <PopUserTheme>
        <p>Темная тема</p>
        <ThemeCheckbox />
      </PopUserTheme>
      <SetButton as="button" type="button" onClick={handleExit}>
        Выйти
      </SetButton>
    </PopUserSet>
  );
}

export default PopUser;

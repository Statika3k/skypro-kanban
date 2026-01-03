import { useNavigate } from "react-router-dom";
import PopExit from "../popups/PopExit/PopExit";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { removeToken } from "../../services/auth";

const ExitPage = () => {
  const navigate = useNavigate();
  const { updateUserInfo } = useContext(AuthContext);

  const handleLogout = () => {
    removeToken();
    updateUserInfo(null);
    localStorage.removeItem("isAuth");

    navigate("/sign-in", { replace: true });
  };

  const handleStay = () => {
    navigate("/", { replace: true });
  };
  return <PopExit onLogout={handleLogout} onStay={handleStay} />;
};

export default ExitPage;

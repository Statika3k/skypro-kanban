import { useNavigate } from "react-router-dom";

const ExitPage = ({ setIsAuth }) => {
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth");    
    navigate("/sign-in", { replace: true });
  };

  return (
    <div>
      <p>Вы действительно хотите выйти?</p>
      <button onClick={handleExit}>Да, выйти</button>
      <button onClick={() => navigate(-1)}>Отмена</button>
    </div>
  );
};

export default ExitPage;
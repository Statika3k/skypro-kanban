import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import MainContent from "./components/MainContent/MainContent";
import SignInPage from "./components/pages/SignInPage";
import SignUpPage from "./components/pages/SignUpPage";
import NewCardPage from "./components/pages/NewCard";
import BrowsePage from "./components/pages/BrowsePage";
import ExitPage from "./components/pages/ExitPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import PrivateRoute from "./components/PrivateRoute";
import { getToken } from "./services/auth";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(() => {
    // Проверяем при инициализации
    const token = getToken();
    const authStatus = localStorage.getItem("isAuth") === "true";
    return !!token && authStatus;
  });

  useEffect(() => {    
  }, [isAuth]);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainContent />}>
          <Route path="card/new" element={<NewCardPage />} />
          <Route path="card/:id" element={<BrowsePage />} />
          <Route path="exit" element={<ExitPage setIsAuth={setIsAuth} />} />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
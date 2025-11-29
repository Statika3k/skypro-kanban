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
import TestPage from "./components/pages/ExitPage";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const auth = localStorage.getItem("isAuth") === "true";
    setIsAuth(auth);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainContent />}>
          <Route path="new-card" element={<NewCardPage />} />
          <Route path="card/:id" element={<BrowsePage />} />
          <Route path="exit" element={<ExitPage setIsAuth={setIsAuth} />} />
          <Route path="exit" element={<TestPage />} />
        </Route>
      </Route>

      <Route path="/sign-in" element={<SignInPage setIsAuth={setIsAuth} />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

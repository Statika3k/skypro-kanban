import { useContext } from "react";
import AppRoutes from "./AppRoutes";
import AuthProvider from "./context/AuthProvider";
import { TaskProvider } from "./context/TaskProvider";
import { ThemeContext } from "./context/ThemeContext";
import { GlobalStyles } from "./styles/GlobalStyles";
import { ThemeProvider } from "styled-components";


export default function App() {
  const { isDark } = useContext(ThemeContext);

  return (
    <ThemeProvider theme={{ isDark }}>
      <GlobalStyles />
      <AuthProvider>
        <TaskProvider>
          <AppRoutes />
        </TaskProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

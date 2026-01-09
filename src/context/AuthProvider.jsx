import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { checkLs } from "../utils/checkLs";

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(checkLs());

  const updateUserInfo = (userData) => {
    if (userData) {
      localStorage.setItem("userInfo", JSON.stringify(userData));
      localStorage.setItem("token", userData.token || "");
      localStorage.setItem("isAuth", "true");
    } else {
      localStorage.removeItem("userInfo");
      localStorage.removeItem("token");
      localStorage.removeItem("isAuth");
    }
    setUser(userData);
  };

  return (
    <AuthContext.Provider value={{ user, updateUserInfo }}>
      {children}
    </AuthContext.Provider>
  );
}

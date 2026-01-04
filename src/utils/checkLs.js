export function checkLs() {
  const userInfo = localStorage.getItem("userInfo");
  const token = localStorage.getItem("token");
  const isAuth = localStorage.getItem("isAuth") === "true";

  if (isAuth && userInfo && token) {
    try {
      const parsed = JSON.parse(userInfo);
      return { ...parsed, token }; 
    } catch {
      return null;
    }
  }

  return null;
}

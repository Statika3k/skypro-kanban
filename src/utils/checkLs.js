export function checkLs() {
  try {
    const userInfo = window.localStorage.getItem("userInfo");

    if (userInfo) {
      const parsed = JSON.parse(userInfo);
      return parsed && typeof parsed === "object" ? parsed : null;
    }
    return null;
  } catch {
    return null;
  }
}

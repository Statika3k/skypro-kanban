import styled from "styled-components";

export const SHeader = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => (theme.isDark ? "#20202C" : "#FFFFFF")};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }

  &._dark {
    display: ${({ theme }) => (theme.isDark ? "block" : "none")};
  }

  &._show._light {
    display: ${({ theme }) => (theme.isDark ? "none" : "block")};
  }
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TaskButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #565eef;
  color: #ffffff;
  border: none;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;

  &:hover {
    background-color: #33399b;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  @media screen and (max-width: 495px) {
    z-index: 3;
    position: fixed;
    left: 16px;
    bottom: 30px;
    top: auto;
    width: calc(100vw - 32px);
    height: 40px;
    border-radius: 4px;
    margin-right: 0;
  }
`;

export const UserButton = styled.button`
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#565EEF")};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;

  &:hover {
    color: #33399b;
  }

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid currentColor;
    border-bottom: 1.9px solid currentColor;
    transform: rotate(-45deg);
    margin-left: 5px;
  }
`;

export const PopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid
    ${({ theme }) => (theme.isDark ? "#4E5566" : "rgba(148, 166, 190, 0.4)")};
  background: ${({ theme }) => (theme.isDark ? "#20202C" : "#FFF")};
  box-shadow: 0px 10px 39px 0px
    ${({ theme }) =>
      theme.isDark ? "rgba(148, 166, 190, 0.4)" : "rgba(26, 56, 101, 0.21)"};
  padding: 34px;
  text-align: center;
  z-index: 10;
`;

export const UserName = styled.p`
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin: 0 0 4px;
`;

export const UserEmail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin: 0 0 10px;
`;

export const ThemeToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;

  p {
    color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin: 0;
  }
`;

export const ThemeCheckbox = styled.input.attrs({ type: "checkbox" })`
  position: relative;
  width: 24px;
  height: 13px;
  border-radius: 100px;
  background: ${({ theme }) => (theme.isDark ? "#4E5566" : "#EAEEF6")};
  outline: none;
  appearance: none;

  &::before {
    content: "";
    position: absolute;
    top: 1px;
    left: 1px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background-color: ${({ theme }) => (theme.isDark ? "#565EEF" : "#94A6BE")};
    transition: left 0.2s ease;
  }

  &:checked::before {
    left: 12px;
  }
`;

export const ExitButton = styled.button`
  width: 72px;
  height: 30px;
  background: transparent;
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#565EEF")};
  border-radius: 4px;
  border: 1px solid ${({ theme }) => (theme.isDark ? "#FFF" : "#565EEF")};
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  outline: none;

  &:hover {
    background-color: #33399b;
    color: #ffffff;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

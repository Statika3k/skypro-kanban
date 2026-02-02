import styled from "styled-components";

export const StyledPopExit = styled.div`
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;

  &:target {
    display: block;
  }
`;

export const PopExitContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const PopExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => (theme.isDark ? "#202229" : "#FFFFFF")};
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const PopExitTitle = styled.div`
  text-align: center;
  margin-bottom: 20px;

  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
  }
`;

export const PopExitForm = styled.form`
  width: 100%;
`;

export const PopExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExitYesButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: #565eef;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
  }
`;

export const ExitNoButton = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid ${({ theme }) => (theme.isDark ? "#FFFFFF" : "#565EEF")};
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: ${({ theme }) => (theme.isDark ? "#FFFFFF" : "#565EEF")};
  a {
    width: 100%;
    height: 100%;
    color: #565eef;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
  }

  &:hover {
    background-color: #33399b;
    color: #ffffff;

    a {
      color: #ffffff;
    }
  }
`;

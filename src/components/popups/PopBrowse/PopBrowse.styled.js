import styled from "styled-components";

export const StyledPopBrowse = styled.div`
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;

  &:target {
    display: block;
  }

  @media (max-width: 660px) {
    top: 70px;
  }
`;

export const PopBrowseContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);

  @media (max-width: 660px) {
    padding: 0;
    justify-content: flex-start;
  }
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => (theme.isDark ? "#202229" : "#FFFFFF")};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;

  @media (max-width: 660px) {
    border-radius: 0;
  }

  @media (max-width: 495px) {
    padding: 20px 16px 32px;
    border: none;
  }
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;

  .categories__theme {
    opacity: 1;
  }

  .theme-down {
    display: none;
    margin-bottom: 20px;

    @media (max-width: 495px) {
      display: block;
    }
  }

  .theme-top {
    display: block;

    @media (max-width: 495px) {
      display: none;
    }
  }
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
`;

export const PopBrowseTitle = styled.h3`
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
  font-size: 20px;
  font-weight: 600;
  line-height: 24px;
`;

export const Status = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  color: #94a6be;
  padding: 11px 14px 10px;
  margin-right: 7px;
  margin-bottom: 7px;

  &:hover {
    cursor: pointer;
  }

  &._hide {
    display: none;
  }

  &._active {
    background-color: #94a6be;
    color: ${({ theme }) => (theme.isDark ? "#000" : "#FFF")};
    cursor: pointer;
  }

  p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }
`;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 660px) {
    display: block;
  }
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;

  @media (max-width: 495px) {
    max-width: 100%;
  }
`;

export const PopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  margin-bottom: 8px;
`;

export const FormBrowseArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  height: 200px;
  margin-top: 14px;
  outline: none;
  padding: 20px 14px;
  background: ${({ theme }) => (theme.isDark ? "#151419" : "#eaeef6")};
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-family: "Roboto";
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  color: #94a6be;

  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94a6be;
    letter-spacing: -0.14px;
  }

  @media screen and (max-width: 495px) {
    max-width: 100%;
    height: 44px;
    padding: 14px;

    &::placeholder {
      line-height: 20px;
    }
  }
`;

export const BtnBrowse = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 20px;

  @media (max-width: 495px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 10px;

  @media (max-width: 495px) {
    flex-direction: column;
    gap: 10px;
    width: 100%;
  }
`;

export const EditButton = styled.button`
  height: 30px;
  padding: 0 14px;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &._btn-bor {
    border: 0.7px solid ${({ theme }) => (theme.isDark ? "#FFF" : "#565eef")};
    background: transparent;
    color: ${({ theme }) => (theme.isDark ? "#FFF" : "#565eef")};

    &:hover {
      background-color: #33399b;
      color: #ffffff;
    }
  }

  &._btn-bg {
    background: #565eef;
    color: #ffffff;

    &:hover {
      background-color: #33399b;
    }
  }

  a {
    color: inherit;
    text-decoration: none;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-width: 495px) {
    width: 100%;
    height: 40px;
  }
`;

export const CloseButton = styled(EditButton)``;

export const CategoriesTheme = styled.div`
  border-radius: 24px;
  padding: 8px 20px;
`;

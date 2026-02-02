import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) => (theme.isDark ? "#151419" : "#eaeef6")};
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 25px 0 49px;

  @media (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;

export const SMainContent = styled.div`
  width: 100%;
  display: flex;

  @media (max-width: 1200px) {
    display: block;
  }
`;

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 1.5rem;
  color: #94a6be;
  font-weight: bold;
`;

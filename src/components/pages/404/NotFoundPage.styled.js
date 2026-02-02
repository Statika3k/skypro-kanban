import { Link } from "react-router-dom";
import styled from "styled-components";

export const NotFoundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.isDark ? '#0F0F14' : '#F1F4F9'};
  padding: 20px;
  transition: background-color 0.3s ease;
  
  h1 {
    color: #565EEF;
    font-size: 100px;
    font-weight: 700;
    line-height: 1;
    margin: 0 0 20px;
    
    @media (max-width: 495px) {
      font-size: 70px;
    }
  }
`;

export const NotFoundText = styled.p`
  color: ${({ theme }) => (theme.isDark ? "#FFF" : "#000")};
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  margin-bottom: 30px;
  transition: color 0.3s ease;
  
  @media (max-width: 495px) {
    font-size: 18px;
    text-align: center;
  }
`;

export const NotFoundLink = styled(Link)`
  color: #565EEF;
  font-size: 16px;
  font-weight: 500;
  text-decoration: none;
  padding: 10px 20px;
  border: 1px solid #565EEF;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #565EEF;
    color: #FFFFFF;
  }
  
  @media (max-width: 495px) {
    font-size: 14px;
    padding: 12px 24px;
  }
`;
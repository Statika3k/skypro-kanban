import styled from 'styled-components';

export const CardItem = styled.div`
  padding: 5px;
  animation: card-animation 500ms linear;
  
  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }
`;

export const CardsCard= styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
 
  ${({ $theme }) =>
    $theme === 'Web Design' &&
    `
    background-color: #FFE4C2;
    color: #FF6D00;
  `}

  ${({ $theme }) =>
    $theme === 'Research' &&
    `
    background-color: #B4FDD1;
    color: #06B16E;
  `}

  ${({ $theme }) =>
    $theme === 'Copywriting' &&
    `
    background-color: #E9D4FF;
    color: #9A48F1;
  `}

  ${({ $theme }) =>
    $theme === 'default' &&
    `
    background: #94A6BE;
    color: #FFFFFF;
  `}
`;

export const CardBtn = styled.a`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  cursor: pointer;
  text-decoration: none;
`;

export const CardDots = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const DateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
`;
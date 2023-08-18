import styled from 'styled-components';

export const Card = styled.div`
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme: { shadows } }) => shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey};
  width: ${({ theme }) => theme.spacing(100)};

  margin-bottom: 30px;
`;

export const CardHeader = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-bottom: 10px;
`;

export const CardText = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.medium};
  text-align: center;
  margin-bottom: 10px;
`;

export const CardPoster = styled.img`
  padding-top: 50px;
  margin: 0 auto;
  object-fit: cover;
  border-radius: 80%;
  margin-bottom: 10px;

  border: 1px solid black;
`;

export const CardSocials = styled.ul`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export const CardSocialsList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardSocialsText = styled.span`
  display: flex;
`;

import styled from 'styled-components';

export const Card = styled.div`
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme: { shadows } }) => shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey};
  width: ${({ theme }) => theme.spacing(120)};
  height: 150px;

  margin-bottom: 50px;
`;

export const StatisticsHeader = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.large};
  text-align: center;
  margin-bottom: 10px;

  margin-top: 20px;
`;

export const StatisticsList = styled.ul`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const StatisticsItem = styled.li`
  padding: 10px;
  border-radius: 20%;
`;

import styled from 'styled-components';

export const CardList = styled.ul`
  margin: 0 auto;
  box-shadow: ${({ theme: { shadows } }) => shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey};
  width: ${({ theme }) => theme.spacing(120)};
  height: 500px;
`;

export const FriendsItem = styled.li`
  margin: 0 auto;
  margin-bottom: 65px;
  gap: 20px;
  display: flex;
  overflow: hidden;
  justify-content: center;

  box-shadow: ${({ theme: { shadows } }) => shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.white};
  width: ${({ theme }) => theme.spacing(50)};
`;

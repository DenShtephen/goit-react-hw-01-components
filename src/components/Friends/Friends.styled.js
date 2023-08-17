import styled from 'styled-components';

export const Card = styled.div`
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme: { shadows } }) => shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey};
  width: ${({ theme }) => theme.spacing(120)};
  height: 100px;
`;

import styled from 'styled-components';

export const Card = styled.table`
  overflow: hidden;
  margin: 0 auto;
  box-shadow: ${({ theme: { shadows } }) => shadows.regular};
  border-radius: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.grey};
  width: ${({ theme }) => theme.spacing(120)};

  margin-top: 50px;

  border-collapse: collapse;
  text-align: center;
  tr,
  th,
  td {
    width: 160px;
    border: 1px solid black;
    font-size: 16px;
  }
`;

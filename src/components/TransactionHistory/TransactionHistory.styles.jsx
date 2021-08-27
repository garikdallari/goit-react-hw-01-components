import styled from '@emotion/styled';

export const Table = styled.table`
  border: 1px solid gray;
  width: 500px;
  margin-left: 100px;
  text-align: center;
`;

export const Title = styled.th`
  padding: 15px;
  background-color: crimson;
  color: white;
`;

export const El = styled.td`
  &:not(:last-child) {
    border-right: 1px solid gray;
  }
  color: gray;
  padding: 10px;
`;

import styled from '@emotion/styled';

export const List = styled.ul`
  list-style: none;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Status = styled.span`
  margin-right: 5px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;

export const Avatar = styled.img`
  width: 48px;
  margin-right: 10px;
`;

export const Name = styled.p`
  font-size: 16px;
`;

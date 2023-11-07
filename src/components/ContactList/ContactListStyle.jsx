import styled from 'styled-components';

export const Item = styled.li`
  width: 350px;
  margin-bottom: 8px;
  font-size: 18px;
  position: relative;
`;

export const ItemNumber = styled.span`
  font-weight: bold;
  padding-left: 8px;
`;

export const ItemBtnDel = styled.button`
  font-size: 17px;

  position: absolute;
  right: 0;
  background-color: #ee82ee;
  border-color: #9370db;
  border-radius: 3px;
  :hover {
    background-color: #9370db;
  }
`;

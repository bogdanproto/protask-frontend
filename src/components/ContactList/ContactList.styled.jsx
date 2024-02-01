import styled from 'styled-components';

export const ContactListStyled = styled.ul`
  display: flex;
  flex-direction: column;

  padding-bottom: 40px;

  height: 450px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const ContactsListText = styled.p`
  font-size: 16px;
  text-align: center;
`;

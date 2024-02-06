import styled from 'styled-components';

export const FiltersButton = styled.button`
  /* outline: 1px solid red; */
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
  font-size: 14px;

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

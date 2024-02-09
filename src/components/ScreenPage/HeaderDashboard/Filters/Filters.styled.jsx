import styled from 'styled-components';

export const FiltersButton = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${p => p.theme.spacing(4)};
  padding: ${p => p.theme.spacing(4)};
  font-size: 14px;
  opacity: 0.8;

  transition: all ${p => p.theme.cubicTransition};

  &:hover {
    color: ${p => p.theme.colors.accentColor};
  }
`;

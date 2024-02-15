import { InputPassword } from 'components/Auth';
import styled from 'styled-components';

export const InputPasswordFormStyle = styled(InputPassword)`
  padding: 14px 18px;
  border: 1px solid ${p => p.theme.colors.inputBorder};
  background-color: transparent;
  color: ${p => p.theme.colors.inputColor};
  transition: border-color ${p => p.theme.cubicTransition};
  opacity: 1;
  box-shadow: none;

  &:focus {
    border: 1px solid ${p => p.theme.colors.accentColorHover};
    outline: none;
  }
`;

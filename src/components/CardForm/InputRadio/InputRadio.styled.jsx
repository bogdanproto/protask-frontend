import styled from 'styled-components';

export const InputRadio = styled.input.attrs({ type: 'radio' })`
  position: absolute;

  width: 16px;
  height: 16px;

  opacity: 0;
  z-index: 1;

  cursor: pointer;
`;

export const CustomRadio = styled.span`
  position: relative;
  box-sizing: border-box;

  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  vertical-align: text-top;
  &:focus {
    opacity: 1;
  }

  ${({ $mode, theme }) => {
    switch ($mode) {
      case 'low':
        return `
          background: #8fa1d0;
          ${InputRadio}:checked + && {
            background: transparent;
            border: 1px solid #8fa1d0;
              &:before {
                  content: '';

                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);

                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background: #8fa1d0;
                  

                  transition: 0.2s ease-in;
               }
          }
        `;

      case 'medium':
        return `
          background: #E09CB5;
          ${InputRadio}:checked + && {
            background: transparent;
            border: 1px solid #E09CB5;
              &:before {
                  content: '';

                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);

                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background: #E09CB5;
                  

                  transition: 0.2s ease-in;
               }
          }
        `;

      case 'high':
        return `
          background: #BEDBB0;
          ${InputRadio}:checked + && {
            background: transparent;
            border: 1px solid #BEDBB0;
              &:before {
                  content: '';

                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);

                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background: #BEDBB0;
                  

                  transition: 0.2s ease-in;
               }
          }
        `;
      default:
        return `
            background: ${theme.colors.radioButtonGray};
          ${InputRadio}:checked + && {
            background: transparent;
            border: 1px solid ${theme.colors.radioButtonGray};
              &:before {
                  content: '';

                  position: absolute;
                  left: 50%;
                  top: 50%;
                  transform: translate(-50%, -50%);

                  display: inline-block;
                  width: 8px;
                  height: 8px;
                  border-radius: 50%;
                  background: ${theme.colors.radioButtonGray};
                  

                  transition: 0.2s ease-in;
               }
          }
        `;
    }
  }}
`;

export const RadioButtnonBox = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 8px;
`;

export const RadioContainer = styled.span`
  position: relative;
  display: block;
`;

export const Label = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: ${props => props.theme.colors.mainFontColor};
  opacity: 0.5;
  margin-bottom: 4px;
`;

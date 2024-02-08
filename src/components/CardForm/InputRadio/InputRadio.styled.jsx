import styled from 'styled-components';

export const Input = styled.input.attrs({ type: 'radio' })``;

export const LabelText = styled.span`
  position: relative;
  box-sizing: border-box;

  display: inline-block;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  vertical-align: text-top;
  margin-right: 5px;
  cursor: pointer;
  &:focus {
    opacity: 1;
  }

  ${props => {
    switch (props.$mode) {
      case 'low':
        return `
          background: #8fa1d0;
          ${Input}:checked + && {
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
          ${Input}:checked + && {
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
          ${Input}:checked + && {
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
            background: #FFFFFF30;
          ${Input}:checked + && {
            background: transparent;
            border: 1px solid #FFFFFF30;
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
                  background: #FFFFFF30;
                  

                  transition: 0.2s ease-in;
               }
          }
        `;
    }
  }}
`;

import styled from 'styled-components';

export const ProfileIconBtn = styled.button`
  position: relative;
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 0 auto 24px;

  svg {
    display: block;
  }

  .burger-icon {
    fill: ${p => p.theme.colors.btnSmall};
  }

  .burger-icon-plus {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);
    border-radius: 6px;
    background-color: ${p => p.theme.colors.btnPlus};
    padding: 7px;
    stroke: ${p => p.theme.colors.black};
  }
`;
